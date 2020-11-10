import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={[style]}>
        <Defs>
            <ClipPath id="clip-Web_1920_11">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_11" data-name="Web 1920 – 11" clip-path="url(#clip-Web_1920_11)">
            <Path 
                id="ic_work_24px" 
                d={`M29.474,8.105H23.368V5.053A3.042,3.042,0,0,0,20.316,2H14.211a3.042,3.042,0,0,
                    0-3.053,3.053V8.105H5.053a3.029,3.029,0,0,0-3.037,3.053L2,27.947A3.042,3.042,0,0,
                    0,5.053,31H29.474a3.042,3.042,0,0,0,3.053-3.053V11.158A3.042,3.042,0,0,0,29.474,
                    8.105Zm-9.158,0H14.211V5.053h6.105Z`} 
                transform="translate(7 8)" 
                fill={pressed ? '#fff' : "#385070"}
            />
        </G>
    </Svg>
)
