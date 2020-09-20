import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Loading = () => <Image style={styles.image} source={require('assets/images/loading.jpg')} />;

export default Loading;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
});
