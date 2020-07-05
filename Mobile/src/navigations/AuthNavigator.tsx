import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthenticateScreen from 'scenes/authenticate';
import TasksScreen from 'scenes/tasks';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={TasksScreen} options={{headerShown: false}} />
      <Stack.Screen name="Settings" component={AuthenticateScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
