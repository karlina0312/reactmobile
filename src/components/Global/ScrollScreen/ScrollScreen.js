import React, { useState } from "react";
import { ScrollView, View, TextInput, Text, TouchableOpacity } from "react-native";
import styles from './style';

const ScrollScreen = (props) => {
    const [value, setValue] = useState('');
    return (
        <View style={styles.pageContainer}>
            <View style={{flexDirection: 'row'}}>
            <TextInput 
                style={styles.pageTextinput} 
                onChangeText={(searchtext) => {
                    console.log('changin text')
                    setValue(searchtext.replace(/[^0-9]/g, ''))
                }}
                placeholder="Хуудасны дугаар"
                keyboardType="number-pad"
                onSubmitEditing={() => {
                    console.log('submitting sasd')
                    let retValue = value*1;
                    if (retValue > props.max) retValue = props.max;
                    else if (retValue < 1) retValue = 1;
                    props.setPage(retValue);
                }}
                value={value}
            />
            <TouchableOpacity style={styles.pageButton} onPress={() => {
                    let retValue = value*1;
                    if (retValue > props.max) retValue = props.max;
                    else if (retValue < 1) retValue = 1;
                    props.setPage(retValue);
            }}><Text style={{color: 'white', textAlign: 'center',}}>OK</Text></TouchableOpacity>
            </View>
            <ScrollView style={styles.pageContainer} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false} >
                {
                    drawList(props.max, props.setPage)
                }
            </ScrollView>
        </View>
    )
}

const drawList = (max, setPage) => {
    let rows = [];
    for (let i = 0; i < max; i++) {
        rows.push(
            <TouchableOpacity 
                key={i} 
                onPress={() => {
                    setPage(i+1);
                }}
                style={styles.pageTextView}
            >
                <Text style={styles.pageText}>{i+1}</Text>
            </TouchableOpacity>);
    }
    return rows;
}

export default ScrollScreen;