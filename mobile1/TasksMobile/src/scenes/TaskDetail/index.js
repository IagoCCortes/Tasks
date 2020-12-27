import React from 'react';
import {StyleSheet, Text} from 'react-native';

const TaskDetail = ({route}) => {
  return <Text>{JSON.stringify(route.params)}</Text>;
};

export default TaskDetail;
