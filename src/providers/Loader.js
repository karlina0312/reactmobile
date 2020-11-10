import React, {useEffect, useContext, useState, version} from 'react';
import { GlobalContext } from './ContextGlobalState';
import messaging from '@react-native-firebase/messaging';
import {getData, storeData} from './async';
import { getUserData, setToken } from '../services/user'
import { checkVersion } from '../actions/structure';

export default () => {
    const {state, dispatch} = useContext(GlobalContext);

    const setContext = () => {
        getData('version').then(async result => {
            if (result) {
                return checkVersion(result.oldVersion).then(newVersion => {
                    if (newVersion === undefined) {
                        return state.version = result;
                    }
                    if (result.id !== newVersion.version.id) {
                        state.version = {...newVersion.version, questions: newVersion.questions, pdfs: newVersion.pdfs, updated: false, oldVersion: result.oldVersion};
                        return
                    }
                    return state.version = result;
                }).catch(err => {
                    return state.version = result;
                })
            } else {
                return state.version = result;
            }
        }).then(result => {
            getData('downloaded').then(async downloaded => {
                state.downloaded = downloaded ? downloaded.downloaded : false;
                getData('score').then(async score => {
                    if (score != null ) state.score = score;
                    getData('user').then(async result => {
                        if (result) {
                            if (!result.status) {
                                if (result.token !== state.firebaseToken) {
                                    setToken(result.id, state.firebaseToken);
                                }

                                return getUserData(result.id).then(userData => {
                                    if (userData === undefined) {
                                    state.user = result;
                                    } else {
                                        storeData('user',userData);
                                        state.user = userData;
                                    }
                                });  
                            } else {
                                console.log('result.id, state.firebaseToken', result.id,'   ' ,state.firebaseToken)
                                if (result.token !== state.firebaseToken) {
                                    setToken(result.id, state.firebaseToken);
                                }
                                return state.user = result;
                            }
                        } else state.user = false;
                    }).then(result => {
                        dispatch({type: 'SET_CONTEXT', list: {...state}});  
                    })
                })
            })
        })
    }

    useEffect(() => {
        messaging().getToken().then(token => {
            if (token) state.firebaseToken = token;
            setContext();
        }).catch(err => {
            console.log('token err', err);
            setContext();
        })

        return messaging().onTokenRefresh(token => {
            getData('user').then(async result => {
                if (result != null) setToken(result.id,  token);
            });
        });
    }, []);
    return <></>
}