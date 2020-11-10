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
import { RecyclerListView, DataProvider, LayoutProvider } from "recyclerlistview";
import Button from './../Global/Button/Button';
import styles from "./styles";
import PopUp from '../Global/PopUp'
import ScrollScreen from '../../components/Global/ScrollScreen'
import MaterialIcon from '../../assets/icons/folderSvg'
import ShareIcon from '../../assets/icons/shareSvg'
import CrossIcon from '../../assets/icons/crossSvg'
import LessonIcon from '../../assets/icons/classSvg'
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

const check = (correct) => { if(correct) score++}
const checkMatch = (ans, match, arr) => {
    for (let i = 0; i < ans.length; i++) {
        ans[i].id === match[arr[i]].answer_id ? score+=0.25 : null;
    }
}
const checkAllSelected = (array_match, i) => {
    if (array_match[i][0] !== undefined && array_match[i][1] !== undefined && array_match[i][2] !== undefined && array_match[i][3] !== undefined){
        return true;
    }
    return false;
}

let score = 0;
let arr = [];
let pos = [];

const Test = (props) => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [page, setPage] = useState(1);
    const [isFinished, setFinished] = useState(false);
    const [material, setMaterial] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [pageList, setList] = useState(false);


    const flatListRef = useRef();

    useEffect(() => {
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
            }
            setData(questions);
        }
    }, []);

    const goBack = () => {
        if (data != null) {
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
        let pageNumber = Math.floor(e.nativeEvent.contentOffset.x/WIDTH);
        setPage(pageNumber+1);
    }

    let dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });

    const ViewTypes = {
        FULL: 0,
        HALF_LEFT: 1,
        HALF_RIGHT: 2,
      };

    let _layoutProvider = new LayoutProvider(
        index => {
            return ViewTypes.FULL;
        },
        (type, dim) => {
            dim.width = WIDTH;
            dim.height = 100;
        }
      );

     let _rowRenderer = (type, data) => {
        return <View style={{flex:1}}>
        {item.type === 1 
            ?<MultiTestPage 
                item={data} 
                // index={index} 
                // checkTest={checkTest} 
                answeredIndex={null}
            />
            : <TestPage 
                item={data} 
                // index={index} 
                // checkTest={checkTest} 
                answeredIndex={null} 
        />}
        </View>
    }

    const render = ({ item, index }) => {
        console.log('rendeing :', index, '   ');
        return <View style={{flex:1}}>
            {item.type === 1 ?<MultiTestPage item={item} index={index} checkTest={checkTest} answeredIndex={null}/>
            : <TestPage item={item} index={index} checkTest={checkTest} answeredIndex={null} />}
            </View>
    }

    const goNavigationBack = () => {
        setFinished(false);
        setData([]);
        arr=[];
        pos=[];
        score=0;
        props.navigation.goBack();
    }

    const checkTest = (index, answerIndex, isCorrect) =>  {
        pos[index] = answerIndex;
        check(isCorrect);
    }


    return (
        <SafeAreaView style={styles.container}>
            <NavigationHeader 
                type={1}
                onPress={goBack}
                title={`Тест`}
                headerComponent={
                    <Button 
                        styleButton={styles.buttonFloat} 
                        styleText={styles.buttonFloatText} 
                        onPress={() => {setPopUp(!popUp)}}
                    >
                        {popUp ? <CrossIcon /> : <ShareIcon />}
                    </Button>
                }
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
                        {/* <FinishScreen goBack={goNavigationBack} isFinished={isFinished} score={score} max={data.length} /> */}
                        {/* huudaslalt bolon progress bar garj bui heseg */}
                        <View style={{marginHorizontal: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <Bar animating={true} indeterminate={false} width={WIDTH*70/100} borderWidth={0} color='#FFC830' unfilledColor="#116EE2" progress={data.length !== 0 ? page/data.length : 0} />
                            <TouchableOpacity style={styles.paging} onPress={() => setList(true)}>
                                <Text style={styles.pagingText}>{page}<Text style={[styles.pagingText,{color: '#116EE2'}]}>/{data.length}</Text></Text>
                            </TouchableOpacity>
                        </View>
                        
                        {/* asuult zurj baigaa flatlist */}
                        <RecyclerListView 
                            layoutProvider={_layoutProvider} 
                            dataProvider={dataProvider.cloneWithRows(data)} 
                            rowRenderer={_rowRenderer} 
                        />
                        {/* <FlatList 
                            renderItem={render} //render function
                            data={data} //render data
                            getItemLayout={getItemLayout} //1 screen deer 1 asuult baigaag helne
                            horizontal={true}  //dooshoo bish hajuu tiishe zurna
                            keyExtractor={_keyExtractor} //index lelt hiine
                            pagingEnabled={true} //scroll: swipe buten screeneer ywhiig shiidne
                            onMomentumScrollEnd={onScrollEnd} // pagination deer huudasnii state-iig solino
                            // onScrollBeginDrag={(evt) => console.log(evt)}
                            showsHorizontalScrollIndicator={false} //scrolliig hide hiine
                            ref={flatListRef}
                            windowSize={1} //niit heden item render hiihiig shiidne
                            // maxToRenderPerBatch={3}
                            initialNumToRender={1} //ehnii delgets duurheer initial render
                            initialScrollIndex={0} // render hiigd scroll haana baihiig zaana
                        /> */}
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
