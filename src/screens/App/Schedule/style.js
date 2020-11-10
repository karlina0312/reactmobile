import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  bold: {
    textAlign: 'left',
    fontSize: 23,
    fontFamily: 'Roboto',
    fontWeight:'100',
    paddingTop: '15%',
    paddingBottom:'5%',
    marginHorizontal:'10%',
    fontWeight: 'bold',
  },
  simple: {
    textAlign: 'left',
    fontSize: 16,
    lineHeight:22,
    marginHorizontal:'5%',
    fontFamily: 'Arial',
    color:'#2B3F55',
    paddingHorizontal: '5%',
  },
  popup: {
    marginHorizontal: '10%',
    backgroundColor: '#FFF',
    borderRadius:4,
  },
  
  popupText: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Roboto',
    textAlign: 'center',
  },
  lilButton: {
    width: "100%",
    height: 55,
    backgroundColor: '#116EE2',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 13,
    marginTop: '8%',
    marginHorizontal: '2%',
  },
 
});
