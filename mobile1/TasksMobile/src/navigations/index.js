import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthenticateScreen from 'scenes/authenticate';
import 'react-native-gesture-handler';
import AppNavigator from './AppNavigator';
import {navigationRef} from '../RootNavigation';
import {Context as AuthContext} from 'services/context/AuthContext';
import AuthenticateScreen2 from '../scenes/authenticate/index2';
import AuthNavigator from './AuthNavigator';

function App() {
  const {state} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>
      {state?.token ? <AppNavigator /> : <AuthNavigator />}
      {/* {state?.token ? <AppNavigator /> : <AuthenticateScreen />} */}
    </NavigationContainer>
  );
}

export default App;
