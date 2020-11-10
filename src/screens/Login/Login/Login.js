import React, {useState, useRef, useContext} from 'react';
import {
  Text,
  SafeAreaView,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
  Modal,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import styles from './style';
import {GlobalContext} from '../../../providers/ContextGlobalState';
import {getUniqueId} from 'react-native-device-info';
import {getData} from '../../../providers/async';
import {
  Login,
  getUserData,
  setToken,
} from '../../../services/user';
import Back from '../../../assets/icons/backSvg';
import messaging from '@react-native-firebase/messaging';

const uniqueId = getUniqueId();

export default ({navigation}) => {
  const {state, dispatch} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const passInput = useRef();

  const login = () => {
    if (username.length !== 0 && password.length !== 0) {
      setLoading(true);
      Login(username, password, uniqueId)
        .then((result) => {
          if (result == undefined) {
            Alert.alert(
                'Интернэт холболтоо шалгана уу!',
                ' ',
                [
                  { text: 'OK', onPress: () => {
                    setLoading(false);
                  } }
                ],
                { cancelable: false }
              );
          } else {
            if (result.message === 'not found' || result.message === 'not success') {
              Alert.alert(
                'Алдаа',
                'Нэвтрэх нэр эсвэл нууц үг буруу байна!',
                [
                  { text: 'OK', onPress: () => {
                    console.log('pressing ok')
                    setLoading(false);
                  } }
                ],
                { cancelable: false }
              );
            } else if (result.message === 'other device'){
              Alert.alert(
                'Алдаа',
                'Та өөр утсан дээр бүртгэлтэй байна',
                [
                  { text: 'OK', onPress: () => {
                    console.log('pressing ok')
                    setLoading(false);
                  } }
                ],
                { cancelable: false }
              );
            } else if (result.message === 'success') {
              getUserData(result.userId)
                .then((userData) => {
                    console.log(userData);
                    setToken(userData.id, state.firebaseToken).then(
                        (tokenMessage) => {
      console.log(tokenMessage);
                          dispatch({type: 'SET_USER', list: userData});
                        },
                      );
                }).catch(err => {
                  Alert.alert(
                    'Алдаа гарлаа!',
                    ' ',
                    [
                      { text: 'OK', onPress: () => {
                        console.log('pressing ok')
                        setLoading(false);
                      } }
                    ],
                    { cancelable: false }
                  );
                })
            } else {
              Alert.alert(
                'Алдаа гарлаа!',
                ' ',
                [
                  { text: 'OK', onPress: () => {
                    console.log('pressing ok')
                    setLoading(false);
                  } }
                ],
                { cancelable: false }
              );
            }
          }
        })
        .catch((error) => {
          console.error(error);
          Alert.alert(
            'Алдаа гарлаа!',
            ' ',
            [
              { text: 'OK', onPress: () => {
                setLoading(false);
              } }
            ],
            { cancelable: false }
          );
        });
    } else {
      Alert.alert(
        'Алдаа',
        'Нэвтрэх нэр эсвэл нууц үг хоосон байна!',
        [
          { text: 'OK', onPress: () => {
            setLoading(false);
          } }
        ],
        { cancelable: false }
      );
      
    }
  };

  return (
    <>
      <Modal visible={loading}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#116EE2" />
        </View>
      </Modal>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={{ backgroundColor: '#fff', flex: 1}}>
                <KeyboardAvoidingView behavior={(Platform.OS === 'ios')? "padding" : null} style={{}}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{height: '100%'}}>
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center', marginTop: 50}}
                            onPress={() => navigation.goBack()}>
                            <View
                            style={{
                                marginLeft: '5%',
                                height: 50,
                                width: 50,
                                justifyContent: 'center',
                            }}>
                            <Back
                                style={{alignSelf: 'center'}}
                                color="#ADABAB"
                            />
                            </View>
                            <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: 0}}>
                                Нэвтрэх
                            </Text>
                        </TouchableOpacity>
                        {/* <Text style={styles.logoBigText}>START Test</Text>
                        <Text style={styles.logotext}> Танд амжилт авчирна</Text> */}
                        <Text style={[styles.unametext, {marginTop: 40}]}>Нэвтрэх нэр</Text>
                        <TextInput
                            placeholder={'Нэвтрэх нэр'}
                            returnKeyType={'go'}
                            blurOnSubmit={false}
                            onSubmitEditing={() => passInput.current.focus()}
                            onChangeText={(text) => setUsername(text)}
                            style={styles.textinput}
                        />
                        <Text style={styles.unametext}>Нууц үг</Text>
                        <TextInput
                            ref={passInput}
                            secureTextEntry={true}
                            returnKeyType={'done'}
                            onSubmitEditing={() => {
                            login();
                            }}
                            onChangeText={(text) => {
                            setPassword(text);
                            }}
                            placeholder={'Нууц үг'}
                            autoCapitalize="none"
                            style={styles.textinput}
                        />
                        <TouchableOpacity
                            style={styles.mainbutton}
                            onPress={() => {
                            login();
                            }}>
                            <Text style={styles.mainbuttontext}>Нэвтрэх</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.subbutton, {marginBottom: 40}]}
                            onPress={() => {
                            navigation.navigate('Forget', {});
                            }}>
                            <Text style={styles.subbuttontext}>Нууц үг мартсан</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView >
            </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};
