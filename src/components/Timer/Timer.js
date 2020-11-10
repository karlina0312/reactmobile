import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Vibration} from 'react-native';

let seconds = 0;

export default ({min, sec, onFinish, timeAlert}) => {
  const [timeLeftInSec, setTimeLeft] = useState(min * 60 + sec);
  const [isRed, setRed] = useState(false);
  const [isActive, setActive] = useState(true);

  useEffect(() => {
    if (isActive) {
      let interval = null;
      interval = setInterval(() => {
        if (timeLeftInSec === timeAlert) {
          setRed(true);
        } else if (timeLeftInSec === 10) {
          Vibration.vibrate([1000, 2000, 2000]);
        } else if (timeLeftInSec === 0) {
          setActive(false);
          clearInterval(interval);
          onFinish();
        }
        setTimeLeft((timeLeftInSec) => timeLeftInSec - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
    setTimeLeft((timeLeftInSec) => timeLeftInSec - 1);
  }, []);

  return (
    <View
      style={{
        width: 90,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
      }}>
      <Text style={[styles.text, isRed ? {color: 'red'} : {color: 'white'}]}>
        {isActive
          ? Math.floor(timeLeftInSec / 60) +
            ':' +
            (timeLeftInSec % 60 < 10
              ? '0' + Math.floor(timeLeftInSec % 60)
              : Math.floor(timeLeftInSec % 60))
          : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
