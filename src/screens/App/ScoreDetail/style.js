import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  headerBox: {
    padding: 5,
    width: 47,
    marginTop: '5%',
    marginLeft: '10%',
  },
  backButton: {
    width: 30,
    height: 30,
  },
  headerText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    marginVertical: '5%',
    marginLeft: '10%',
    fontWeight: 'bold',
  },
  nameText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Roboto',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  box: {
    marginTop: '7%',
  },
  item: {
    flexDirection: 'row',
    marginVertical: '2%',
    paddingVertical:'5%',
    // backgroundColor: '#BAF9BE',
    // borderColor: '#67B76C',
    borderRadius: 5,
    borderWidth: 1,
    paddingVertical: '2%',
    paddingHorizontal: '3%',
  },
  date: {
    fontSize: 18,
    fontFamily: 'Arial',
    alignItems: 'flex-start',
  },
  score: {
    fontSize: 18,
    fontFamily: 'Arial',
    padding:'5%',
    marginRight:'30%',
  },
  percent: {
    fontSize: 18,
    fontFamily: 'Arial',
    alignItems: 'flex-end',
    
    padding:'5%',
    backgroundColor: '#BAF9BE',
    borderColor: '#67B76C',
    borderRadius:13,
  },
  scoreList: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '8%',
  },
  type: {
    fontSize: 18,
    fontFamily: 'Arial',
    alignItems: 'flex-start',
  },
});
