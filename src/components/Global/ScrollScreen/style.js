import { StyleSheet, Dimensions } from "react-native";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default  StyleSheet.create({
    pageContainer: {
        height: "auto", 
        maxHeight: HEIGHT/2,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    pageScroll: {
        backgroundColor: '#fff'
    },
    pageTextinput: {
        width: WIDTH/100*55,
        textAlign: 'center',
        fontSize: 16,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageButton: {
        height: 40, 
        backgroundColor: '#116EE2', 
        borderRadius: 10, 
        width: WIDTH/100*15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    pageTextView: {
        width: WIDTH/100*65,
        marginHorizontal: '5%',
        borderTopWidth: 0.5,
        borderTopColor: 'gray'
    },
    pageText: {
        width: '100%',
        textAlign: 'center',
        paddingVertical: 10,
        fontSize: 20
    }
});