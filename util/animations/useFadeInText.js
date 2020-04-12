import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

export default function useFadeInText() {
  let fadeValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeValue, {
      toValue: 1,
      delay: 1000,
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);
  return fadeValue;
}
