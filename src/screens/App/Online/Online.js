import React, {useContext, useState} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  Linking,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
const fbLink = 'https://www.facebook.com/starttestapplication ';
const docLink = 'https://forms.gle/ouNuxRRYeth9o8Qv7';

const Online = ({navigation}) => {
    const [isPopup, setPopup] = useState(false);
  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  const dialCall = () => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:+976 75154411';
    } else {
      phoneNumber = 'telprompt:+976 75154411';
    }

    Linking.openURL(phoneNumber);
  };

  return (
    <View style={styles.popup}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          margin: '10%',
        }}>
        <TouchableOpacity
          style={styles.lilButton}
          onPress={() => handlePress(fbLink)}>
          <Image
            style={styles.imageButton}
            source={require('../../../assets/Image1/facebook.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.lilButton} onPress={() => dialCall()}>
          <Image
            style={styles.imageButton}
            source={require('../../../assets/Image1/phone-call.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lilButton}
          onPress={() => handlePress(docLink)}>
          <Image
            style={styles.imageButton}
            source={require('../../../assets/Image1/google-docs.png')}
          />
        </TouchableOpacity>
      </View>
     
    </View>
  );
};
export default Online;
