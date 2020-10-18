import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TasksScreen from 'scenes/tasks';
import NewTask from 'scenes/NewTask';
import Profile from 'scenes/Profile';
import {createStackNavigator} from '@react-navigation/stack';
import TaskDetail from 'scenes/TaskDetail';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {PRIMARY_PURPLE, GRAY_LIGHT_1, GRAY_MEDIUM_1} from 'styles/colors';
import Home from '../scenes/home';
Icon.loadFont();

const Tab = createBottomTabNavigator();
const StackTasks = createStackNavigator();

const TasksNavigator = () => (
  <StackTasks.Navigator>
    <StackTasks.Screen name="Tasks" component={TasksScreen} options={{headerShown: false}} />
    <StackTasks.Screen name="Task" component={TaskDetail} />
  </StackTasks.Navigator>
);

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if (route.name === 'Tasks') {
            iconName = 'list';
          } else if (route.name === 'New') {
            iconName = 'add';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: GRAY_LIGHT_1,
        inactiveTintColor: GRAY_MEDIUM_1,
        tabStyle: {backgroundColor: PRIMARY_PURPLE, zIndex: 2},
      }}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Tasks" component={TasksNavigator} /> */}
      <Tab.Screen name="New" component={NewTask} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
