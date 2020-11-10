import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_9">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_9" data-name="Web 1920 – 9" clip-path="url(#clip-Web_1920_9)">
            <Path 
                id="ic_school_24px" 
                d={`M8.477,22.028V29.5l13.084,7.14L34.645,29.5V22.028l-13.084,7.14ZM21.561,3,1,14.215,
                    21.561,25.43l16.822-9.177V29.168h3.738V14.215Z`} 
                transform="translate(2 4)" 
                // fill={pressed ? '#fff' : "#385070"}
                fill={pressed ? '#fff' : "#fff"}
            />
        </G>
    </Svg>
)
