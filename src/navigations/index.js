import React, {useEffect, useContext} from 'react';
import {Text, ActivityIndicator, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalContext} from '../providers/ContextGlobalState';
import Login from './loginNavigation';
import App from './App';

export default (props) => {
  const {state, dispatch} = useContext(GlobalContext);

  return (
    <NavigationContainer>
      {state.asyncReady ? (
        state.user ? (
          <App />
        ) : (
          <Login />
        )
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#116EE2" />
        </View>
      )}
    </NavigationContainer>
  );
};
