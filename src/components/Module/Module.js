import React, {useState, useEffect} from "react";
import { View, TouchableOpacity, Text, Image, FlatList } from "react-native";
import styles from './style';
import Archieve from '../../assets/icons/archieveSvg'
import Computer from '../../assets/icons/computerSvg'
import Suld from '../../assets/icons/suldPng'
import Conversation from '../../assets/icons/conversationPng'
import Correct from '../../assets/icons/correctSvg'
import Decision from '../../assets/icons/decisionSvg'
import Flag from '../../assets/icons/flagPng'
import History from '../../assets/icons/historySvg'
import SuldHorse from '../../assets/icons/suldHorsePng'
import Law from '../../assets/icons/lawSvg'
import Mongolian from '../../assets/icons/mongolianSvg'
import Society from '../../assets/icons/societySvg'
import Soymbo from '../../assets/icons/soymboSvg'

const numColumn = 2;

const Icons = {
    archieve: Archieve,
    computer: Computer,
    constuction: Suld,
    conversation:  Conversation,
    correct: Correct,
    decision: Decision,
    hat: Flag,
    history: History,
    job: SuldHorse,
    law: Soymbo,
    mongolian: Mongolian,
    society: Society
}

export default (props) => {
    const [pressIndex, setPressIndex] = useState(-1);

    const renderModule = ({item, index}) => {
        let IconModule = Icons[item.icon];
        
        return  (
            <TouchableOpacity
                activeOpacity={1}
                onPressIn={() => setPressIndex(index)}
                onPressOut={() => setPressIndex(-1)}
                onPress={() => {
                    setPressIndex(-1); 
                    props.insertIndex(index);
                }}
            >
                <View style={[styles.box, index === pressIndex ? styles.boxPressed : {}]}>
                    {IconModule ? <IconModule 
                        style={styles.image} 
                        pressed={index === pressIndex}
                        fill='#116EE2'
                        />:
                        <Soymbo pressed={index === pressIndex} style={[styles.image, styles.imageCat]} fill={props.parent === 'Test' ? '#116EE2': undefined} />
                        }
                    <View style={styles.textBox}>
                        <Text ellipsizeMode='head' numberOfLines={3} style={[styles.text, index === pressIndex ? styles.textPressed : {}, IconModule ? {} : {fontSize: 13}]} >{item.title}</Text>
                    </View>
                </View>
            </TouchableOpacity>);
    } 
   
    return (
        <FlatList
            numColumns={numColumn}
            showsVerticalScrollIndicator={false}
            data={props.data}
            renderItem={renderModule}
        />
    )
}
