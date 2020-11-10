import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    header: {
        width: '90%',
        height: 60,
        borderRadius: 10,
        marginTop: '2%',
        backgroundColor: '#116EE2',
        marginHorizontal: '5%',
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    container: {
        flex: 1,
        paddingHorizontal: '7%',
        paddingVertical: '6%',
        backgroundColor: '#E6E6E6', 
        // justifyContent: 'center'
    }
});
