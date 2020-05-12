import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Card({
  color,
  backgroundColor,
  zIndex,
  onPress,
  children,
}) {
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
    borderTopLeftRadius: 75,
    borderTopRightRadius: 75,
  },
});
