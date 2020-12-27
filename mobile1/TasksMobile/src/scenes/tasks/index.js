import React, {useState, useContext, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import * as colors from 'styles/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Filters from './Filters';
import RegularHeader from './RegularHeader';
import SearchHeader from './SearchHeader';
import {Context as TaskContext} from 'services/context/TaskContext';
import {Container, HeaderSpacing} from '../../components/styledComponents';
import * as mixins from 'styles/mixins';
import TaskCard from './TaskCard';
import Loading from 'components/organisms/Loading';
import {StyledFlatlist} from './Styles';
Icon.loadFont();

export default ({navigation}) => {
  const {getFiltered, state: taskState} = useContext(TaskContext);
  // const searchFieldAnimationValue = useState(new Animated.Value(500))[0];
  // const filtersAnimationValue = useState(new Animated.Value(-1000))[0];
  // const [search, setSearch] = useState(false);
  // const [filter, setFilter] = useState(false);
  const [tasks, setTasks] = useState([]);

  const y = new Animated.Value(0);
  const onScroll = Animated.event([{nativeEvent: {contentOffset: {y}}}], {useNativeDriver: true});

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const response = await getFiltered();
      setTasks(response);
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const animateSearch = () => {
  //   !search ? setSearch(true) : null;
  //   Animated.timing(searchFieldAnimationValue, {
  //     toValue: !search ? 0 : 500,
  //     duration: 150,
  //     useNativeDriver: true,
  //   }).start(() => (search ? setSearch(false) : null));
  // };

  // const animateFilters = () => {
  //   !filter ? setFilter(true) : null;
  //   Animated.timing(filtersAnimationValue, {
  //     toValue: !filter ? 0 : -1000,
  //     duration: 150,
  //     useNativeDriver: true,
  //   }).start(() => (filter ? setFilter(false) : null));
  // };

  return (
    <>
      <HeaderSpacing />
      {taskState.loading && <Loading active={true} />}
      <Container bgColor={colors.WHITE}>
        {/* <View style={{...styles.header, ...(search ? styles.headerSearch : {})}}>
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
      )} */}
        <StyledFlatlist
          as={Animated.FlatList}
          scrollEventThrottle={16}
          data={tasks}
          keyExtractor={(task) => task._id}
          renderItem={({item, index}) => <TaskCard task={item} y={y} index={index} />}
          onScroll={onScroll}
        />
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  filters: {
    alignItems: 'center',
    backgroundColor: colors.SECONDARY_PURPLE,
    height: '100%',
    position: 'absolute',
    top: 70,
    width: '75%',
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    backgroundColor: colors.PRIMARY_PURPLE,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
  },
  headerSearch: {
    justifyContent: 'center',
  },
});
