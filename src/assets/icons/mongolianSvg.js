import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_6">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_6" data-name="Web 1920 – 6" clip-path="url(#clip-Web_1920_6)">
            <Path   
                id="ic_brightness_auto_24px" 
                d={`M18.165,21.261h3.956l-1.978-6.278ZM33.9,14.45V6.383H25.836L20.143.69,14.45,
                    6.383H6.383V14.45L.69,20.143l5.693,5.693V33.9H14.45L20.143,39.6,25.836,33.9H33.9V25.836L39.6,
                    20.143ZM24.1,27.023l-1.2-3.44h-5.5l-1.2,3.44H12.919l5.5-15.48h3.44l5.5,15.48H24.1Z`} 
                transform="translate(4.31 4.31)" 
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>
    </Svg>
)
