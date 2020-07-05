import React, {useState} from 'react';
import {View, FlatList, Animated, StyleSheet} from 'react-native';
import ListItem from 'components/molecules/ListItem';
import {PRIMARY_DARK, PRIMARY_MEDIUM} from 'styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import listData from 'utils/listData';
import Filters from './Filters';
import RegularHeader from './RegularHeader';
import SearchHeader from './SearchHeader';
Icon.loadFont();

const TasksScreen = ({navigation}: {navigation: any}) => {
  const searchFieldAnimationValue = useState(new Animated.Value(500))[0];
  const filtersAnimationValue = useState(new Animated.Value(-1000))[0];
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);

  const animateSearch = () => {
    !search ? setSearch(true) : null;
    Animated.timing(searchFieldAnimationValue, {
      toValue: !search ? 0 : 500,
      duration: 150,
      useNativeDriver: true,
    }).start(() => (search ? setSearch(false) : null));
  };

  const animateFilters = (): void => {
    !filter ? setFilter(true) : null;
    Animated.timing(filtersAnimationValue, {
      toValue: !filter ? 0 : -1000,
      duration: 150,
      useNativeDriver: true,
    }).start(() => (filter ? setFilter(false) : null));
  };

  return (
    <>
      <View style={search ? {...styles.header, ...styles.headerSearch} : styles.header}>
        {search ? (
          <Animated.View
            style={{...styles.header, ...styles.headerSearch, transform: [{translateX: searchFieldAnimationValue}]}}>
            <RegularHeader animateSearch={animateSearch} />
          </Animated.View>
        ) : (
          <SearchHeader animateFilters={animateFilters} animateSearch={animateSearch} filter={filter} />
        )}
      </View>
      {filter && (
        <Animated.View style={{...styles.filters, transform: [{translateX: filtersAnimationValue}]}}>
          <Filters />
        </Animated.View>
      )}
      <FlatList
        data={listData}
        renderItem={({item}) => <ListItem key={item.key} text={item.text} navigation={navigation} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  filters: {
    alignItems: 'center',
    backgroundColor: PRIMARY_MEDIUM,
    height: '100%',
    position: 'absolute',
    top: 70,
    width: '75%',
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    backgroundColor: PRIMARY_DARK,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
  },
  headerSearch: {
    justifyContent: 'center',
  },
});

export default TasksScreen;
