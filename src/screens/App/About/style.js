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
    marginTop: '10%',
    width: (WIDTH / 5) * 1.4,
    height: WIDTH / 5,
    marginLeft: (WIDTH / 5) * 1.8,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Helvetica',
    textAlign: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    textAlign: 'left',
    marginHorizontal: '10%',
    marginVertical: '5%',
    lineHeight: 21,
  },
  textLine: {
    fontSize: 18,
    fontFamily: 'Helvetica',
    textAlign: 'left',
    marginHorizontal: '10%',
    marginVertical: '0.5%',
    lineHeight: 25,
  },
  footer: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    textAlign: 'center',
    marginHorizontal: '10%',
    marginVertical: '0.5%',
  },
});
