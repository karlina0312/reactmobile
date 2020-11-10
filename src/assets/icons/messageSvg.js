import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width="15.302" height="15.302" viewBox="0 0 15.302 15.302" style={style} >
        <Path 
            id="ic_textsms_24px" 
            d={`M15.772,2H3.53A1.528,1.528,0,0,0,2.008,3.53L2,17.3l3.06-3.06H15.772a1.535,1.535,0,0,0,1.53-1.53V3.53A1.535,1.535,0,0,0,
                15.772,2ZM7.356,8.886H5.826V7.356h1.53Zm3.06,0H8.886V7.356h1.53Zm3.06,0h-1.53V7.356h1.53Z`} 
            transform="translate(-2 -2)" 
            fill="#fff"
        />
    </Svg>
)
