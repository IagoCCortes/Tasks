import React, {useContext, useEffect, useState} from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Context as TaskContext} from 'services/context/TaskContext';
import {Context as Auth} from 'services/context/AuthContext';
import Loading from 'components/organisms/Loading';
import TaskCard from './TaskCard';
import {Container} from 'components/styledComponents';
import CircleButton from '../../components/atoms/buttons/CircleButton';
import * as mixins from 'styles/mixins';

export default ({navigation}) => {
  const {getFiltered, state: taskState} = useContext(TaskContext);
  const {signout} = useContext(Auth);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // signout();

    const unsubscribe = navigation.addListener('focus', async () => {
      const response = await getFiltered();
      setTasks(response);
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {taskState.loading && <Loading active={true} />}
      <Container>
        <Container flex={5}>
          <ImageBackground
            source={require('assets/images/background16.jpg')}
            style={{flex: 1, height: '100%', width: mixins.WINDOW_WIDTH}}>
            <Text>Hi</Text>
          </ImageBackground>
        </Container>
        <Container flex={4} justifyContent="space-around">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} bounces contentContainerStyle={styles.scroll}>
            {tasks.length > 0 ? tasks.map((task, id) => <TaskCard key={id} task={task} />) : <Text>No data</Text>}
          </ScrollView>
        </Container>
        <CircleButton goesTo="New" />
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
