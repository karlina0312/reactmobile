import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" style={style}>
        <Path 
            id="ic_system_update_alt_24px" 
            d={`M12,16.5l4-4H13v-9H11v9H8Zm9-13H15V5.49h6V19.52H3V5.49H9V3.5H3a2.006,2.006,0,0,0-2,2v14a2.006,
            2.006,0,0,0,2,2H21a2.006,2.006,0,0,0,2-2V5.5A2.006,2.006,0,0,0,21,3.5Z`} 
            transform="translate(-3.5 23) rotate(-90)"
            fill="#000" 
        />
    </Svg>



)