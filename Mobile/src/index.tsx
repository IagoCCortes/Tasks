// import React from 'react';
// import AuthenticateScreen from 'scenes/authenticate';
// import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import Navigator from '_navigations';
// import Navigator from './navigations';

// const App = () => <Navigator />;
// const App = () => <AuthenticateScreen />;

// export default App;

import React from 'react';
import Navigator from './navigations';
import {Provider as AuthProvider} from './services/context/AuthContext';

const App = () => (
  <AuthProvider>
    <Navigator />
  </AuthProvider>
);

export default App;
