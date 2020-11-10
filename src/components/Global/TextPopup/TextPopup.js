import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, TouchableOpacity,Text} from 'react-native';
// import Button from '../Button/Button';
import styles from './style';

export default (props) => { 
    return (
        <>
            <Modal
                visible={props.visible}
                transparent={true}
            >
                <TouchableOpacity
                    style={[style.Modal, {alignItems: props.flex || 'center'}, props.noDisabler ? {backgroundColor: 'none'} : {}]}
                    activeOpacity={1}
                >
                    <TouchableOpacity
                        style={styles.container}
                        activeOpacity={1}
                    >
                        <View style={styles.view}>
                            <Text style={[props.style, {textAlign: 'center',marginVertical: 15, fontSize: 15, marginHorizontal: 20}]}
                            activeOpacity={1}>
                            {props.body}
                            </Text>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                                <TouchableOpacity 
                                    style={styles.button}
                                    onPress={props.startTest}
                                >
                                    <Text style={styles.buttonText}>
                                    Эхлэх
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={props.cancel}
                                    style={styles.button}
                                >
                                    <Text style={styles.buttonText}>
                                    Болих
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </>
    )
}

const style = StyleSheet.create({
    Modal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    }
});
