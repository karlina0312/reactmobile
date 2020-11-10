import React, {useState, useContext} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {GlobalContext} from '../../../providers/ContextGlobalState';
import Back from '../../../assets/icons/backSvg';
import styles from './style';
import {SafeAreaView} from 'react-native-safe-area-context';

const name = ['Ерөнхий мэдлэгийн сорил', 'Монгол хэл бичгийн сорил', 'Дүн шилжилгээ'];

// const score = [
//   {
//     id: '1',
//     type: 'Ерөнхий мэдлэгийн сорил',
//     detScore: '35/55',
//     detPercent: '63%',
//   },
//   {
//     id: '2',
//     type: 'Монгол хэл бичгийн сорил',
//     detScore: '25/35',
//     detPercent: '83%',
//   },
//   {id: '3', type: 'Дүн шилжилгээ', detScore: '10/10', detPercent: '100%'},
// ];

const Item = ({id, detScore, detPercent, type}) => (
  <View style={styles.box}>
    <Text style={styles.type}>{type}</Text>
    <View style={styles.item}>
      <Text style={styles.score}>{detScore}</Text>
      <Text style={styles.percent}>{detPercent}</Text>
    </View>
  </View>
);
const ScoreDetail = ({navigation}) => {
  const {state, dispatch} = useContext(GlobalContext);
    const[data, setData] = useState([])

  const renderItem = ({item}) => (
    <Item
      id={item.id}
      detScore={item.detScore}
      detPercent={item.detPercent}
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
          Онооны задаргаа
        </Text>
      </TouchableOpacity>

      <View style={styles.scoreList}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
export default ScoreDetail;
