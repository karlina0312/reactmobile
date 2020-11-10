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
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import styles from './style';
import {GlobalContext} from '../../../providers/ContextGlobalState';
import Back from '../../../assets/icons/backSvg';
import {recover} from '../../../services/user';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default ({navigation}) => {
  const {state, dispatch} = useContext(GlobalContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const mailInput = useRef();

  const forget = () => {
    setLoading(true);
    if (emailReg.test(email)) {
      if (username === '') {
        Alert.alert('Нэвтрэх нэр хоосон байна!');
        setLoading(false);
        return;
      }
      recover(username, email).then((response) => {
        console.log('response', response);
        if (response == undefined) {
          Alert.alert('Интернэт холболтоо шалгана уу !');
          setLoading(false);
        } else {
          if (response.code === 204) {
            Alert.alert('Нэвтрэх нэр эсвэл E-mail хаяг буруу байна');
            setLoading(false);
            return;
          }
          if (response.error) {
            Alert.alert('Амжилтгүй боллоо');
            setLoading(false);
          } else {
            Alert.alert('Таны шинэ нууц үгийг E-mail -руу илгээлээ');
            setLoading(false);
            navigation.navigate('Login');
          }
        }
      });
    } else {
      Alert.alert('E-mail буруу байна!');
      setLoading(false);
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
                            style={{flexDirection: 'row', alignItems: 'center', marginTop: "10%"}}
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
                            Нууц үг сэргээх
                            </Text>
                        </TouchableOpacity>
                        <Text style={[styles.unametext, {marginTop: 45}]}>Нэвтрэх нэр</Text>
                        <TextInput
                            placeholder={'Нэвтрэх нэр'}
                            returnKeyType={'next'}
                            autoCorrect={Platform.OS === 'ios' ? 'off' : false}
                            spellCheck={Platform.OS === 'ios' ? 'off' : false}
                            blurOnSubmit={false}
                            blurOnSubmit={false}
                            onSubmitEditing={() => mailInput.current.focus()}
                            onChangeText={(text) => setUsername(text)}
                            style={styles.textinput}
                        />
                        <Text style={styles.unametext}>Цахим хаяг</Text>
                        <TextInput
                            ref={mailInput}
                            secureTextEntry={true}
                            returnKeyType={'done'}
                            autoCorrect={Platform.OS === 'ios' ? 'off' : false}
                            spellCheck={Platform.OS === 'ios' ? 'off' : false}
                            blurOnSubmit={false}
                            onSubmitEditing={() => forget()}
                            onChangeText={(text) => {
                            setEmail(text);
                            }}
                            placeholder={'E-mail'}
                            keyboardType={'email-address'}
                            autoCapitalize="none"
                            style={styles.textinput}
                        />

                        <TouchableOpacity
                            style={[styles.mainbutton, {marginBottom: 40}]}
                            onPress={() => {
                            forget();
                            }}>
                            <Text style={styles.mainbuttontext}>Сэргээх</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};
