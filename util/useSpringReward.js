import {useEffect, useRef} from 'react';
import {Animated} from 'react-native';

export default function useSpringReward() {
  let springValue = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    springValue.setValue(0.3);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: true,
    }).start();
  }, []);
  return springValue;
}
