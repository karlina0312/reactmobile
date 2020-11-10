import React, {useState, useRef, useContext} from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Modal,
  View,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView, Platform
} from 'react-native';
import {Register} from '../../../actions/user';
import {getUniqueId} from 'react-native-device-info';
import {GlobalContext} from '../../../providers/ContextGlobalState';
import {setToken} from '../../../services/user';
import Back from '../../../assets/icons/backSvg';
import styles from './style';

const uniqueId = getUniqueId();
const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default ({navigation}) => {
  const {state, dispatch} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loadingRegister, setLoading] = useState(false);
  const passInput = useRef();
  const emailInput = useRef();

  const register = () => {
    if (emailReg.test(email)) {
      setLoading(true);
      Register(username, password, email, uniqueId)
        .then((userData) => {
          if (userData == undefined) {
            Alert.alert(
              'Алдаа',
              'Интернэт холболтоо шалгана уу!',
              [
                { text: 'OK', onPress: () => {
                  console.log('pressing ok')
                  setLoading(false);
                } }
              ],
              { cancelable: false }
            );
          } else {
            if (userData.code) {
                setToken(userData.id, state.firebaseToken).then(
                  (tokenMessage) => {
console.log(tokenMessage);
                    dispatch({type: 'SET_USER', list: userData});
                  },
                );
              setLoading(false);
              // navigation.replace("Login");
            } else if (userData.message === 'name already exists') {
              Alert.alert(
                'Алдаа',
                'Нэвтрэх нэр давхардаж байна!',
                [
                  { text: 'OK', onPress: () => {
                    console.log('pressing ok')
                    setLoading(false);
                  } }
                ],
                { cancelable: false }
              );
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
        .catch((err) => {
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
          console.log('err', err);
        });
    } else {
      Alert.alert(
        'Алдаа',
        'E-mail буруу байна!',
        [
          { text: 'OK', onPress: () => {
            console.log('pressing ok')
            setLoading(false);
          } }
        ],
        { cancelable: false }
      );
    }
  };

  return (
    <>
      <Modal visible={loadingRegister}>
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
                    <Back style={{alignSelf: 'center'}} color="#ADABAB" />
                    </View>
                    <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: 0}}>
                                Бүртгүүлэх
                            </Text>
                    {/* <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: '3%'}}>Бүртгүүлэх</Text> */}
                </TouchableOpacity>
                    <Text style={[styles.coretext, {marginTop: 40}]}>Нэвтрэх нэр</Text>
                    <TextInput
                        placeholder={'Нэвтрэх нэр'}
                        returnKeyType={'next'}
                        autoComplete="off"
                        autoCorrect={Platform.OS === 'ios' ? 'off' : false}
                        spellCheck={Platform.OS === 'ios' ? 'off' : false}
                        blurOnSubmit={false}
                        onSubmitEditing={() => emailInput.current.focus()}
                        onChangeText={(text) => {
                            setUsername(text);
                        }}
                        style={styles.input}
                    />
                    <Text style={styles.coretext}>Цахим хаяг</Text>
                    <TextInput
                        placeholder={'E-mail'}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                        autoComplete="off"
                        autoCorrect={Platform.OS === 'ios' ? 'off' : false}
                        spellCheck={Platform.OS === 'ios' ? 'off' : false}
                        onSubmitEditing={() => passInput.current.focus()}
                        onChangeText={(text) => {
                            setEmail(text);
                        }}
                        style={styles.input}
                        ref={emailInput}
                    />
                    <Text style={styles.coretext}>Нууц үг</Text>
                    <TextInput
                        autoCapitalize="none"
                        // secureTextEntry={true}
                        placeholder={'Нууц үг'}
                        autoComplete="off"
                        autoCorrect={Platform.OS === 'ios' ? 'off' : false}
                        spellCheck={Platform.OS === 'ios' ? 'off' : false}
                        returnKeyType={'done'}
                        onChangeText={(text) => {
                            setPassword(text);
                        }}
                        style={styles.input}
                        ref={passInput}
                    />
                    <TouchableOpacity style={[styles.button, {marginBottom: 40}]} onPress={register}>
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 22}}>
                        Бүртгүүлэх
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};
