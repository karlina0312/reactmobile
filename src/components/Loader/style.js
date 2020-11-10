import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    Modal: {
        position:'absolute',
        width:'100%',
        height:'100%',
        top:0,
        left:0,
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1
    }
});