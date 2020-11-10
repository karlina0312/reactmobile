import React, {useState} from 'react';
import {
    View,
    Text,
    ScrollView,
} from 'react-native';
import Button from '../Global/Button/Button';
import styles from './styles';

const  letter = ['A)', 'B)', 'C)', 'D)', 'E)'];

// ===========================================> Холбох асуулт <================================================
const MultiTestPage = ({item, index, checkTest, answeredIndex, showAnswer, isFinished}) => {
    const [isAnswered, setAnswer] = useState(answeredIndex);
        console.log()
    return (
        <ScrollView style={styles.item}>
            <Text style={styles.question}>{`${index+1}. ${item.name}`}</Text>
            <View style={(item.type !==2 ? styles.buttonContainer : styles.buttonContainerMonScript)}>
            {item.choice.map((answer, answerIndex) => (
                    <View style={{width: '100%'}} key={answerIndex}>
                        <Text style={styles.label}>{`Хариулт ${answerIndex+1}`}</Text>
                        <Text style={styles.answer}>{answer.name}</Text>
                    </View>
                ))}
                <View style={{width: '100%', height: 20}} />
                {item.choiceMatch.map((answer_match, answerIndex) => (
                    <View style={{width: '100%'}} key={answerIndex}>
                        <Text style={styles.label}>{`Сонголт ${letter[answerIndex][0]}`}</Text>
                        <Text style={[styles.answer, styles.answer_match]}>{answer_match.name}</Text>
                    </View>
                ))}
                {item.answerMatrix.map((answer, answerIndex) => (
                        <Button
                            key={answerIndex}
                            disabled={isFinished}
                            text={<Text>{`${letter[answerIndex]} ${
                                answer.answers.map((answer, index) => (` ${index+1}-${letter[answer][0]} `))
                            }`}</Text>}
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
                        ))
                }
            </View>
        </ScrollView>
    )
}

export default MultiTestPage;