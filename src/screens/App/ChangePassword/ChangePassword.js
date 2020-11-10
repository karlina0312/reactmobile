import React, {useContext} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import Back from '../../../assets/icons/backSvg'
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
const ChangePassword = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}
        >
            <Back style={{marginLeft: '10%', marginRight: 30}} color="#ADABAB"/>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: '10%'}}>Нууц үгээ сэргээх</Text>
        </TouchableOpacity>
      <KeyboardAvoidingView>
        <Text style={styles.frameText}>Өмнөх нууц үг</Text>
        <TextInput style={styles.inputText}></TextInput>
        <Text style={styles.frameText}>Шинэ нууц үг</Text>
        <TextInput style={styles.inputText}></TextInput>
      </KeyboardAvoidingView>
      <TouchableHighlight style={styles.updateButton}>
        <Text style={styles.updateText}>Хадгалах</Text>
      </TouchableHighlight>
    </SafeAreaView>
  );
};
export default ChangePassword;
