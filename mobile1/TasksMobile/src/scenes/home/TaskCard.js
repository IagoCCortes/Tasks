import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PRIMARY_PINK} from '../../styles/colors';
import {boxShadow, WINDOW_HEIGHT, WINDOW_WIDTH} from '../../styles/mixins';

export default ({task}) => {
  return (
    <>
      <View style={styles.container}>
        <Text>{task.name}</Text>
        <Text>{task.types}</Text>
        <Text>{task.description}</Text>
        <Text>{task.frequency}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: PRIMARY_PINK,
    ...boxShadow(),
    borderRadius: 15,
    height: 0.35 * WINDOW_HEIGHT,
    justifyContent: 'center',
    width: 0.45 * WINDOW_WIDTH,
  },
  section: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
