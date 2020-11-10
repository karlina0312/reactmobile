import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed, fill}) => (
    <Svg width="24" height="24" viewBox="0 0 24 24" style={style || {}}>
        <G id="Folder" transform="translate(-172.598 -319.598)">
            <Path 
                id="Path_178" 
                data-name="Path 178" 
                d={`M0,15.82V1.425A1.48,1.48,0,0,1,.45.375,1.425,1.425,0,0,1,1.425,0H9.747a.851.851,0,0,1,.6.225A1.008,
                    1.008,0,0,1,10.8.75l.75,2.1H21.669a1.48,1.48,0,0,1,1.05.45,1.361,1.361,0,0,1,.45,1.05V15.9a1.48,1.48,
                    0,0,1-.45,1.05,1.361,1.361,0,0,1-1.05.45H1.425a1.48,1.48,0,0,1-1.05-.45A2.02,2.02,0,0,1,0,15.82Z`} 
                transform="translate(173.014 322.91)" 
                fill={fill || (pressed ? "#03549f" : "#4d4d4d") }
            />
            <Rect 
                id="Rectangle_1447" 
                data-name="Rectangle 1447" 
                width="24" 
                height="24" 
                transform="translate(172.598 319.598)" 
                fill="none"
            />
        </G>
    </Svg>
)
