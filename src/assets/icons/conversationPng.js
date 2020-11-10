import React from "react";
import { Image } from "react-native";

export default ({style, pressed}) => (
    <Image source={require('../images/conversation.png')} style={[style, { marginTop: '27.5%', height: '28%'}]} resizeMode='contain' />
)
