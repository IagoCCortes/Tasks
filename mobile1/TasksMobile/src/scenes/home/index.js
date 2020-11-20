import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Context as TaskContext} from 'services/context/TaskContext';
import SquareButtonCenter from '../../components/atoms/buttons/SquareButtonCenter';
import {PRIMARY_PURPLE} from 'styles/colors';
import {scaleSize, WINDOW_WIDTH} from 'styles/mixins';
import AlternativeLoading from '../loading';
import TaskCard from './TaskCard';
import {Container, Flex} from '../../components/styledComponents';

export default ({navigation}) => {
  const {getFiltered, state: taskState} = useContext(TaskContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadtasks() {
      await getFiltered();
      setLoading(false);
    }

    const unsubscribe = navigation.addListener('focus', () => {
      setLoading(true);
      loadtasks();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <AlternativeLoading active={true} />;
  }
  return (
    <>
      <Container>
        <Container flex={5} />
        <Container flex={4} justifyContent="space-around">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces contentContainerStyle={styles.scroll}>
            {taskState?.tasks.length > 0 ? (
              taskState?.tasks.map((task, id) => <TaskCard key={id} task={task} />)
            ) : (
              <Text>No data</Text>
            )}
          </ScrollView>
        </Container>
        <Flex>
          <SquareButtonCenter
            bgColor={PRIMARY_PURPLE}
            text="New task"
            callback={() => navigation.navigate('New')}
            width={WINDOW_WIDTH - scaleSize(14)}
          />
        </Flex>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    alignItems: 'center',
    flexGrow: 1,
  },
});
