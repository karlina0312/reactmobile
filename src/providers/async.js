import React from "react";
import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key,value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
        console.log('saving error', key, value);
    }
}

const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return JSON.parse(value);
    } catch(e) {
        // error reading value
        console.log('reading error', key, value);

    }
}

const clearAll = async () => {
    try {
      await AsyncStorage.clear()
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }

export {storeData, getData, clearAll}


