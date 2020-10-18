import React, {useState, useContext, useEffect} from 'react';
import {View, FlatList, Animated, StyleSheet} from 'react-native';
import ListItem from 'components/molecules/ListItem';
import {GRAY_LIGHT_3, PRIMARY_PURPLE, SECONDARY_PURPLE} from 'styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Filters from './Filters';
import RegularHeader from './RegularHeader';
import SearchHeader from './SearchHeader';
import {Context as TaskContext} from 'services/context/TaskContext';
import AlternativeLoading from '../loading';
Icon.loadFont();

const TasksScreen = ({navigation}) => {
  const {getFiltered, state: taskState} = useContext(TaskContext);
  const searchFieldAnimationValue = useState(new Animated.Value(500))[0];
  const filtersAnimationValue = useState(new Animated.Value(-1000))[0];
  const [search, setSearch] = useState(false);
  const [filter, setFilter] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadtasks() {
      if (taskState?.tasks === undefined) {
        await getFiltered();
      }
      setLoading(false);
    }

    setLoading(true);
    loadtasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateSearch = () => {
    !search ? setSearch(true) : null;
    Animated.timing(searchFieldAnimationValue, {
      toValue: !search ? 0 : 500,
      duration: 150,
      useNativeDriver: true,
    }).start(() => (search ? setSearch(false) : null));
  };

  const animateFilters = () => {
    !filter ? setFilter(true) : null;
    Animated.timing(filtersAnimationValue, {
      toValue: !filter ? 0 : -1000,
      duration: 150,
      useNativeDriver: true,
    }).start(() => (filter ? setFilter(false) : null));
  };

  if (loading) return <AlternativeLoading active={true} />;

  return (
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
      <FlatList
        style={styles.body}
        contentContainerStyle={{alignItems: 'stretch'}}
        data={taskState?.tasks}
        keyExtractor={(task) => task._id}
        renderItem={({item}) => <ListItem data={item} navigation={navigation} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: GRAY_LIGHT_3,
  },
  filters: {
    alignItems: 'center',
    backgroundColor: SECONDARY_PURPLE,
    height: '100%',
    position: 'absolute',
    top: 70,
    width: '75%',
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    backgroundColor: PRIMARY_PURPLE,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
  },
  headerSearch: {
    justifyContent: 'center',
  },
});

export default TasksScreen;
