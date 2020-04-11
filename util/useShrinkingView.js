import {useEffect, useRef} from 'react';
import {Animated, Easing} from 'react-native';

export default function useShrinkingView() {
  let shrinkValue = useRef(new Animated.Value(6)).current;

  useEffect(() => {
    Animated.timing(shrinkValue, {
      toValue: 1,
      duration: 800,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);
  return shrinkValue;
}
