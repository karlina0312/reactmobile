import React, {useContext, useEffect} from 'react';
import {
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import Back from '../../../assets/icons/backSvg'
import {GlobalContext} from '../../../providers/ContextGlobalState';
import DefaultUser from '../../../assets/images/defaultUserSvg';

const ProfileEdit = ({navigation}) => {
  const {state, dispatch} = useContext(GlobalContext);
  useEffect(() => {
    dispatch({type: 'SET_HEADER', list: {type: 1, onPress: navigation.goBack}});
  }, []);
  return (
    <ScrollView style={styles.container}>
        <TouchableOpacity 
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}
        >
            <Back style={{marginLeft: '10%', marginRight: 30}} color="#ADABAB"/>
            <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: '10%'}}>Профайл</Text>
        </TouchableOpacity>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: 'center',
          marginTop: '10%',
        }}>
        <DefaultUser
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: 'center',
          }}
        />
      </View>
      <Text style={styles.nameText}>{state.user.name}</Text>
      <KeyboardAvoidingView>
        {/* <Text style={styles.frameText}>Овог</Text>
        <TextInput style={styles.inputText}>Pinkman</TextInput>
        <Text style={styles.frameText}>Нэр</Text>
        <TextInput style={styles.inputText}>Pinkman</TextInput> */}
        <Text style={styles.frameText}>Нэвтрэх нэр</Text>
        <TextInput style={styles.inputText}>{state.user.name}</TextInput>
        <Text style={styles.frameText}>И-мэйл хаяг</Text>
        <TextInput style={styles.inputText}>{state.user.email}</TextInput>
      </KeyboardAvoidingView>
      <TouchableHighlight style={styles.updateButton}>
        <Text style={styles.updateText}>Хадгалах</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.changeButton}
        onPress={() => navigation.navigate('ChangePassword')}>
        <Text style={styles.changeText}>Нууц үг солих</Text>
      </TouchableHighlight>
    </ScrollView>
  );
};
export default ProfileEdit;
