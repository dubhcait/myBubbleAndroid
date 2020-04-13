import React from 'react';
import {Animated} from 'react-native';
import {healthBubble, poppedBubble2} from '../assets';

const LifeCount = ({lifeCount, springValue}) => {
  console.log(springValue);
  return lifeCount.map((i, k) => {
    if (k === 0) {
      return (
        <Animated.Image
          source={i === 1 ? healthBubble : poppedBubble2}
          key={k}
          style={{width: 60, height: 60, transform: [{scale: springValue}]}}
        />
      );
    }

    return (
      <Animated.Image
        source={i === 1 ? healthBubble : poppedBubble2}
        key={k}
        style={{width: 60, height: 60, transform: [{scale: springValue}]}}
      />
    );
  });
};

export default LifeCount;
