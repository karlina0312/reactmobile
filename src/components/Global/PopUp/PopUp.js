import React, { useState, useEffect } from 'react';
import { View, Modal, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
// import Button from '../Button/Button';

export default (props) => { 
    return (
        <>
            <Modal
                visible={props.visible}
                transparent={true}
            >
                <TouchableOpacity
                    onPress={props.close}
                    style={[style.Modal, {alignItems: props.flex || 'center'}, props.noDisabler ? {backgroundColor: 'none'} : {}]}
                    activeOpacity={1}
                >
                    {/* <View 
                        style={[style.Modal, {alignItems: props.flex || 'center'}]}
                    > */}
                        <TouchableOpacity
                            style={props.style}
                            activeOpacity={1}
                        >
                            {props.body}
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
