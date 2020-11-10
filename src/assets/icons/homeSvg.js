import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg width="26.353" height="22.011" viewBox="0 0 26.353 22.011" style={style}>
        <Path 
            id="ic_home_24px" 
            d={`M12.541,25.4V17.494h5.271V25.4H24.4V14.859h3.953L16.052,3.708a1.743,1.743,0,0,0-.854-.319,1.5,1.5,0,0,
                0-.808.319L2.864,14.106,2,14.859H5.953l.018,10.062v.48h6.569Z`}
            transform="translate(-2 -3.389)" 
            fill={pressed ? "#03549f" : "#4d4d4d" }
        />
    </Svg>
)
