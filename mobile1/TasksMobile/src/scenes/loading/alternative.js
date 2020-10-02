import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {Animated, StyleSheet} from 'react-native';

const AlternativeLoading = ({active}) => {
  const animation = useRef(null);
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (active) {
      Animated.timing(fadeIn, {toValue: 1, duration: 500, useNativeDriver: true}).start();
      animation.current.play();
    } else {
      Animated.timing(fadeIn, {toValue: 0}).start();

      animation.loop = false;
    }
  }, [active, fadeIn]);

  return (
    <Animated.View style={{...styles.container, opacity: fadeIn}}>
      <LottieView ref={animation} style={styles.container} source={require('../../assets/lottie-loading-fluid.json')} />
    </Animated.View>
  );
};

export default AlternativeLoading;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
});
