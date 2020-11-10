import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed, fill}) => (
    <Svg width="19" height="19" viewBox="0 0 19 19" style={style}>
        <G id="Compose" transform="translate(-289.864 -236.864)">
            <Rect 
                id="Rectangle_324" 
                data-name="Rectangle 324" 
                width="19" 
                height="19" 
                transform="translate(289.864 236.864)" 
                fill="none"
            />
            <Path 
                id="Path_110" 
                data-name="Path 110" 
                d={`M9.6,3.624,2.9,10.509.609,17.166s-.206.748,0,.96.985.126.985.126l6.741-2.126,
                    6.7-6.7ZM18.12,3.08,15.764.725a2.2,2.2,0,0,0-3.262,0L10.509,2.718l5.436,5.617L18.12,
                    6.161a2.3,2.3,0,0,0,.725-1.631A2.237,2.237,0,0,0,18.12,3.08Z`} 
                transform="translate(290.02 237.02)" 
                fill={fill || (pressed ? "#03549f" : "#4d4d4d") }
            />
        </G>
    </Svg>
)
