import React, {useState, useEffect, useRef, useContext} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Alert,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import PopUp from '../Global/PopUp';
import {GlobalContext} from '../../providers/ContextGlobalState';
import ScrollScreen from '../../components/Global/ScrollScreen';
import {Bar} from 'react-native-progress';
import Button from './../Global/Button';
import NavigationHeader from '../Global/NavigationHeader';
import TestPage from './TestPage';
import MultiTestPage from './MultiTestPage';
import styles from './styles';
import ProgressCircle from 'react-native-progress-circle';
import Timer from '../Timer';
import TextPopup from '../Global/TextPopup';

//asuult randomoor holih function
const shuffle = (arr) => {
  var s = arr.sort(func);
  function func(a, b) {
    return 0.5 - Math.random();
  }
  return s;
};

const WIDTH = Dimensions.get('window').width;

let arr = []; //hariulsan eseh isAnswered
let pos = []; //hariulsan hariult

const MockTest = (props) => {
  const {state, dispatch} = useContext(GlobalContext);
  const [isStarted, setStart] = useState(false);
  const [data, setData] = useState([]); //flatList data
  const [isFinished, setFinished] = useState(false); //test duussan eseh
  const [resultVisible, setResultVisible] = useState(false); //aldaa harah
  const [pageList, setList] = useState(false);
  const [page, setPage] = useState(1);
  const [score, setScore] = useState(0);
  const flatListRef = useRef();

  const checkResult = (data) => {
    let tempScore = 0;
    arr.forEach(ele => {
        if (ele) tempScore++;
    })
    console.log('score = ', tempScore);
    setScore(tempScore);
  };

  useEffect(() => {
    //fetch question
    let questions = [];
    pos = [];
    arr = [];
    for (let i = 0; i < props.test.length; i++) {
      let question = {};
      if (props.test[i].type !== 1) {
        question = props.test[i];
        question.answers = shuffle(question.answers);
      } else {
        // songoh asuult uyd
        const choiceMatch = shuffle(
          props.test[i].answer_matches.filter((answer) => answer.type === 0),
        );
        const choice = shuffle(
          props.test[i].answer_matches.filter((answer) => answer.type === 1),
        );
        let answerMatrix = [];
        let correctAnswer = [];

        for (let i = 0; i < choice.length; i++) {
          let choiceIndex = choiceMatch.findIndex(
            (choiceMatch) => choiceMatch.id === choice[i].answer_id,
          );
          correctAnswer[i] = choiceIndex;
        }
        answerMatrix.push({answers: correctAnswer, correct: true});
        for (let i = 0; i < 3; i++) {
          let wrongAnswer = [];
          correctAnswer.forEach((element) => {
            wrongAnswer.push(element);
          });
          wrongAnswer = shuffle(wrongAnswer);
          while (
            JSON.stringify(wrongAnswer) === JSON.stringify(correctAnswer)
          ) {
            wrongAnswer = shuffle(wrongAnswer);
          }
          answerMatrix.push({answers: wrongAnswer, correct: false});
        }
        answerMatrix = shuffle(answerMatrix);
        question = {
          id: props.test[i].id,
          category_id: props.test[i].category_id,
          name: props.test[i].name,
          type: props.test[i].type,
          choiceMatch: choiceMatch,
          choice: choice,
          answerMatrix: answerMatrix,
        };
      }
      questions.push(question);
      pos.push(null);
      arr.push(null);
    }
    setData(questions);
  }, []);

  const goBack = () => {
    if (!resultVisible) {
      checkResult(data);
      Alert.alert('Анхаар!', 'Шалгалтыг дуусгахдаа итгэлтэй байна уу?', [
        {
          text: 'Үгүй',
          onPress: () => null,
        },
        {
          text: 'Тийм',
          onPress: () => {
            setFinished(true);
          },
        },
      ]);
    } else {
      setFinished(true);
    }
  };

  let onScrollEnd = (e) => {
    let pageNumber = Math.round(e.nativeEvent.contentOffset.x / WIDTH);
    setPage(pageNumber + 1);
  };

  const getItemLayout = (data, index) => ({
    length: WIDTH,
    offset: WIDTH * index,
    index,
  });

  const goToPage = (val) => {
    flatListRef.current.scrollToIndex({animated: true, index: val});
  };

  const _keyExtractor = (item, index) => index + '';

  const render = ({item, index}) => (
    <View style={{flex: 1}}>
      {item.type === 1 ? (
        <MultiTestPage
          item={item}
          index={index}
          checkTest={checkTest}
          answeredIndex={pos[index]}
          showAnswer={resultVisible}
          isFinished={resultVisible}
        />
      ) : (
        <TestPage
          item={item}
          index={index}
          checkTest={checkTest}
          answeredIndex={pos[index]}
          showAnswer={resultVisible}
          isFinished={resultVisible}
        />
      )}
    </View>
  );

  const checkTest = (index, answerIndex, isCorrect) => {
    pos[index] = answerIndex;
    arr[index] = isCorrect;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextPopup
        visible={!isStarted}
        body={props.alertText}
        cancel={() => props.navigation.goBack()}
        startTest={() => setStart(true)}
      />
      <NavigationHeader
        type={3}
        onPress={goBack}
        title={props.headerName}
        headerComponent={
          isStarted && (
            <Timer
              min={props.time}
              sec={0}
              timeAlert={props.timeAlert * 60}
              // isStarted={isStarted}
              onFinish={() => {
                setFinished(true);
              }}
            />
          )
        }
      />
      <PopUp
        close={() => setList(false)}
        visible={pageList}
        body={
          <ScrollScreen
            max={data.length}
            setPage={(page) => {
              setList(false);
              setPage(page);
              goToPage(page - 1);
            }}
          />
        }
      />
      <View
        style={{
          marginHorizontal: 10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Bar
          animating={true}
          indeterminate={false}
          width={(WIDTH * 70) / 100}
          borderWidth={0}
          color="#FFC830"
          unfilledColor="#116EE2"
          progress={data.length !== 0 ? page / data.length : 0}
        />
        <TouchableOpacity style={styles.paging} onPress={() => setList(true)}>
          <Text
            style={[
              styles.pagingText,
              {
                borderRadius: 3,
                marginRight: 0,
              },
            ]}>
            {page}
          </Text>
          <Text style={[styles.pagingText, {color: '#116EE2', marginLeft: 0}]}>
            /{data.length}
          </Text>
        </TouchableOpacity>
      </View>
      <Modal visible={isFinished} transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={styles.score}>
            {props.threshold <= score ? (
              <Text
                style={{
                  fontSize: 25,
                  color: '#52f731',
                  marginBottom: 10,
                  textAlign: 'center',
                }}>
                Та тэнцлээ !
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 25,
                  color: '#ff4542',
                  marginBottom: 25,
                  textAlign: 'center',
                }}>
                Та тэнцсэнгүй !
              </Text>
            )}
            {props.isContinue ? null : (
              <ProgressCircle
                percent={score / data.length*100}
                radius={80}
                borderWidth={8}
                color="#116EE2"
                shadowColor="#ddebfb"
                bgColor="#fff"
                >
                <Text
                  style={{
                    fontSize: 61,
                    color: '#116EE2',
                    fontFamily: 'Tw Cen MT',
                  }}>
                  {Math.floor(score/data.length*100)}
                  <Text style={{fontSize: 20}}>%</Text>
                </Text>
              </ProgressCircle>
            )}
            <View style={{flexDirection: 'row', marginBottom: 10, marginTop: 10}}>
                <View style={{flex: 0.5}}>
                    <View style={styles.labelView}>
                <Text style={styles.scoreLabel}>Зөв{'\n'}хариулт</Text>
                    </View>
                    <Text style={[styles.scoreText, {color: '#116EE2'}]}>
                        {score}
                    </Text>
              </View>
              <View style={{flex: 0.5}}>
                    <View style={styles.labelView}>
                        <Text style={styles.scoreLabel}>Буруу{'\n'}хариулт</Text>
                    </View>
                    <Text style={[styles.scoreText, {color: '#FF4040'}]}>
                  {data.length - score}
                </Text>
              </View>
            </View>
            <Button
              styleButton={styles.resultButton}
              styleText={{color: '#fff', fontSize: 18}}
              text='Алдаа харах'
              onPress={() => {
                setFinished(false);
                setResultVisible(true);
                goToPage(0);
              }}
            />
            {props.threshold <= score && props.isContinue && (
              <Button
                styleButton={styles.resultButton}
                styleText={{color: '#fff', fontSize: 18}}
                text={`Цааш үргэлжлүүлэх`}
                onPress={() => {
                  setFinished(false);
                  let date = new Date();
                  scoreDashboard = {
                    isContinue: props.threshold <= score,
                    type: props.type,
                    date: `${date.getFullYear()}-${
                      date.getMonth() + 1
                    }-${date.getDate()}`,
                    total: data.length,
                    score: score,
                    passed: props.threshold <= score,
                  };
                  dispatch({type: 'SET_SCORE', list: scoreDashboard});

                  props.finish(score);
                }}
              />
            )}
            <Button
              styleButton={styles.resultButton}
              styleText={{color: '#fff', fontSize: 18}}
              text={`Дуусгах`}
              onPress={() => {
                setFinished(false);
                let date = new Date();
                scoreDashboard = {
                  type: props.type,
                  date: `${date.getFullYear()}-${
                    date.getMonth() + 1
                  }-${date.getDate()}`,
                  total: data.length,
                  score: score,
                  passed: props.threshold <= score,
                };
                console.log(scoreDashboard);
                dispatch({type: 'SET_SCORE', list: scoreDashboard});
                props.navigation.goBack();
              }}
            />
          </View>
        </View>
      </Modal>
      <FlatList
        windowSize={5}
        maxToRenderPerBatch={2}
        showsHorizontalScrollIndicator={false}
        initialNumToRender={1}
        horizontal={true}
        pagingEnabled={true}
        data={data}
        keyExtractor={_keyExtractor}
        renderItem={render}
        extraData={false}
        ref={flatListRef}
        getItemLayout={getItemLayout}
        onMomentumScrollEnd={onScrollEnd} // pagination deer huudasnii state-iig solino
      />
    </SafeAreaView>
  );
};

export default MockTest;
