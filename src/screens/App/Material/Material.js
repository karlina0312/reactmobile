import React, { useState, useEffect } from "react";
import { SafeAreaView, StatusBar, Text, ActivityIndicator, View} from "react-native";
import getData from '../../../services/material';
import ModuleScreen from '../../../components/ModuleSreen'
import styles from './style';

const Lesson = ({navigation, route}) => {
    const [lessonJson, setJSON] = useState(null);

    useEffect(() => { 
        if (lessonJson == null) getData().then(JSON => {
            navigation.setOptions({ title: JSON.title });
            setJSON(JSON);
        });
    },[]);

    return  (
		<>
            <SafeAreaView style={styles.container}>
                {
                    lessonJson != null 
                        ? <ModuleScreen data={lessonJson} navigation={navigation} type={0} parent='Material' tabNavigation={route.params.tabNavigation} />
                        : <View style={{flex: 1, justifyContent: "center"}}><ActivityIndicator size="large" color="#116EE2"/></View>
                }
            </SafeAreaView>
        </>
    )

    
	
};

export default Lesson;







