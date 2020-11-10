import React, {useContext, useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {GlobalContext} from '../../../providers/ContextGlobalState';
import OnlineScreen from '../Online';
import Schedule from '../Schedule';
import Merit from '../../../assets/images/MeritWhiteSvg';
import Pen from '../../../assets/icons/penSvg';
import Star from '../../../assets/icons/starSvg';
import Info from '../../../assets/icons/messageSvg';
import Conversation from '../../../assets/icons/exclamationSvg';
import Exit from '../../../assets/icons/exitSvg';
import Hat from '../../../assets/icons/hatSvg';
import Message from '../../../assets/icons/messageSvg';
import Calendar from '../../../assets/icons/calendarSvg';
import PopUp from '../../../components/Global/PopUp';
import styles from './style';


const docLink = 'https://forms.gle/ouNuxRRYeth9o8Qv7';


const Profile = ({navigation}) => {
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  const {state, dispatch} = useContext(GlobalContext);
  const [isOnline, setOnline] = useState(false);
const [isSchedule, setSchedule] = useState(false);
  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  
  const logout = () => {
    dispatch({type: 'SET_USER', list: false});
  };

  return (
    <View style={{flex: 1, height: HEIGHT}}>
      <SafeAreaView style={{flex: 1}}>
        <DrawerContentScrollView
          showsVerticalScrollIndicator={false}
        >
          {/* <TouchableHighlight
            style={styles.editBox}
            onPress={() => navigation.navigate('ProfileEdit')}>
            <Pen style={styles.editButton} />
          </TouchableHighlight> */}
          <View
            style={{
              width: 150,
              height: 150,
              borderRadius: 75,
              alignSelf: 'center',
              justifyContent:'center',
              marginTop: '10%',
              backgroundColor:'#116EE2'
            //   overFlow:'hidden',
              
            }}>
            <Merit
              style={{
                width: 100,
                height: 100,
                alignSelf: 'center',
                justifyContent:'center',
                textAlign: 'center',
              }}
            />
          </View>
          <Text style={styles.nameText}>{state.user.name}</Text>
          {/* <Text style={styles.frameText}>Нэвтрэх нэр</Text>
        <Text style={styles.inputText}>{state.user.name}</Text> */}
          <Text style={styles.frameText}>Код</Text>
          <Text style={styles.inputText}>{state.user.code}</Text>
           <TouchableHighlight
            style={[styles.button, {marginTop: '10%'}]}
            onPress={() => navigation.navigate('About')}>
            <View style={{flexDirection: 'row'}}>
              <Conversation style={styles.imageButton} />
              <Text style={styles.buttonText}>Апп-ын тухай</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => navigation.navigate('Score')}>
            <View style={{flexDirection: 'row'}}>
              <Star style={styles.imageButton} />
              <Text style={styles.buttonText}>Оноо</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}  onPress={() => {
              setSchedule(true);
            }}>
            <View style={{flexDirection: 'row'}}>
              <Calendar style={styles.imageButton} />
              <Text style={[styles.buttonText,{paddingLeft:10}]}>Шалгалтын хуваарь</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              setOnline(true);
            }}>
            <View style={{flexDirection: 'row'}}>
              <Message style={styles.imageButton} />
              <Text style={styles.buttonText}>Холбоо барих</Text>
            </View>
          </TouchableHighlight>
            
          <TouchableHighlight style={[styles.button, {backgroundColor: '#FFBB00'}]}  onPress={() => handlePress(docLink)}>
            <View style={{flexDirection: 'row'}}>
              <Hat style={styles.imageButton} />
              <Text style={styles.buttonText}>Онлайн сургалт</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={styles.buttonExit} onPress={logout}>
            <View style={{flexDirection: 'row'}}>
              <Exit style={styles.imageButton} />
              <Text style={styles.exitButtonText}>Гарах</Text>
            </View>
          </TouchableHighlight>

          <PopUp
            close={() => {
              setOnline(false);
            }}
            visible={isOnline}
            body={<OnlineScreen />}
          />
          <PopUp
            close={() => {
              setSchedule(false);
            }}
            visible={isSchedule}
            body={<Schedule />}
          />
        </DrawerContentScrollView>
      </SafeAreaView>
    </View>
  );
};
export default Profile;
