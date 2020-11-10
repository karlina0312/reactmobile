import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed, fill}) => (
    <Svg width="17.769" height="22.211" viewBox="0 0 17.769 22.211" style={style || {}}>
        <Path 
            id="ic_class_24px" 
            d={`M19.548,2H6.221A2.228,2.228,0,0,0,4,4.221V21.99a2.228,2.228,0,0,0,2.221,2.221H19.548a2.228,2.228,0,0,0,
                2.221-2.221V4.221A2.228,2.228,0,0,0,19.548,2ZM6.221,4.221h5.553v8.884L9,11.44,6.221,13.105Z`} 
            transform="translate(-4 -2)" 
            fill={fill || (pressed ? "#03549f" : "#4d4d4d") }
        />
    </Svg>

)
