/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useEffect} from 'react';
import { View, Modal, SafeAreaView, Image, Dimensions, Platform } from 'react-native';
import Loader from './src/providers/Loader';
import { ContextState } from './src/providers/ContextGlobalState'
import Firebase from './src/providers/Firebase'
import Navigation from './src/navigations'
import { clearAll } from './src/providers/async'



const App: () => React$Node = () => {  
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => setSplash(false), 2700);
  },[])
  console.log('app.js');
  return (
    <>
        <Modal
            visible={splash}
            style={{width: Dimensions.width, height:Dimensions.height}}
        >
            <Image 
            style={{width:'100%', height:'100%',resizeMode: 'cover'}}
            source={require('./src/assets/icons/splash.gif')}
            />
        </Modal>
        <ContextState>
            <Loader />
            <Firebase />
            <View style = {{flex:1, backgroundColor: '#black'}}>
            <SafeAreaView style={{flex:1, backgroundColor: '#E6E6E6'}}>
                <Navigation />
            </SafeAreaView>
            </View>
        </ContextState>
    </>
  );
};

export default App;
