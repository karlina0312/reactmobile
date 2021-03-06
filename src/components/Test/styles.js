import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6E6',
  },
  item: {
    flex: 1,
    fontSize: 60,
    width: Dimensions.get('window').width,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 5,
    marginVertical: 5,
    alignItems: 'baseline',
    justifyContent: 'center',
    width: '100%',
    borderRadius: 4,
    fontSize: 50,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.16,
    shadowRadius: 2,
    elevation: 3,
    // borderWidth:3,
    borderColor: '#fff',
  },
  buttonContainer: {
    width: '90%',
    marginHorizontal: '5%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    // marginHorizontal: 30,
  },
  buttonCorrect: {
    backgroundColor: '#BAF9BE',
    borderColor: '#BAF9BE',
  },
  buttonWrong: {
    backgroundColor: '#FFA5A5',
    borderColor: '#FFA5A5',
  },
  buttonAnswered: {
    backgroundColor: '#428bca',
  },
  buttonPressed: {
    backgroundColor: '#5bc0de',
    borderColor: '#4D4D4D',
  },
  text: {
    marginHorizontal: 5,
    textAlign: 'left',
    color: '#2B3F55',
    // fontFamily: "HelveticaNeue",
  },
  textAnswered: {
    color: '#fff',
  },
  textCorrect: {color: '#437D47'},
  textWrong: {color: '#9B2B2B'},
  buttonFloat: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  height: 200,
  width: 200,
  left: Dimensions.get('window').width / 2 - 85,
  top: Dimensions.get('window').height * 0.55,

  matchesButton: {
    height: 50,
    width: 58,
    backgroundColor: '#116EE2',
    borderColor: '#C3DAF7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    margin: 5,
  },
  popup: {
    height: 120,
    width: 160,
    // top: -200,
    // left: 100,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  materialPosition: {
    top: -Dimensions.get('window').height * 0.5 + 150,
    right: -Dimensions.get('window').width * 0.5 + 90,
  },
  material: {
    height: 120,
    width: 160,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  buttonContainerMonScript: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 30,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  buttonMonScript: {
    backgroundColor: '#F5F5F5',
    borderRadius: 4,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 60,
    marginTop: 10,
    marginHorizontal: 10,
    borderColor: '#D4D4D4',
    // borderWidth: 2,
    fontSize: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textMonScript: {
    color: '#2B3F55',
    transform: [{rotate: '90deg'}],
  },
  question: {
    color: '#2B3F55',
    fontSize: 18,
    alignSelf: 'baseline',
    margin: 5,
    marginHorizontal: 10,
    padding: 5,
    // fontFamily: "HelveticaNeue",
  },
  title: {
    color: '#000000',
    fontSize: 23,
    alignSelf: 'baseline',
    padding: 10,
    // fontFamily: "HelveticaNeue",
  },
  paging: {
    flexDirection: 'row',
    marginLeft: 5,
    borderWidth:2,
    borderRadius:5,
    borderColor:'#116EE2',
    marginVertical: 10,
  },
  pagingText: {
    margin:4,
    fontSize: 23,
    color: '#FFC830',
    textAlign: 'left',
    alignSelf: 'stretch',
    fontWeight: 'bold',
  },
  score: {
    width: Dimensions.get('window').width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    paddingVertical: 20
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 10,
  },
  labelView: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 15,
    color: '#8E8E8E',
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 5,
    marginHorizontal: 13,
    paddingVertical: 20,
    paddingHorizontal: 0,
    borderRadius: 13,
    backgroundColor: '#E6E6E6',
    textAlign: 'center',
  },
  resultButton: {
    marginVertical: 10,
    marginHorizontal: 13,
    backgroundColor: '#116EE2',
    textAlign: 'center',
    width: '90%',
    height: 47,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  answer: {
    backgroundColor: '#fff',
    borderRadius: 4,
    width: '100%',
    fontSize: 15,
    textAlign: 'left',
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: '#2B3F55',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.16,
    shadowRadius: 2,
  },
  answer_match: {
    marginVertical: 5,
  },
  answer_match_A: {},
  matchButtonContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginVertical: 20,
    // marginHorizontal: 30,
  },
  matchButton: {
    height: 43,
    width: '20%',
    marginHorizontal: '2.5%',
    backgroundColor: '#EEEEEE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#BFBFBF',
    borderWidth: 1,
    // marginHorizontal: 10,
  },
  matchButtonSelected: {
    backgroundColor: '#D8E9FF',
    borderColor: '#C3DAF7',
  },
  matchText: {
    color: '#6B6B6B',
    fontSize: 18,
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    color: '#A4A4A4',
  },
  matchLabel: {
    marginTop: 10,
    marginBottom: 5,
    color: '#116EE2',
  },
  matches: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flexWrap: 'wrap',
    borderRadius: 8,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    height: 200,
    width: 200,
    left: Dimensions.get('window').width / 2 - 85,
    top: Dimensions.get('window').height * 0.55,
    // flexWrap: 'wrap',
  },
  matchesButton: {
    height: 50,
    width: 58,
    backgroundColor: '#116EE2',
    borderColor: '#C3DAF7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    margin: 5,
  },
  popup: {
    height: 120,
    width: 160,
    // top: -200,
    // left: 100,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  materialPosition: {
    top: -Dimensions.get('window').height * 0.5 + 150,
    right: -Dimensions.get('window').width * 0.5 + 90,
  },
  material: {
    height: 120,
    width: 160,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
