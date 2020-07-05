import React from 'react';
import {StyleSheet, View, Text as TextField} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GRAY_LIGHT_1, GRAY_LIGHT_4} from 'styles/colors';
import {Text} from 'react-native-svg';
Icon.loadFont();

const TypeChoice = ({
  name,
  type,
  selected,
  toggleType,
  icon,
}: {
  name: string;
  type: string;
  selected: boolean;
  toggleType: Function;
  icon: string;
}) => {
  return (
    <View style={{...styles.typeContainer, borderRightWidth: selected ? 3 : 0}}>
      <Text onPress={() => toggleType(type)}>
        <Icon name={icon} size={40} style={{...styles.typeIcon, color: selected ? GRAY_LIGHT_1 : GRAY_LIGHT_4}} />
      </Text>
      <TextField style={{...styles.typeIcon, color: selected ? GRAY_LIGHT_1 : GRAY_LIGHT_4}}>{name}</TextField>
    </View>
  );
};

const styles = StyleSheet.create({
  typeContainer: {
    flex: 1,
    width: '99%',
    borderColor: '#fff',
    borderStyle: 'solid',
    borderRadius: 1,
    justifyContent: 'center',
  },
  typeIcon: {textAlign: 'center'},
});

export default TypeChoice;
