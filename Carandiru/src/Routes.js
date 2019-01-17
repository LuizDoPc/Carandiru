import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';

export default props => (
  <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: '#fff' }}>
    <Scene key="login" component={Login} title="Login" hideNavBar={true} />
  </Router>
);
