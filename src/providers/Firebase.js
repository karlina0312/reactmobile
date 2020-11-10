import React, {useEffect, useContext, useState} from 'react';
import { GlobalContext } from './ContextGlobalState';
import messaging from '@react-native-firebase/messaging';
import { checkVersion } from '../actions/structure';

const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
        console.log('Authorization status:', authStatus);
    }
}

export default () => {
    const {state, dispatch} = useContext(GlobalContext);
    useEffect(() => {
        if (Platform.OS === 'ios') {
            requestUserPermission();
        }
        console.log('setting something');

        const unsubscribe = messaging().onMessage(async remoteMessage => {
console.log('data', remoteMessage)
            if (remoteMessage.data ) {
                if (remoteMessage.data.type === 'change_status') dispatch({ type: "SET_STATUS", list: remoteMessage.data.status === 'true'});
                if (remoteMessage.data.type === 'new_version') {
                    checkVersion(state.version.oldVersion).then(newVersion => {
                        state.version = {...newVersion.version, questions: newVersion.questions, pdfs: newVersion.pdfs, updated: false, oldVersion: state.version.oldVersion};
                        dispatch({type: 'SET_VERSION', list: {...state.version}});  
                    })
                }
            }
        });

        messaging().setBackgroundMessageHandler(async remoteMessage => {
console.log('Message handled in the background!', remoteMessage);
            if (remoteMessage.data ) {
                if (remoteMessage.data.type === 'change_status') dispatch({ type: "SET_STATUS", list: remoteMessage.data.status === 'true'});
                if (remoteMessage.data.type === 'new_version') {
                    checkVersion(state.version.oldVersion).then(newVersion => {
                        state.version = {...newVersion.version, questions: newVersion.questions, pdfs: newVersion.pdfs, updated: false, oldVersion: state.version.oldVersion};
                        dispatch({type: 'SET_VERSION', list: {...state.version}});  
                    })
                }
            }
        });

        return unsubscribe;
    }, []);
    return <></>
}