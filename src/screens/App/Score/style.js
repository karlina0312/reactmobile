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
    marginHorizontal: (WIDTH / 100) * 40,
    marginTop: '10%',
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: '2%',
    borderRadius: 5,
    width: '90%',
    shadowOffset:{  width: 1,  height: 1,  },
   
    shadowColor: 'black',
    paddingVertical: '2%',
    paddingHorizontal: '2%',
    borderBottomColor:'#a2a2a2',
    borderBottomWidth:1,
  },
  itemHeader: {
    flexDirection: 'row',
    marginVertical: '2%',
    paddingVertical: '2%',
  },
  date: {
    fontSize: 18,
    fontFamily: 'Arial',
    width: '43%',
    textAlign: 'left',
    paddingVertical: '2%',
  },
  score: {
    fontSize: 18,
    fontFamily: 'Arial',
    width: '35%',
    paddingVertical: '2%',
  },
  percent: {
    fontSize: 18,
    fontFamily: 'Arial',
    // paddingHorizontal: '2%',
    // backgroundColor: '#47bb66',
    borderColor: '#67B76C',
    borderRadius:13,
    paddingVertical: '2%',
    textAlign: 'center',
    color:'#fff',
    width: '20%',
    
  },
  scoreList: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3%',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 18,
    width: '30%'
  }
});
