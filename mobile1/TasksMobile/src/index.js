import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import Navigator from './navigations';
import {Provider as AuthProvider} from './services/context/AuthContext';
import {Provider as CommonDataProvider} from './services/context/CommonDataContext';
import {Provider as TaskProvider} from './services/context/TaskContext';
import {Provider as MessageProvider} from './services/context/MessageContext';
import {PRIMARY_PURPLE} from './styles/colors';
import './utils/ignoreSCWarnings';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <MessageProvider>
      <CommonDataProvider>
        <TaskProvider>
          <AuthProvider>
            <Navigator />
            <StatusBar backgroundColor={PRIMARY_PURPLE} />
          </AuthProvider>
        </TaskProvider>
      </CommonDataProvider>
    </MessageProvider>
  );
};

export default App;
