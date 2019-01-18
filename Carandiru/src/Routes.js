import React from 'react';
import { View, Image } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Login from './components/Login';
import Principal from './components/Principal';
import RH from './components/RH';
import Money from './components/Money';
import NovoGasto from './components/NovoGasto';
import NovaEntrada from './components/NovaEntrada';
import ContasCasa from './components/ContasCasa';
import Balanco from './components/Balanco';

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
        <Scene key="money" component={Money} title="Money" hideNavBar={false} />
        <Scene key="novogasto" component={NovoGasto} title="Novo gasto" hideNavBar={false} />
        <Scene key="novaentrada" component={NovaEntrada} title="Nova entrada" hideNavBar={false} />
        <Scene key="contascasa" component={ContasCasa} title="Contas casa" hideNavBar={false} />
        <Scene key="balanco" component={Balanco} title="Balanco" hideNavBar={false} />
      </Scene>
    </Scene>
  </Router>
);
