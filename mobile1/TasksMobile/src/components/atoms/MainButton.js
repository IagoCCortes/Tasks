import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {scaleSize} from 'styles/mixins';
import {BLACK, WHITE, GRAY_MEDIUM_1} from 'styles/colors';

function MainButton({
  bgColor = BLACK,
  bColor = GRAY_MEDIUM_1,
  disabled = false,
  tColor = WHITE,
  text,
  callback,
  margin,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{...styles.button, backgroundColor: bgColor, borderColor: bColor, ...margin()}}
      onPress={() => callback()}>
      <Text style={{...styles.text, color: tColor}}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    display: 'flex',
    height: scaleSize(50),
    justifyContent: 'center',
    width: scaleSize(300),
  },
  text: {
    fontSize: 17,
  },
});

export default MainButton;
