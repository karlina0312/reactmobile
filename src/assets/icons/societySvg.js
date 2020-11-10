import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_5">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_5" data-name="Web 1920 – 5" clip-path="url(#clip-Web_1920_5)">
            <Path
                id="ic_monetization_on_24px" 
                d={`M21.578,2A19.578,19.578,0,1,0,41.155,21.578,19.585,19.585,0,0,0,21.578,
                    2Zm2.76,31.5V37.24H19.111V33.461c-3.348-.7-6.187-2.858-6.4-6.656h3.837c.2,2.056,1.605,3.661,5.188,
                    3.661,3.837,0,4.7-1.919,4.7-3.113,0-1.625-.861-3.152-5.227-4.19-4.855-1.175-8.183-3.172-8.183-7.185,
                    0-3.367,2.721-5.56,6.089-6.284V5.916h5.227V9.733a6.921,6.921,0,0,1,5.58,6.637H26.08c-.1-2.173-1.253-3.661-4.346-3.661-2.937,
                    0-4.7,1.331-4.7,3.211,0,1.645,1.273,2.721,5.227,3.739s8.183,2.721,8.183,7.655c-.02,3.583-2.7,5.54-6.108,6.187Z`} 
                transform="translate(2 2)" 
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>
    </Svg>
)
