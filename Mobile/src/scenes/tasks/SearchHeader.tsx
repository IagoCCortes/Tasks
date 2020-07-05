import React from 'react';
import {Text} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text as TextField, StyleSheet} from 'react-native';
import {PRIMARY_LIGHT, GRAY_LIGHT_1} from 'styles/colors';

const SearchHeader = ({
  animateFilters,
  animateSearch,
  filter,
}: {
  animateFilters: Function;
  animateSearch: Function;
  filter: boolean;
}) => {
  return (
    <>
      <Text
        onPress={() => {
          animateFilters();
        }}>
        <Icon
          name="filter-list"
          size={35}
          style={{...styles.iconOption, color: filter ? PRIMARY_LIGHT : GRAY_LIGHT_1}}
        />
      </Text>
      <TextField style={styles.headerText}>Tasks</TextField>
      <Text
        onPress={() => {
          animateSearch();
        }}>
        <Icon name="search" size={35} style={styles.iconOption} />
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: GRAY_LIGHT_1,
    fontSize: 23,
  },
  iconOption: {
    alignSelf: 'center',
    color: GRAY_LIGHT_1,
    padding: 10,
  },
});

export default SearchHeader;
