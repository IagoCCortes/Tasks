import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GRAY_LIGHT_1, PRIMARY_PURPLE, GRAY_LIGHT_4} from 'styles/colors';
import {Switch} from 'react-native-gesture-handler';

const FilterSwitch = ({choices, value, toggleSwitch}) => {
  return (
    <View style={styles.switchOptions}>
      <Text style={styles.textStatus}>{choices[0]}</Text>
      <Switch
        trackColor={{false: GRAY_LIGHT_4, true: PRIMARY_PURPLE}}
        thumbColor={GRAY_LIGHT_1}
        ios_backgroundColor={GRAY_LIGHT_1}
        onValueChange={() => toggleSwitch('status')}
        value={value}
      />
      <Text style={styles.textStatus}>{choices[1]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchOptions: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStatus: {
    color: GRAY_LIGHT_1,
    fontSize: 15,
  },
});

export default FilterSwitch;
