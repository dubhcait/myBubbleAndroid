import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Touchable({
  color,
  backgroundColor,
  marginTop,
  onPress,
  children,
  borderColor,
}) {
  const {colors} = useTheme();
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
    marginHorizontal: 40,
    elevation: 1.8,
    zIndex: 6,
  },
});
