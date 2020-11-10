import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_13">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_13" data-name="Web 1920 – 13" clip-path="url(#clip-Web_1920_13)">
            <Path 
                id="ic_description_24px" 
                d={`M18.861,2H6.972A2.968,2.968,0,0,0,4.015,4.972L4,28.75a2.968,2.968,0,0,0,2.957,2.972H24.805a2.981,
                    2.981,0,0,0,2.972-2.972V10.917Zm2.972,23.778H9.944V22.805H21.833Zm0-5.944H9.944V16.861H21.833ZM17.375,
                    12.4V4.229L25.548,12.4Z`} 
                transform="translate(8 7)" 
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>
    </Svg>
)
