import React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {healthBubble, poppedBubble2} from '../assets';

const LifeCount = ({lifeCount, springValue}) => {
  return lifeCount.map((i, k) => {
    if (k === 0) {
      return (
        <Animated.Image
          source={i === 1 ? healthBubble : poppedBubble2}
          key={k}
          style={{...styles.image, transform: [{scale: springValue}]}}
        />
      );
    }

    return (
      <Animated.Image
        source={i === 1 ? healthBubble : poppedBubble2}
        key={k}
        style={{...styles.image, transform: [{scale: springValue}]}}
      />
    );
  });
};

const styles = StyleSheet.create({
  image: {width: 60, height: 60},
});
export default LifeCount;
