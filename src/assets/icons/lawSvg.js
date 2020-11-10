import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg  viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_2">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_2" data-name="Web 1920 – 2" clip-path="url(#clip-Web_1920_2)">
            <Path   
                id="ic_gavel_24px" 
                d={`M1,32.137H19.684v3.114H1Zm6.609-20.13,4.406-4.4L34.03,29.623l-4.4,4.4ZM18.621,
                    1l8.807,8.806-4.406,4.406L14.219,5.4ZM5.4,14.21l8.807,8.807-4.4,4.4L1,18.613Z`} 
                transform="translate(6.003 6)" 
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>
    </Svg>
)
