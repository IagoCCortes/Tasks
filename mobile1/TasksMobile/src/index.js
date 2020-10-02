import React from 'react';
import Navigator from './navigations';
import {Provider as AuthProvider} from './services/context/AuthContext';
import {Provider as CommonDataProvider} from './services/context/CommonDataContext';
import {Provider as TaskProvider} from './services/context/TaskContext';

const App = () => (
  <CommonDataProvider>
    <TaskProvider>
      <AuthProvider>
        <Navigator />
      </AuthProvider>
    </TaskProvider>
  </CommonDataProvider>
);

export default App;
