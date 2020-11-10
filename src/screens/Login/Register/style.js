import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    engine: {
        position: 'absolute',
        right: 0,
    },
    maintext:{
        fontWeight: 'bold',
        fontSize: 30,
        opacity:1
    },
    coretext:{
        fontSize: 17,
        marginTop: '0.056%',
        marginLeft: '14.5%',
        // alignSelf: 'center',
        marginBottom: 10,
        opacity:1
    },
    input: {
        width: "71%",
		height: 55,
		marginTop:'0.0317%',
		backgroundColor: "#F5F5F5",
		borderColor: "#D4D4D4",
		borderWidth: 1,
		color:'#373737',
		borderRadius: 4,
		alignSelf: "center",
        marginBottom: "0.08%",
        marginBottom: 21,
        paddingHorizontal: 10
    },
    button: {
        width: '71%',
        height: 70,
        backgroundColor: '#116EE2',
        justifyContent: 'center',
        alignSelf: 'center',
        // marginTop: 56,
        borderRadius: 13,
        opacity:1
    }
});