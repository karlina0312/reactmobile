import { StyleSheet, StatusBar } from "react-native";

export default  StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: '5%',
        marginVertical: '1.5%',
        marginHorizontal: '3%',
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10
    },
    itemPress: {
        backgroundColor: '#116EE2',
        borderColor: '#116EE2',
    },
    title: {
        fontSize: 15,
        fontFamily:'Arial',
        color: '#2B3F55',
        lineHeight: 20,
    },
    titlePress: {
        color: '#fff',
    }
});