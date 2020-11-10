import React, {useState, useEffect, useContext, useRef} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {GlobalContext} from '../../../providers/ContextGlobalState';
import Button from '../Button';
import BackSvg from '../../../assets/icons/backSvg';
import MenuSvg from '../../../assets/icons/menuSvg';
import Finish from '../../../assets/icons/finishsSvg';

const NavigationHeader = (props) => {
  return (
    <SafeAreaView style={styles.constainer}>
      <View style={styles.header}>
        {props.type != undefined ? (
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => props.onPress()}>
            {props.type === 0 
              ? <MenuSvg /> 
              : ( props.type === 3 
                    ? <Finish />
                    : <BackSvg />
              )}
          </TouchableOpacity>
        ) : props.icon != undefined ? (
          props.icon
        ) : (
          <View style={styles.headerButton} />
        )}
        <Text numberOfLines={1} style={styles.headerText}>
          {props.title}
        </Text>
        <View style={styles.headerComponent}>{props.headerComponent}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    width: '100%',
    backgroundColor: '#E6E6E6',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    backgroundColor: 'white',
    height: 60,
    backgroundColor: '#116EE2',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    alignItems: 'center',
    // borderRadius: 6,
    // marginTop: 1,
    // marginHorizontal: 10,
  },
  headerButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  headerText: {
    width: '68%',
    marginHorizontal: 10,
    fontSize: 18,
    // fontWeight: 'bold',
    color: '#fff',
    // backgroundColor: 'red',
  },
  headerComponent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    // backgroundColor: 'red',
    // marginHorizontal: 10,
    alignItems: 'center',
  },
});

export default NavigationHeader;
