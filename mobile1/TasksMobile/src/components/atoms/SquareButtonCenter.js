import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {scaleSize} from 'styles/mixins';
import {BLACK, WHITE, GRAY_MEDIUM_1} from 'styles/colors';
import LinearGradient from 'react-native-linear-gradient';

function SquareButtonCenter({bgColor, bColor = GRAY_MEDIUM_1, disabled = false, tColor = WHITE, text, callback}) {
  return (
    <>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => callback()}
        style={{...styles.button, backgroundColor: bgColor}}>
        <Text style={{...styles.text, color: tColor}}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 5,
    display: 'flex',
    elevation: 5,
    height: scaleSize(50),
    justifyContent: 'center',
    width: scaleSize(300),
  },
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

export default SquareButtonCenter;
