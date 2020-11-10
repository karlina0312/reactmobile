import React, {useState, useEffect, useContext} from 'react';
import { Text, SafeAreaView, StatusBar, StyleSheet, View, ActivityIndicator } from "react-native";
import Test from '../../../components/Test/Test';
import MockTest from '../../../components/Test/MockTest';
import { GlobalContext } from '../../../providers/ContextGlobalState'
import fetchQuestion from '../../../services/question';
import style from './style'

const TestScreen = ({navigation, route}) => {
    const {state, dispatch} = useContext(GlobalContext);
    const [finished, setFinished] = useState(false);
    const [question, setQuestion] = useState(null);

    useEffect(() => {
        navigation.setOptions({ title: route.params.category.title});
        if(question == null) {
            fetchQuestion(route.params.category.id).then(result => {
            setQuestion(result);
        })
        }

    }, []);

    return (
        <SafeAreaView style={style.container}>
        {   question != null 
            ? <Test  test = { question } navigation={navigation} title={route.params.category.title}/>
            : <View style={{flex: 1, justifyContent: "center"}}><ActivityIndicator size="large" color="#116EE2"/></View>
        }
        </SafeAreaView>
    )

}
export default TestScreen;
