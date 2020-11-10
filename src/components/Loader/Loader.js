import React, {useState, useEffect, useContext} from 'react';
import {
  View,
  Image,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {AuthContext} from '../../providers/ContextGlobalState';
import styles from './style.js';

export default (props) => {
  const {state, dispatch} = useContext(AuthContext);
  return (
    <>
      {/* <Modal
                visible={state.isLoading}
                transparent={true}
                animationType='fade'
            > */}

      {state.isLoading && (
        <View style={styles.Modal}>
          {/* <ActivityIndicator size="large" color="#fff" /> */}
          <Image
            source={require('../../assets/Image1/loader.gif')}
            style={{width: 60, height: 60}}
          />
        </View>
      )}
      {/* </Modal> */}
    </>
  );
};
