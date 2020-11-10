import React, {useState, useContext, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  ScrollView,
  TouchableHighlight,
  Image,
  Alert,
  Linking,
} from 'react-native';
import {fetchNews} from '../../../services/news';
import { getLatesetVersion } from '../../../actions/structure'
import NavigationHeader from '../../../components/Global/NavigationHeader';
import PopUp from '../../../components/Global/PopUp';
import Download from '../../../services/download';
import {GlobalContext} from '../../../providers/ContextGlobalState';
import Back from '../../../assets/icons/backSvg';
import styles from './style';

const PayMentInfo = ({code}) => (
    
  <View style={styles.popupPayment}>
    <Text style={[styles.bold, {paddingTop: '10%', paddingBottom: 0}]}>
      Төлбөр төлөх заавар
    </Text>
    <Text
      style={{
        paddingTop: 14,
        paddingBottom: 28,
        fontSize: 16,
        paddingHorizontal: '10%',
      }}>
        Та ХААН БАНКНЫ {<Text style={{fontWeight: 'bold', fontSize: 18}}>5009981237</Text>} (Данс эзэмшигчийн нэр: Мэрит Консалтинг Сервис)
        дансанд 30,000 төгрөгийг шилжүүлснээр энэхүү аппыг ашиглах боломжтой
        болно. Гүйлгээний утга: {<Text style={{fontWeight: 'bold', fontSize: 18}}>{code}</Text>} ыг бичнэ.{'\n'}
        {'\n'}
        Апп устсан тохиолдолд тухайн төхөөрөмжид дахин төлбөр төлөхгүй буцаан
        суулгах боломжтой.
    </Text>
  </View>
);

const TakeTest = ({navigation, close}) => {
  const [type, setType] = useState(null);
  const takeMockTest = (type, name) => {
    close();
    navigation.push('Mocktest', {type: type, name: name});
  };
  return (
    <>
      <View style={styles.popup}>
        {type == null 
          ? (
            <>
              <Text style={styles.bold}>Шалгалт өгөх</Text>
              <Text style={styles.simple}>
                Та Монгол Улсын Төрийн Албанд анх удаа орохоор бэлтгэж байгаа бол Ерөнхий шалгалт, Удирдах, Гүйцэтгэх, Туслах албан тушаалын шалгалт өгөх бол Тусгай шалгалт хэсгийг сонгоно уу
              </Text>
              <TouchableHighlight
                style={styles.popupButton}
                onPress={() => setType(1)}>
                <Text style={styles.popupText}>Ерөнхий шалгалт</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.popupButton}
                onPress={() => setType(2)}>
                <Text style={styles.popupText}>Тусгай шалгалт</Text>
              </TouchableHighlight>
            </>
          ) 
          : type == 1 
              ? (
                <>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignItems: 'center'}}
                    onPress={() => setType(null)}>
                    <Back
                      style={{marginLeft: '15%', marginRight: 20}}
                      color="#ADABAB"
                    />
                    <Text style={styles.bold}>Ерөнхий шалгалт</Text>
                  </TouchableOpacity>
                  <TouchableHighlight
                    style={styles.popupButton}
                    onPress={() => takeMockTest(1, 'Ерөнхий мэдлэг')}
                  >
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={[styles.popupText, styles.popupTextQuestion]}>Ерөнхий мэдлэг</Text>
                      <Text style={[styles.popupText, styles.popupTextQuestionNumber]}>55</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.popupButton}
                    onPress={() => takeMockTest(2, 'Монгол хэл, бичиг')}
                  >
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={[styles.popupText, styles.popupTextQuestion]}>Монгол хэл, бичиг</Text>
                      <Text style={[styles.popupText, styles.popupTextQuestionNumber]}>30</Text>
                    </View>
                  </TouchableHighlight>
                  <TouchableHighlight
                    style={styles.popupButton}
                    onPress={() => takeMockTest(3, 'Дүн шинжилгээ')}
                  >
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={[styles.popupText, styles.popupTextQuestion]}>Дүн шинжилгээ</Text>
                      <Text style={[styles.popupText, styles.popupTextQuestionNumber]}>15</Text>
                    </View>
                  </TouchableHighlight>
                </>
              ) 
            : (
              <>
                <TouchableOpacity
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => setType(null)}>
                  <Back
                    style={{marginLeft: '15%', marginRight: 20}}
                    color="#ADABAB"
                  />
                  <Text style={styles.bold}>Тусгай шалгалт</Text>
                </TouchableOpacity>
                <TouchableHighlight
                  style={styles.popupButton}
                  onPress={() => takeMockTest(4, 'Хууль')}
                >
                  <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={[styles.popupText, styles.popupTextQuestion]}>Хууль</Text>
                    <Text style={[styles.popupText, styles.popupTextQuestionNumber]}>30</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  style={styles.popupButton}
                  onPress={() => takeMockTest(5, 'Дүн шинжилгээ')}
                >
                  <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={[styles.popupText, styles.popupTextQuestion]}>Дүн шинжилгээ</Text>
                    <Text style={[styles.popupText, styles.popupTextQuestionNumber]}>10</Text>
                  </View>
                </TouchableHighlight>
                <View style={[styles.popupButton, {opacity: 0.6}]}>
                  <Text style={styles.popupText}>Асуудал шийдвэрлэх</Text>
                </View>
                <View style={[styles.popupButton, {opacity: 0.6}]}>
                  <Text style={[styles.popupText, {textAlign: 'center'}]}>Монгол хэл: {'\n'}ярианы/бичгийн шалгалт</Text>
                </View>
                <View style={[styles.popupButton, {opacity: 0.6}]}>
                  <Text style={styles.popupText}>Ярилцлага</Text>
                </View>
              </>
            )
        }
      </View>
    </>
  );
};

const Home = (props) => {
  const {state, dispatch} = useContext(GlobalContext);
  const [news, setNews] = useState(null);
  const [isModal, setModal] = useState(false);
  const [isBody, setBody] = useState(false);
  const [isPayment, setPayment] = useState(false);
  const [isDownload, setDownload] = useState(false);

  useEffect(() => {
    if (news == null) {
      fetchNews().then((result) => {
        setNews(result);
      });
    }
  }, []);

  useEffect(() => {
    const unsubscribe = props.route.params.tabNavigation.addListener(
      'tabPress',
      (e) => {
        props.navigation.navigate('Home');
      },
    );

    return unsubscribe;
  }, [props.navigation]);

  const handlePress = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <>
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', backgroundColor: '#e6e6e6'}}>
        <NavigationHeader
          type={0}
          onPress={() => props.navigation.openDrawer()}
          title="Нүүр"
        />
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {news != null &&
            news.map((element) => {
              return (
                <TouchableOpacity
                  key={element.id}
                  onPress={() => handlePress(element.url)}
                >
                  <Text style={styles.boldtext}>{element.title}</Text>
                  <Text visible={false} style={styles.maintext}>
                    {element.body}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </ScrollView>

        {!state.user.status ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setPayment(true)}>
            <Text style={{alignSelf: 'center', color: 'white', fontSize: 22}}>
              Төлбөр төлөх
            </Text>
          </TouchableOpacity>
        ) : state.downloaded 
              ? ( state.version !== null && !state.version.updated 
                    ? (<TouchableOpacity
                        style={[styles.button, {backgroundColor: '#FEBB2C'}]}
                        onPress={() => setDownload(true)}>
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 22}}>
                          Шинэчлэх
                        </Text>
                      </TouchableOpacity>)
                    : (<TouchableOpacity
                        style={styles.button}
                        onPress={() => setModal(true)}>
                        <Text style={{alignSelf: 'center', color: 'white', fontSize: 22}}>
                          Шалгалт өгөх
                        </Text>
                      </TouchableOpacity>)) 
              : (<TouchableOpacity
                    style={styles.button}
                    onPress={() => setDownload(true)}>
                    <Text style={{alignSelf: 'center', color: 'white', fontSize: 22}}>
                      Татах
                    </Text>
                  </TouchableOpacity>)
        }

        <PopUp
          close={() => setModal(false)}
          visible={isModal}
          body={
            <TakeTest
              navigation={props.navigation}
              close={() => setModal(false)}
            />
          }
        />
        <PopUp
          close={() => setPayment(false)}
          visible={isPayment}
          body={<PayMentInfo code={state.user.code}/>}
        />
        <PopUp
          visible={isDownload}
          body={
            <Download
              finished={(type) => {
                setDownload(false);
                if (type === 0) {
                  getLatesetVersion().then(version => {
                    console.log('setting new version from home', {...version, oldVersion: version.id, updated: true});
                    dispatch({type: 'SET_VERSION', list: {...version, oldVersion: version.id, updated: true}});
                  })
                  dispatch({type: 'SET_DOWNLOADED', list: true});
                } else if (type === 1){
                  state.version.updated = true;
                  dispatch({type: 'SET_VERSION', list: {...state.version}});
                }
                
              }}
            />
          }
        />
      </SafeAreaView>
    </>
  );
};

export default Home;
