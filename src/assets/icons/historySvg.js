import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_4">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_4" data-name="Web 1920 – 4" clip-path="url(#clip-Web_1920_4)">
            <Path   
                id="ic_history_24px" 
                d={`M26.075,3A18.808,18.808,0,0,0,7.269,21.806H1l8.128,8.128.146.293,
                    8.442-8.421H11.448a14.7,14.7,0,1,1,4.3,10.323L12.785,35.1A18.8,18.8,0,1,
                    0,26.075,3Zm-2.09,10.448V23.9L32.929,29.2l1.5-2.528L27.12,22.329V13.448Z`} 
                transform="translate(1 2)" 
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>
    </Svg>
)
