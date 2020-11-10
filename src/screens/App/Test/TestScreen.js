import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, StatusBar, Text, ActivityIndicator, View} from "react-native";
import getData from '../../../services/test';
import ModuleScreen from '../../../components/ModuleSreen'
import styles from './style';

const TestScreen = ({navigation, route}) => {
    const [testJson, setJSON] = useState(null);


    useEffect(() => {
        if (testJson == null) getData().then(JSON => {
            navigation.setOptions({ title: JSON.title });
            setJSON(JSON);
        });        
    },[]);

    return  (
		<>
            <SafeAreaView style={styles.container}>
                {
                    testJson != null 
                        ? <ModuleScreen data={testJson} navigation={navigation} type={1} tabNavigation={route.params.tabNavigation} parent="Test" />
                        : <View style={{flex: 1, justifyContent: "center"}}><ActivityIndicator size="large" color="#116EE2"/></View>
                }
            </SafeAreaView>
        </>
    )

    
	
};

export default TestScreen;







