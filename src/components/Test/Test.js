import React, {useState, useEffect, useRef, useContext} from 'react';
import {
    SafeAreaView,
    View,
    FlatList,
    Alert,
    Dimensions,
    TouchableOpacity,
    Text,
    ActivityIndicator
} from 'react-native';
import styles from "./styles";
import PopUp from '../Global/PopUp'
import ScrollScreen from '../../components/Global/ScrollScreen'
import NavigationHeader from "../Global/NavigationHeader";
import TestPage from './TestPage';
import MultiTestPage from './MultiTestPage';
import FinishScreen from './FinishScreen'
import {Bar} from 'react-native-progress';

const shuffle = (arr) => {
    let s = [];
    arr.forEach(element => {
        s.push(element);
    });
    s = arr.sort(func);
    function func(a, b) {
    return 0.5 - Math.random();
    }
    return s;
};

const WIDTH = Dimensions.get('window').width;

let arr = []; //hariulsan eseh isAnswered
let pos = []; //hariulsan hariult

const Test = (props) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [isFinished, setFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [material, setMaterial] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [pageList, setList] = useState(false);

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
        let questions = [];
        pos = [];
        arr = [];
        if (data.length === 0) {
            //fetch question
            let questions = [];
            for (let i = 0; i < props.test.length; i++) {
                let question = {};
                if ( props.test[i].type !== 1) {
                    question = props.test[i];
                    question.answers = shuffle(question.answers);
                } else {
                    // songoh asuult uyd
                    const choiceMatch = shuffle(props.test[i].answer_matches.filter(answer => answer.type === 0));
                    const choice = shuffle(props.test[i].answer_matches.filter(answer => answer.type === 1));
                    let answerMatrix = [];
                    let correctAnswer = [];

                    for (let i = 0; i < choice.length; i++) {
                        let choiceIndex = choiceMatch.findIndex(choiceMatch => choiceMatch.id === choice[i].answer_id);
                        correctAnswer[i] = choiceIndex;
                    }
                    answerMatrix.push({answers: correctAnswer, correct: true});
                    for (let i = 0; i < 3; i ++) {
                        let wrongAnswer = [];
                        correctAnswer.forEach(element => {
                            wrongAnswer.push(element);
                        });
                        wrongAnswer = shuffle(wrongAnswer);
                        while (JSON.stringify(wrongAnswer) === JSON.stringify(correctAnswer)) {
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
                        answerMatrix: answerMatrix
                    };
                    
                }
                questions.push(question);
                pos.push(null);
                arr.push(null);
            }
            setData(questions);
        }
    }, []);

    const goBack = () => {
        if (data != null) {
            checkResult(data);
            Alert.alert("Анхаар!", "Шалгалтыг дуусгахдаа итгэлтэй байна уу?", [
                {
                    text: "Үгүй",
                    onPress: () => null,
                },
                { 
                    text: "Тийм", 
                    onPress: () => {
                        setFinished(true)
                    } 
                }
            ]);
        } else {
            navigator.goBack();
        }
    }

    const getItemLayout = (data, index) => ({length: WIDTH, offset: WIDTH * index, index});

    const goToPage = (val) => flatListRef.current.scrollToIndex({animated: true, index: val})
    
    const _keyExtractor = (item, index) =>  {
        return index+'';
    }

    let onScrollEnd = (e) => {
        let pageNumber = Math.round(e.nativeEvent.contentOffset.x/WIDTH);
        setPage(pageNumber+1);
    }

    const render = ({ item, index }) => (
        <View style={{flex:1}}>
            {item.type === 1 
                ? <MultiTestPage item={item} index={index} checkTest={checkTest} answeredIndex={pos[index]} showAnswer={true}/>
                : <TestPage item={item} index={index} checkTest={checkTest} answeredIndex={pos[index]} showAnswer={true}/>
            }
        </View>
    )

    const goNavigationBack = () => {
        console.log('going back');
        setFinished(false);
        setData([]);
        props.navigation.goBack();
    }

    const checkTest = (index, answerIndex, isCorrect) => {
        pos[index] = answerIndex;
        arr[index] = isCorrect;
    };

    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader 
                type={3}
                onPress={goBack}
                title={props.title}
                // headerComponent={
                //     <Button 
                //         styleButton={styles.buttonFloat} 
                //         styleText={styles.buttonFloatText} 
                //         onPress={() => {setPopUp(!popUp)}}
                //     >
                //         {popUp ? <CrossIcon /> : <ShareIcon />}
                //     </Button>
                // }
            />
            {data.length !== 0 
                ? (
                    <>
                        <PopUp 
                            close={() => setList(false)}
                            visible={pageList}
                            body={<ScrollScreen max={data.length} setPage={(page) => {setList(false); setPage(page); goToPage(page-1);}} />}
                        />
                        {/* duusahad haragddag screen popup */}
                        <FinishScreen goBack={goNavigationBack} isFinished={isFinished} score={score} max={data.length} />

                        {/* huudaslalt bolon progress bar garj bui heseg */}

                        <View style={{marginHorizontal: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Bar animating={true} indeterminate={false} width={WIDTH*70/100} borderWidth={0} color='#FFC830' unfilledColor="#116EE2" progress={data.length !== 0 ? page/data.length : 0} />
                            <TouchableOpacity style={styles.paging} onPress={() => setList(true)}>
                                <Text style={styles.pagingText}>{page}<Text style={[styles.pagingText,{color: '#116EE2'}]}>/{data.length}</Text></Text>
                            </TouchableOpacity>
                        </View>
                        
                        {/* asuult zurj baigaa flatlist */}

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
                        {/* Lesson ymu marterial ruu shiljeh songoltiig garagdag popup */}
                        {/* <PopUp
                            close={() => {
                                setPopUp(false)
                            }}
                            visible={popUp}
                            style={styles.materialPosition}
                            noDisabler={true}
                            body={
                                <View style={styles.material}>
                                    <Button
                                        styleButton={{flexDirection: 'row',}} 
                                        text={`Материал`}
                                        onPress={() =>{
                                            // setMaterial(true);
                                        }}
                                    >
                                        <MaterialIcon style={{marginRight: 5}} />
                                    </Button>
                                    <Button 
                                    styleButton={{flexDirection: 'row', marginTop: 10, right: 10}} 
                                    text={`Хичээл`}
                                    onPress={() =>{
                                    }}
                                    >
                                        <LessonIcon style={{marginRight: 5}} />
                                    </Button>
                                </View>
                            }
                        /> */}

                    </>
                )
                : (
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <ActivityIndicator size="large" color="#116EE2" />
                    </View>
                )
            }            
        </SafeAreaView>
    );
}

export default Test;
