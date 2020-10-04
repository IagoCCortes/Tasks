import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppNavigator from './AppNavigator';
import {navigationRef} from '../RootNavigation';
import {Context as AuthContext} from 'services/context/AuthContext';
import AuthNavigator from './AuthNavigator';

function App() {
  const {state} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>{state?.token ? <AppNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
}

export default App;
