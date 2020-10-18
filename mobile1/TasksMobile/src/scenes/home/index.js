import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Context as TaskContext} from 'services/context/TaskContext';
import AlternativeLoading from '../loading';
import TaskCard from './TaskCard';

export default () => {
  const {getFiltered, state: taskState} = useContext(TaskContext);
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

  if (loading) return <AlternativeLoading active={true} />;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.container}></View>
        <View style={styles.container}>
          <ScrollView horizontal contentContainerStyle={styles.container}>
            {taskState?.tasks.length > 0 ? (
              taskState?.tasks.map((task, id) => <TaskCard key={id} task={task} />)
            ) : (
              <Text>asas</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  section: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
