import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Back from '../../../assets/icons/backSvg';
import {GlobalContext} from '../../../providers/ContextGlobalState';
import styles from './style';
import Merit from '../../../assets/images/MeritWhiteSvg';
import Popup from '../../../components/Global/PopUp';

const Item = ({date, score, total, navigation, passed, type}) => {
  let color = 'red';
  if (type === 2) color = 'blue';
  else if (type === 3) color = 'green'
  else if (type === 4) color = 'purple'
  else if (type === 5) color = 'orange'

  console.log(passed);

  return (<TouchableOpacity
    style={styles.item}
    // onPress={() => navigation.navigate('ScoreDetail')}
    >
    <Text style={styles.date}>{date}</Text>
    <Text style={[styles.score, {color: color}]}>{`${score}/${total}`}</Text>
    <Text style={[styles.percent, {backgroundColor: passed ? '#47bb66': '#ff6060'}]}>{Math.round((score/total)*100)}%</Text>
  </TouchableOpacity>)
};

const Score = ({navigation}) => {
  const {state, dispatch} = useContext(GlobalContext);
  //const [isModal, setModal] = useState(false);
    const [data, setData] = useState([]);


  useEffect(() => {
    console.log(state.score);
  },[])

  const _keyExtractor = (item, index) => index.toString();
      

  const renderItem = ({item}) => (
    <Item
      id={item.id}
      date={item.date}
      score={item.score}
      total={item.total}
      passed={item.passed}
      type={item.type}
    />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center'}}
        onPress={() => navigation.goBack()}>
        <Back style={{marginLeft: '10%', marginRight: 30}} color="#ADABAB" />
        <Text style={{fontSize: 30, fontWeight: 'bold', marginVertical: '10%'}}>
          Миний оноо
        </Text>
      </TouchableOpacity>
      
      <View style={styles.scoreList}>
        <View style={styles.itemHeader}>
          <Text style={[styles.headerText, {width: '30%'}]}>Огноо</Text>
          <Text style={[styles.headerText, {width: '30%'}]}>Оноо</Text>
          <Text style={[styles.headerText, {width: '20%'}]}>Хувь</Text>
        </View>
        
        <FlatList
          data={state.score}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.scores}
        />
      </View>
    </View>
    
  );
};
export default Score;
