import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import AuthenticateScreen2 from '../scenes/authenticate/index2';
import Signin from '../scenes/authenticate/Signin';
import Signup from '../scenes/authenticate/Signup';
import Forms from '../scenes/authenticate/Forms';

const Stack = createStackNavigator();

// const config = {
//   animation: 'spring',
//   config: {
//     stiffness: 1000,
//     damping: 50,
//     mass: 3,
//     overshootClamping: false,
//     restDisplacementThreshold: 0.01,
//     restSpeedThreshold: 0.01,
//   },
// };

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // transitionSpec: {
        //   open: config,
        //   close: config,
        // },
      }}
      headerMode="float">
      <Stack.Screen name="Initial" component={AuthenticateScreen2} options={{headerShown: false}} />
      <Stack.Screen name="Sign In" component={Forms} />
      <Stack.Screen name="Sign Up" component={Signup} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
