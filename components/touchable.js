import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default function Touchable({
  color,
  backgroundColor,
  marginTop,
  onPress,
  children,
  borderColor,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonStyle,
        {
          backgroundColor: backgroundColor,
          color: color,
          borderColor: borderColor,
          marginTop: marginTop,
        },
      ]}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 20,
    borderWidth: 1.4,
    marginHorizontal: 60,
    elevation: 1.8,
    zIndex: 6,
    width: 300,
    height: 47,
  },
});
