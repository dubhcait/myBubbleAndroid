import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Card({
  color,
  backgroundColor,
  zIndex,
  onPress,
  children,
}) {
  const {colors} = useTheme();
  return (
    <View
      style={[
        style.container,
        {color: color, backgroundColor: backgroundColor, zIndex: zIndex},
      ]}>
      {children}
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 60,
    marginBottom: -60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    paddingHorizontal: 20,
  },
});
