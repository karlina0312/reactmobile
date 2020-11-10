import React from 'react';
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
const first = 'http://csc.gov.mn/s/35/38 ';
const second = 'http://csc.gov.mn/s/35/534';
const third = 'http://exam.csc.gov.mn/?fbclid=IwAR1zuIbKAtCHOD6HJH56YBWNj2I_gvnvfa2IV3tWepjGJdxpCCWNMogv-Ms'

const Schedule = ({navigation}) => {
  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };


  return (
    <View style={styles.popup}>
      <View
        style={{
          justifyContent: 'center',
          margin: '10%',
        }}>
        <TouchableOpacity
          style={styles.lilButton}
          onPress={() => handlePress(first)}>
          <Text style={styles.popupText}>Удирдах албан тушаалын сонгон шалгаруулалтын зар</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         style={styles.lilButton} 
         onPress={() => handlePress(second)}>
          <Text style={styles.popupText}>Гүйцэтгэх албан тушаалын сонгон шалгаруулалтын зар</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lilButton}
          onPress={() => handlePress(third)}>
          <Text style={styles.popupText}>Ерөнхий шалгалтын зар</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Schedule;