import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppNavigator from './AppNavigator';
import {navigationRef} from '../RootNavigation';
import {Context as AuthContext} from 'services/context/AuthContext';
import AuthNavigator from './AuthNavigator';
import Message from '../components/molecules/Message';

function App() {
  const {state} = useContext(AuthContext);

  return (
    <NavigationContainer ref={navigationRef}>
      <Message />
      {state?.token !== null && !state?.animating ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
