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
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: (WIDTH / 100) * 40,
    marginTop: '10%',
  },
  nameText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Roboto',
    marginTop: 5,
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    marginHorizontal: '10%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    borderColor: '#a2a2a2',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: '1%',
  },
  frameText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    marginLeft: '10%',
    marginTop: '10%',
  },
  updateButton: {
    backgroundColor: '#116EE2',
    marginHorizontal: '10%',
    marginTop: '10%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    borderRadius: 10,
  },
  updateText: {
    fontSize: 22,
    fontFamily: 'Roboto',
    color: '#fff',
    textAlign: 'center',
  },
  changeButton: {
    marginHorizontal: '10%',
    marginTop: '10%',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
    borderRadius: 10,
    borderColor: '#116EE2',
    borderWidth: 3,
  },
  changeText: {
    fontSize: 22,
    fontFamily: 'Roboto',
    color: '#000',
    textAlign: 'center',
    
  },
});
