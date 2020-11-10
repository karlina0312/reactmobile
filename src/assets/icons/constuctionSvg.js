import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_10">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_10" data-name="Web 1920 – 10" clip-path="url(#clip-Web_1920_10)">
            <Path 
                id="ic_account_balance_24px" 
                d={`M5.143,15.143v11H9.857v-11Zm9.429,0v11h4.714v-11ZM2,34H31.857V29.286H2ZM24,
                    15.143v11h4.714v-11ZM16.929,1,2,8.857V12H31.857V8.857Z`}
                transform="translate(7 7)" 
                // fill={pressed ? '#fff' : "#385070"}
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>
    </Svg>
)
