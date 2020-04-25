import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Card({children, style}) {
  return <View style={{...styles.row, ...style}}>{children}</View>;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
});
