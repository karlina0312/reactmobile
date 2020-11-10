import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";

const Button = ({ styleButton, text, styleText, disabled, onPress , children}) => (
    <Pressable onPress={onPress} style={styleButton} disabled={disabled} >
        {children}
        <Text style={styleText}>{text}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: "rgba(0, 0 , 0, 0.05)",
        borderRadius: 10,
        paddingVertical: 15,
        paddingLeft: 20,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 10,
        borderWidth: 1,
        color: "#000",
        fontSize: 20,
        textAlign: "center",
    },
//   buttonContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     marginTop: 20,
//     marginHorizontal: 10,
//     justifyContent: "space-between"
//   }
});

Button.defaultProps ={
    styleButton: styles.button,
}

export default Button;