import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import Button from '../Global/Button/Button';
import styles from './styles';

const  letter = ['A)', 'B)', 'C)', 'D)'];
// ===================================> Энгийн асуулт <=====================================================

const TestPage = ({item, index, checkTest, answeredIndex, showAnswer, isFinished}) => {
    const [isAnswered, setAnswer] = useState(answeredIndex);

    
    return (
        <ScrollView style={styles.item}>
            <Text style={styles.question}>{`${index+1}. ${item.name}`}</Text>
            <View style={(item.type !==2 ? styles.buttonContainer : styles.buttonContainerMonScript)}>
                { item.answers.map((answer, answerIndex) => (
                        <Button
                            key={answerIndex}
                            disabled={isFinished}
                            text={<Text>{`${item.type !==2 ? letter[answerIndex] : ''} ${answer.name}`}</Text>}
                            styleButton = {[(item.type !==2 ? styles.button : styles.buttonMonScript),(
                                showAnswer 
                                    ? (isFinished
                                            ? (isAnswered === answerIndex ? (answer.correct ? styles.buttonCorrect : styles.buttonWrong ) : (answer.correct ? styles.buttonCorrect : null))
                                            : (isAnswered != null ? (isAnswered === answerIndex ? (answer.correct ? styles.buttonCorrect : styles.buttonWrong ) : (answer.correct ? styles.buttonCorrect : null)) : null)
                                        )
                                    : (isAnswered === answerIndex ? styles.buttonAnswered : {})  
                            )]} 
                            styleText = {[(item.type !==2 ? styles.text : styles.textMonScript),(
                                showAnswer 
                                ? (isAnswered != null ? (isAnswered === answerIndex ? (answer.correct ? styles.textCorrect : styles.textWrong ) : (answer.correct ? styles.textCorrect : null)) : null)
                                : (isAnswered === answerIndex ? styles.textAnswered : {})  
                            )]}
                            onPress={()=>{
                                checkTest(index,answerIndex,answer.correct)
                                setAnswer(answerIndex); 
                            }}
                        />
                        ))}
            </View>
        </ScrollView>
    )
}

export default TestPage;