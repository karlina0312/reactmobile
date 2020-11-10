import React, {useState, useEffect} from "react";
import { 
	FlatList, 
	SafeAreaView, 
	StatusBar, 
	StyleSheet, 
	Text, 
	TouchableOpacity
} from "react-native";
import styles from './style'

export default (props) => {
    const [pressIndex, setPressIndex] = useState(-1);

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity 
                activeOpacity={1}
                style={[styles.item, index === pressIndex ? styles.itemPress : {}]}
                onPressIn={() => {setPressIndex(index)}}
                onPressOut={() => {setPressIndex(-1)}}
                onPress={() => {
                    setPressIndex(-1);
                    props.onPress(index);
                }}
            >
                <Text style={[styles.title, index === pressIndex ? styles.titlePress : {} ]}> {item.title} </Text>
            </TouchableOpacity>
        );
    };
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            data={props.data}
            keyExtractor={(item) => ''+item.id}
            renderItem={renderItem}
        />
    );
}