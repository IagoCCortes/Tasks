import React from 'react';
import LottieView from 'lottie-react-native';
import {StyleSheet} from 'react-native';

export default ({onFinish}) => (
  <LottieView
    style={styles.container}
    source={require('../../../assets/fail.json')}
    loop={false}
    duration={1000}
    autoPlay={true}
    onAnimationFinish={() => onFinish()}
  />
);

const styles = StyleSheet.create({
  container: {
    elevation: 20,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 5,
  },
});
