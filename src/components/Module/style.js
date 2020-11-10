import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width;

export default  StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
    },
    box: {
        margin: 9,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 6,
        height: (WIDTH / 100) * 36,
        width: (WIDTH / 100) * 37.8,
        justifyContent:'space-around',
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10
    },
    boxPressed: {
        backgroundColor: '#116EE2',
        borderWidth: 0,
    },
    image: {
        height: '34%',
        width: '100%',
        marginTop: '21.5%',
        alignItems: 'center',
    },
    imageCat: {
        marginVertical: '5%'
    },
    textBox: {
        marginTop: '3.5%',
        width: '90%',
        height: '36%',
        marginHorizontal: '5%',
        marginBottom: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 15,
        fontFamily: 'Arial',
        textAlign: 'center',
        color: '#2B3F55',
    },
    textPressed: {
        color: '#fff',
    },
    soymbo: {
        width: '50%',
        height: '50%',
        marginHorizontal: '25%',
        marginVertical: '10%',
        alignItems: 'center',
        resizeMode: 'cover',
        overflow: 'hidden'
    }
  });