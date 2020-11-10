import React from 'react';
import {Svg, Defs, ClipPath, Rect, G, Path, Polygon} from 'react-native-svg';

export default ({style, pressed}) => (
  <Svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 146.333 104.334"
    enable-background="new 0 0 146.333 104.334"
    style={style}>
    <Polygon
      fill="#FFBB00"
      points="33.333,51.917 59.667,67.958 142.333,19 142.333,48 59.417,95 33.333,79.833 "
    />
    <Polygon
      fill="#fff"
      points="91.333,80.167 115.333,66.333 115.333,86 91.333,99 "
    />
    <Polygon
      fill="#fff"
      points="6.333,3.917 61.5,35.958 115.333,3.667 115.333,32.125 60.667,64 30.667,47.167 30.5,99 6.333,86.167 "
    />
  </Svg>
);
