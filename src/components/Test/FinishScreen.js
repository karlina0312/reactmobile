import React, {useState} from 'react';
import {
    View,
    Text,
    Modal,
} from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Button from '../Global/Button/Button';
import styles from './styles';

const FinsihScreen = (props) => {    
    return (
        <Modal 
                visible={props.isFinished}
                animationType="fade"
                hardwareAccelerated={true}
                transparent={true}
            >
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)'}}>
                    <View style={styles.score}>
                        <ProgressCircle
                            percent={props.score/props.max*100}
                            radius={100}
                            borderWidth={8}
                            color="#116EE2"
                            shadowColor="#ddebfb"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 61, color: '#116EE2', fontFamily: 'Tw Cen MT' }}>{Math.floor(props.score/props.max*100)}<Text style={{fontSize: 20,}}>%</Text></Text>
                        </ProgressCircle>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{flex: 0.5}}>
                                <View style={styles.labelView}>
                                    <Text style={styles.scoreLabel}>Зөв{'\n'}хариулт</Text>
                                </View>
                                <Text style={[styles.scoreText, {color:'#116EE2'}]}>{props.score}</Text>
                            </View>
                            <View style={{flex: 0.5}}>
                                <View style={styles.labelView}>
                                    <Text style={styles.scoreLabel}>Буруу{'\n'}хариулт</Text>
                                </View>
                                <Text style={[styles.scoreText, {color:'#FF4040'}]}>{props.max-props.score}</Text>
                            </View>
                        </View>
                        <Button styleButton={styles.resultButton} styleText={{color: '#fff', fontSize: 18}} text={`Буцах`} onPress={props.goBack}/>
                    </View>
                </View> 
            </Modal>
    )
}

export default FinsihScreen;