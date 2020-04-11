import React from 'react';
import {Image} from 'react-native';
import {healthBubble, poppedBubble2} from '../assets';
const LifeCount = ({lifeCount}) => {
  return lifeCount.map((i, k) => {
    if (k === 0) {
      return (
        <Image
          source={i === 1 ? healthBubble : poppedBubble2}
          key={k}
          style={{width: 60, height: 60}}
        />
      );
    }

    return (
      <Image
        source={i === 1 ? healthBubble : poppedBubble2}
        key={k}
        style={{width: 60, height: 60}}
      />
    );
  });
};

export default LifeCount;
