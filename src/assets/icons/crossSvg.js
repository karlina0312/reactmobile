import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width="23.522" height="23.522" viewBox="0 0 23.522 23.522" style={style}>
        <Path 
            id="ic_close_24px" 
            d={`M28.522,7.369,26.153,5l-9.392,9.392L7.369,5,5,7.369l9.392,9.392L5,26.153l2.369,2.369,9.392-9.392,9.392,
                9.392,2.369-2.369L19.13,16.761Z`} 
            transform="translate(-5 -5)" 
            fill="#fff"
        />
    </Svg>
)
