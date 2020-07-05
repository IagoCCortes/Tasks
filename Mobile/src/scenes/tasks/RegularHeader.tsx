import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import {GRAY_LIGHT_3, BLACK} from 'styles/colors';

const RegularHeader = ({animateSearch}: {animateSearch: Function}) => {
  return (
    <>
      <Text onPress={() => console.log('todo')}>
        <Icon name="search" size={35} style={{...styles.searchIcons, ...styles.leftSearchIcon}} />
      </Text>
      <TextInput style={styles.searchBar} placeholder="SEARCH" autoCapitalize="none" placeholderTextColor={BLACK} />
      <Text onPress={() => animateSearch()}>
        <Icon name="clear" size={35} style={{...styles.searchIcons, ...styles.rightSearchIcon}} />
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  leftSearchIcon: {
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  rightSearchIcon: {
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  searchBar: {
    backgroundColor: GRAY_LIGHT_3,
    flexBasis: '60%',
    fontSize: 18,
    height: 50,
  },
  searchIcons: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    backgroundColor: GRAY_LIGHT_3,
    height: 50,
  },
});

export default RegularHeader;
