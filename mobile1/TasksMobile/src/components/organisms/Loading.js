import React, {useEffect, useRef} from 'react';
import LottieView from 'lottie-react-native';
import {Animated, StyleSheet} from 'react-native';

export default ({active}) => {
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
      <LottieView ref={animation} style={styles.container} source={require('../../assets/lottie-loading.json')} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    elevation: 10,
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 2,
  },
});
