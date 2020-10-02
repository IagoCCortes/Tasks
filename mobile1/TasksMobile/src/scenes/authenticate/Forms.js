import React from 'react';
import {StyleSheet, View} from 'react-native';
import Signin2 from './Signin2';

export default () => {
  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Signin2 />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    // backgroundColor: GRAY_LIGHT_1,
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    width: '95%',
  },
});
