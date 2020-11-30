import React from 'react';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';
import AuthenticateScreen from '../scenes/authenticate/index';
import Forms from '../scenes/authenticate/Forms';
import {SECONDARY_PURPLE, WHITE} from '../styles/colors';

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
        title: '',
        headerTransparent: true,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        // transitionSpec: {
        //   open: config,
        //   close: config,
        // },
        headerTintColor: WHITE,
        tintColor: WHITE,
      }}
      headerMode="float">
      <Stack.Screen
        name="Initial"
        component={AuthenticateScreen}
        options={{
          headerShown: false,
          // animationTypeForReplace: state.isSignout ? 'pop' : 'push',
        }}
      />
      <Stack.Screen name="Sign In" component={Forms} />
      <Stack.Screen name="Sign Up" component={Forms} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
