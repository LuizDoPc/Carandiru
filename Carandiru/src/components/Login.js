import React, { Component } from 'react';
import { View, Text, TextInput, Button, Image, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AuthActions';

import logo from '../img/logo.png';

class Login extends Component {
  _autenticarUsuario() {
    const { email, senha } = this.props;
    this.props.autenticarUsuario({ email, senha });
  }

  renderBtnAcessar() {
    if (this.props.loadingLogin) {
      return <ActivityIndicator size="large" color="#E20000" />;
    }
    return <Button title="Acessar" color="#E20000" onPress={() => this._autenticarUsuario()} />;
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 2 }}>
          <Image source={logo} style={{ width: 350, height: 300 }} />
        </View>
        <View style={{ flex: 2, padding: 20 }}>
          <TextInput
            value={this.props.email}
            style={{
              fontSize: 20,
              height: 45,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5
            }}
            placeholder="E-mail"
            placeholderTextColor="#000000"
            onChangeText={texto => this.props.modificaEmail(texto)}
          />
          <TextInput
            value={this.props.senha}
            style={{
              fontSize: 20,
              height: 45,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5
            }}
            placeholder="Senha"
            placeholderTextColor="#000000"
            onChangeText={texto => this.props.modificaSenha(texto)}
            secureTextEntry
          />
          <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroLogin}</Text>
          <View style={{}}>{this.renderBtnAcessar()}</View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.AuthReducer.email,
  senha: state.AuthReducer.senha,
  erroLogin: state.AuthReducer.erroLogin,
  loadingLogin: state.AuthReducer.loadingLogin
});

export default connect(
  mapStateToProps,
  { modificaEmail, modificaSenha, autenticarUsuario }
)(Login);
