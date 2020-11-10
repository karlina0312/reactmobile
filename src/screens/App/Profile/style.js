import {StyleSheet, Dimensions} from 'react-native';
const WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: (WIDTH / 100) * 78,
    position: 'relative',
    left: 0,
    backgroundColor: '#fff',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: ((WIDTH / 100) * 78) / 3,
    marginTop: '10%',
  },
  editBox: {
    padding: 13.5,
    // width: 47,
    alignSelf: 'flex-end',
    margin:15,
    borderWidth: 2,
    borderColor: '#D4D4D4',
    borderRadius: 13,
  },
  editButton: {
    // backgroundColor: 'black'
  },
  nameText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Roboto',
    marginTop:10,
    marginHorizontal:47,
  },
  frameText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    marginLeft: '10%',
    marginTop: '10%',
  },
  inputText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    marginHorizontal: '10%',
    paddingVertical: 13,
    paddingHorizontal: 10,
    borderColor: '#b9b9b9',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 8,
  },
  imageButton: {
    width: 20,
    height: 20,
    marginRight: '10%',
    paddingRight: 10,
  },
  button: {
    marginTop: '5%',
    marginHorizontal: '10%',
    paddingVertical: '6%',
    paddingHorizontal: '6%',
    backgroundColor: '#116EE2',
    borderRadius: 6,
  },
  button: {
    marginTop: '5%',
    marginHorizontal: '10%',
    paddingVertical: '7%',
    paddingHorizontal: '6%',
    backgroundColor: '#116EE2',
    borderRadius: 6,
  },
  buttonExit: {
    marginTop: '5%',
    marginLeft: '10%',
    marginRight: '5%',
    paddingVertical: '7%',
    paddingHorizontal: '6%',
  },
  buttonText: {
    paddingLeft: 13.5,fontSize: 18,
    fontFamily: 'Roboto',
    color: 'white',
    
  },
  exitButtonText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    paddingHorizontal: '5%',
    color: 'black',
  },
  text:{
    color:'#000',
    fontSize: 18,
    fontFamily: 'Roboto',
    paddingHorizontal: '5%',
    textAlign:'center',
    marginTop:"5%",
  },
  popup: {
    width: 326,
    marginHorizontal: '10%',
    marginVertical: '20%',
    backgroundColor: '#FFF',
  },
  bold: {
    textAlign: 'center',
    fontSize: 23,
    fontFamily: 'Roboto-Medium',
    paddingTop: '20%',
    fontWeight: 'bold',
  },
  simple: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Helvetica',
    paddingHorizontal: '10%',
  },
  lilButton: {
    width: 47,
    height: 47,
    backgroundColor: '#116EE2',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: '8%',
    marginHorizontal: '2%',
  },
  imageButton: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignSelf: 'center',
  },
   popup: {
    marginHorizontal: '10%',
    backgroundColor: '#FFF',
    borderRadius:4,
  },
  
  popupText: {
    alignSelf: 'flex-start',
    color: 'white',
    fontSize: 18,

    fontFamily: 'Roboto',
  },
  lilButton: {
    width: 55,
    height: 55,
    backgroundColor: '#116EE2',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: '8%',
    marginHorizontal: '2%',
  },
  imageButton: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});