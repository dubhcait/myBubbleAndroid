import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

export default function useSpinVirus() {
  let spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 12000,
      easing: Easing.elastic,
      useNativeDriver: true,
    }).start();
  }, []);
  return spinValue;
}
