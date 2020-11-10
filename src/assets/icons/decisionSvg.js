import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_14">
                <Rect width="48" height="48"/>
            </ClipPath>
        </Defs>
        <G id="Web_1920_14" data-name="Web 1920 – 14" clip-path="url(#clip-Web_1920_14)">
            <Path 
                id="ic_check_box_24px" 
                d={`M29.667,3H6.333A3.332,3.332,0,0,0,3,6.333V29.667A3.332,3.332,0,0,0,6.333,33H29.667A3.332,3.332,0,
                    0,0,33,29.667V6.333A3.332,3.332,0,0,0,29.667,3Zm-15,23.333L6.333,18l2.35-2.35,5.983,5.967,12.65-12.65,
                    2.35,2.367Z`} 
                transform="translate(6 6)" 
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>
        
    </Svg>
)
