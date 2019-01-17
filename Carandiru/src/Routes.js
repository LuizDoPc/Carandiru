import React from 'react';
import { View, Image } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import Principal from './components/Principal';
import RH from './components/RH';

import CustomTabBar from './components/CustomTabBar';

import logo from './img/logo.png';

const AppLogo = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 65, flex: 1 }}>
      <Image source={logo} style={{ width: 84, height: 84 }} />
    </View>
  );
};

export default props => (
  <Router navigationBarStyle={{ backgroundColor: '#E20000' }} titleStyle={{ color: '#fff' }}>
    <Scene key="root" renderTitle={() => <AppLogo />} hideNavBar>
      <Scene key="login" component={Login} title="Login" />
      <Scene key="inside-routes" tabs tabBarPosition="bottom" tabBarComponent={() => <CustomTabBar />}>
        <Scene key="principal" component={Principal} title="Principal" hideNavBar={false} />
        <Scene key="rh" component={RH} title="RH" hideNavBar={false} />
      </Scene>
    </Scene>
  </Router>
);
