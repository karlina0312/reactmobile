import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';
import { ImagePropTypes } from "react-native";

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style} >
        <Defs>
            <Rect width="48" height="48"/>
        </Defs>
        <G>
            <Path 
                d={`M39.041,31.329a3.916,3.916,0,0,0,3.9-3.9V7.9a3.916,3.916,0,0,0-3.9-3.9H7.808A3.916,
                    3.916,0,0,0,3.9,7.9V27.425a3.916,3.916,0,0,0,3.9,3.9H0v3.9H46.85v-3.9ZM7.808,
                    7.9H39.041V27.425H7.808Z`} 
                transform="translate(1 4)" 
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>
    </Svg>
)

