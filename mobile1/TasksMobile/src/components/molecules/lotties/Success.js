import React, {useEffect, useRef, useState} from 'react';
import LottieView from 'lottie-react-native';
import {Animated, Easing, StyleSheet} from 'react-native';

export default ({onFinish}) => {
  // const animation = useRef(null);
  // const progress = useState(new Animated.Value(0))[0];

  // useEffect(() => {
  //   Animated.timing(progress, {
  //     duration: 1000,
  //     toValue: 1,
  //     useNativeDriver: true,
  //     easing: Easing.linear,
  //   }).start(() => active(false));
  // }, [active, progress]);

  return (
    <LottieView
      // progress={progress}
      // ref={animation}
      style={styles.container}
      source={require('../../../assets/success.json')}
      loop={false}
      duration={1000}
      autoPlay={true}
      onAnimationFinish={() => onFinish()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    elevation: 6,
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 5,
  },
});
