import React from "react";
import { Svg, Defs, ClipPath, Rect, G, Path} from 'react-native-svg';

export default ({style, pressed}) => (
    <Svg viewBox="0 0 48 48" style={style}>
        <Defs>
            <ClipPath id="clip-Web_1920_7">
                <Rect width="48" height="48"/>
            </ClipPath> 
        </Defs>
        <G id="Web_1920_7" data-name="Web 1920 – 7" clip-path="url(#clip-Web_1920_7)">
            <Path   
                id="ic_check_circle_24px" 
                d={`M18.62,2a16.62,16.62,0,1,0,16.62,16.62A16.626,16.626,
                    0,0,0,18.62,2ZM15.3,26.929l-8.31-8.31,2.343-2.343,5.966,5.95L27.91,9.612l2.343,2.36Z`} 
                transform="translate(6 6)" 
                fill={pressed ? '#fff' : "#116EE2"}
            />
        </G>

    </Svg>
)
