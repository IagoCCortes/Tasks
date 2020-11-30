import React from 'react';
import NewTask from 'scenes/NewTask';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import TaskDetail from 'scenes/TaskDetail';
import Icon from 'react-native-vector-icons/Ionicons';
import * as colors from 'styles/colors';
import Home from '../scenes/home';
import Header from './Header';
Icon.loadFont();

const StackTasks = createStackNavigator();

const AppNavigator = () => (
  <StackTasks.Navigator
    screenOptions={{
      title: '',
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      headerLeft: null,
      headerRight: null,
      headerTintColor: colors.WHITE,
      headerTitle: (props) => <Header props={props} tintColor={props.tintColor} toggleProfile={() => null} />,
      headerTransparent: true,
    }}
    headerMode="float">
    <StackTasks.Screen name="Home" component={Home} />
    <StackTasks.Screen name="Task" component={TaskDetail} />
    <StackTasks.Screen name="New" component={NewTask} />
  </StackTasks.Navigator>
);

export default AppNavigator;
