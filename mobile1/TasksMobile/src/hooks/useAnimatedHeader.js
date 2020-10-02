import {useState, useEffect} from 'react';
import {Animated} from 'react-native';

export default function useAnimatedHeader(animate = undefined, value = -20) {
  const headerAnimation = useState(new Animated.Value(0))[0];

  useEffect(() => {
    function animateHeader(open = true) {
      Animated.spring(headerAnimation, {
        toValue: open ? value : 0,
        useNativeDriver: true,
      }).start();
    }

    if (animate !== undefined) {
      animateHeader(animate);
    }
  }, [animate]);

  return headerAnimation;
}
