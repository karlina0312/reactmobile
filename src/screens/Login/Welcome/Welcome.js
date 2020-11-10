import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import MeritSvg from '../../../assets/images/meritSvg';
import styles from './style';
import ToriinOrdon from '../../../assets/icons/ToriinOrdonSvg';

export default ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <MeritSvg style={styles.image} />
        <Text style={styles.text}>Танд амжилт авчирна</Text>
        <TouchableOpacity
          style={styles.login}
          onPress={() => {
            console.log('somethig');
            navigation.navigate('Login');
          }}>
          <Text style={{alignSelf: 'center', color: 'white', fontSize: 22}}>
            Нэвтрэх
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          <Text style={{alignSelf: 'center', color: '#676767', fontSize: 22}}>
            Бүртгүүлэх
          </Text>
        </TouchableOpacity>
        <View style={styles.toriinOrdon}>
        <ToriinOrdon
            style={{position:'absolute',bottom:-20}}
        />
        </View>
        
      </SafeAreaView>
      
    </>
  );
};
