import React, {useState, useEffect, useContext} from 'react';
import { Text, SafeAreaView, StatusBar, StyleSheet, View, ActivityIndicator } from "react-native";
import MockTest from '../../../components/Test/MockTest';
import fetchMock from '../../../services/mock';

const level = {
    Model1 : {
        question: [
            [{array: [
                [31,39],
                [43,45],
                [47,53],
                [56,56],
                [159,167],
                [169,170],
                [172,175]
            ]},20],     //Law
            [{array: [
                [345,345]
            ]},15],      //Computer
            [{array: [
                [341,341]
            ]},10],      //History
            [{array: [
                [342,342]
            ]},10],      //Economy
        ],
        alertText: '/Хууль-20, Монголын түүх-10, нийгэм, эдийн засаг-10, мэдээлэл технологи-15/', 
        time: 60,                   //60
        timeAlert:10,               //10
        threshold: 35               //35
    },       
    Model2 : {
        question: [
            [{array: [
                [151,153],
            ]},20],        //Mongolian
            [{id: 154},10],       //Traditional
        ], 
        alertText: '(Монгол хэл /крилл/ 20, Монгол бичиг /уйгаржин/ 10)', 
        time: 30,                   //30
        timeAlert:5,               //5
        threshold: 20               //20
    },       
    Model3 : {
        question: [
            [{array: [
                [343,343],      //Logic
            ]},12],
            [{array: [
                [344,344],      //Logic
            ]},3],
        ],
        alertText: '', 
        time:15,                //15
        timeAlert:3,               //3
        threshold: 9           //9
    },       
    Model4: {
        question: [
            [{array: [
                [31,39],
                [43,45],
                [47,53],
                [56,56],
                [159,167],
                [169,170],
                [172,175]
            ]},30],     //Law
        ],
        alertText: '', 
        time:30,                //30
        timeAlert:5,               //5
        threshold: 18           //18
    },
    Model5: {
        question:[
            [{array: [
                [343,343],      //Logic
            ]},8],
            [{array: [
                [344,344],      //Logic
            ]},2],
        ],
        alertText: '',
        time: 10,               //10
        timeAlert:3,               //3
        threshold: 6            //6
    },
}

let finalScore = 0;
let stage = 1;

const MocktestScreen = ({navigation, route}) => {
    const [question, setQuestion] = useState(null);
    const [isContinue, setContinue] = useState(null);
    const [alertText, setAlert] = useState('');

    

    const bePrepared = async (lvl) => {
        let model = level[`Model${lvl}`].question
        let allQuestions = [];

        for (let i = 0; i < model.length; i++ ) {
            let tempQuestions = await fetchMock(model[i]);
            allQuestions = [...allQuestions, ...tempQuestions];
        }
        return allQuestions;
    }

    useEffect(() => {
        stage = route.params.type;
        if (route.params.type === 1) {
            setContinue(1);
        }
        if(question == null) {
            bePrepared(route.params.type).then(result => {
                setAlert(`Та санамсаргүй сонгогдсон нийт ${result.length} тест ${level[`Model${stage}`].alertText} -ээс бөглөж өөрийгөө сорино уу. ${level[`Model${stage}`].threshold} буюу түүнээс дээш ${result.length} хүртэлх оноо авснаар энэхүү шалгалтад тэнцэнэ.`)
                setQuestion(result)
            })
            
            
        }
    }, []);

    const goNextLevel = (score) =>
    {
        finalScore+=score;
        setQuestion(null);
        stage++;
        if(stage === 3) setContinue(null);
        bePrepared(stage).then(result => {
            setQuestion(result);
        })
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            {   question != null 
                ? <MockTest  
                    test = { question } 
                    threshold={stage != 0 ? level[`Model${stage}`].threshold : null} 
                    time={stage != 0 ? level[`Model${stage}`].time : null} 
                    timeAlert={stage != 0 ? level[`Model${stage}`].timeAlert : null} 
                    navigation={navigation}
                    finalScore={finalScore}
                    finish={goNextLevel}
                    isContinue={isContinue != null}
                    alertText={alertText}
                    headerName={route.params.name}
                    type={stage}
                />
                : <View style={{flex: 1, justifyContent: "center"}}><ActivityIndicator size="large" color="#116EE2"/></View>
            }
        </SafeAreaView>
    )

}
export default MocktestScreen;
