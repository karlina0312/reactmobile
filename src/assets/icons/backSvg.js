import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, color}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width="11.115" height="18" viewBox="0 0 11.115 18" style={style}>
        <Path   
            id="ic_chevron_left_24px" 
            d="M19.115,8.115,17,6,8,15l9,9,2.115-2.115L12.245,15Z" 
            transform="translate(-8 -6)" 
            fill={color || '#fff'}
        />
    </Svg>
    )


