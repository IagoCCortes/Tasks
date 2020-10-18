import React from 'react';
import {StatusBar} from 'react-native';
import Navigator from './navigations';
import {Provider as AuthProvider} from './services/context/AuthContext';
import {Provider as CommonDataProvider} from './services/context/CommonDataContext';
import {Provider as TaskProvider} from './services/context/TaskContext';
import {PRIMARY_PURPLE} from './styles/colors';
import './utils/ignoreSCWarnings';

const App = () => (
  <CommonDataProvider>
    <TaskProvider>
      <AuthProvider>
        <Navigator />
        <StatusBar backgroundColor={PRIMARY_PURPLE} />
      </AuthProvider>
    </TaskProvider>
  </CommonDataProvider>
);

export default App;
