// @ts-nocheck
import React, { useState } from 'react';
import {
  Candle,
  HoleCake,
  Icing,
  LayerBottom,
  LayerMiddle,
  LayerTop,
  Plate,
} from '../styledComponents';
const initialCoordinates = { x: 0, y: 0 };

const Cake = ({ setYears }) => {
  const [additionalCandle, setAdditionalCandle] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [age, setAge] = useState(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setCoordinates({ ...coordinates, x: clientX, y: clientY });
  };

  const handleOnClick = (e) => {
    const divRect = e.currentTarget.getBoundingClientRect();
    const relativeX = coordinates.x - divRect.left;
    const relativeY = coordinates.y - divRect.top;
    const randomColor = '#' + (((1 << 24) * Math.random()) | 0).toString(16);

    setAge(age + 1);
    setAdditionalCandle([
      ...additionalCandle,
      <Candle
        key={Date.now()}
        style={{
          top: `${relativeY - 60}px`,
          left: `${relativeX - 3}px`,
          background: `${randomColor}`,
        }}
      ></Candle>,
    ]);
    setYears(additionalCandle.length + 1);
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    setAdditionalCandle(additionalCandle.slice(0, -1));
    setYears(additionalCandle.length - 1);
  };

  return (
    <HoleCake>
      <Icing
        onMouseMove={handleMouseMove}
        onClick={handleOnClick}
        onContextMenu={handleRightClick}
      >
        {additionalCandle}
      </Icing>
      <LayerTop />
      <LayerMiddle />
      <LayerBottom />
      <Plate />
    </HoleCake>
  );
};

export default Cake;
