import React, {useState, useContext, useEffect} from 'react';
import {View, FlatList, Animated, StyleSheet} from 'react-native';
import ListItem from 'components/molecules/ListItem';
import {BLACK, GRAY_LIGHT_3, GRAY_LIGHT_4, PRIMARY_DARK, PRIMARY_MEDIUM} from 'styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Filters from './Filters';
import RegularHeader from './RegularHeader';
import SearchHeader from './SearchHeader';
import {Context as TaskContext} from 'services/context/TaskContext';
Icon.loadFont();

const TasksScreen = ({navigation}: {navigation: any}) => {
  const {getFiltered, state: taskState} = useContext(TaskContext);
  const searchFieldAnimationValue = useState(new Animated.Value(500))[0];
  const filtersAnimationValue = useState(new Animated.Value(-1000))[0];
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadtasks() {
      if (taskState?.tasks === undefined) await getFiltered!();
      setLoading(false);
    }

    setLoading(true);
    loadtasks();
  }, []);

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
      {!loading && (
        <>
          <View style={search ? {...styles.header, ...styles.headerSearch} : styles.header}>
            {search ? (
              <Animated.View
                style={{
                  ...styles.header,
                  ...styles.headerSearch,
                  transform: [{translateX: searchFieldAnimationValue}],
                }}>
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
          {console.log(taskState?.tasks)}
          <FlatList
            style={styles.body}
            contentContainerStyle={{alignItems: 'stretch'}}
            data={taskState?.tasks}
            keyExtractor={task => task._id}
            renderItem={({item}) => <ListItem data={item} navigation={navigation} />}
          />
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: GRAY_LIGHT_3,
  },
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
