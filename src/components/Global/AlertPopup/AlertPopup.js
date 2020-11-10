import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, TouchableOpacity,Text } from 'react-native';
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
                    // onPress={props.close}
                    style={[style.Modal, {alignItems: props.flex || 'center'}, props.noDisabler ? {backgroundColor: 'none'} : {}]}
                    activeOpacity={1}
                >
                    {/* <View 
                        style={[style.Modal, {alignItems: props.flex || 'center'}]}
                    > */}
                        <TouchableOpacity
                            style={styles.container}
                            activeOpacity={1}
                        >
                            <View style={styles.view}>
                            <Text style={styles.text}>Та интернет холболтоо шалгана уу !!!
                            </Text>
                            <TouchableOpacity
                            onPress={props.close}
                            style={styles.button}
                            ><Text style={styles.buttonText}>OK</Text>
                            </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    {/* </View> */}
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
