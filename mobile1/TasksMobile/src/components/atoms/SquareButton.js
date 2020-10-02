import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {scaleSize} from 'styles/mixins';
import {BLACK, WHITE, GRAY_MEDIUM_1} from 'styles/colors';
import LinearGradient from 'react-native-linear-gradient';

function SquareButton({bgColors, bColor = GRAY_MEDIUM_1, disabled = false, tColor = WHITE, text, callback}) {
  return (
    <>
      <TouchableOpacity disabled={disabled} onPress={() => callback()}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          colors={[...bgColors]}
          style={{...styles.button}}>
          <Text style={{...styles.text, color: tColor}}>{text}</Text>
        </LinearGradient>
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
    alignSelf: 'flex-end',
    fontSize: 17,
    marginRight: 30,
  },
});

export default SquareButton;
