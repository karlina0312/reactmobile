import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path, Circle } from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_12">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_12" data-name="Web 1920 – 12" clip-path="url(#clip-Web_1920_12)">
            <G id="ic_record_voice_over_24px" transform="translate(6 8)">
                <Circle id="Ellipse_3" data-name="Ellipse 3" cx="6" cy="6" r="6" transform="translate(7 7)" fill={pressed ? '#fff' : "#385070"}/>
                <Path 
                    id="Path_3" 
                    data-name="Path 3" 
                    d={`M13.211,21.842C9.135,21.842,1,23.887,1,27.947V31H25.421V27.947C25.421,23.887,17.286,21.842,13.211,
                        21.842ZM25.055,7.128,22.491,9.708a5.063,5.063,0,0,1,0,5.937l2.564,2.579a7.811,7.811,0,0,0,
                        0-11.1ZM30.107,2,27.619,4.488a12.178,12.178,0,0,1,0,16.393l2.488,2.488A15,15,0,0,0,30.107,2Z`} 
                    // fill={pressed ? '#fff' : "#385070"}
                    fill={pressed ? '#fff' : "#116EE2"}

                />
            </G>
        </G>
    </Svg>
)
