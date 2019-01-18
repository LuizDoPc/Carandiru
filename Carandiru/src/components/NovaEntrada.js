import React, { Component } from 'react';
import { TextInput, Text, ScrollView, Picker, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { novaEntrada, modificaRefNovaEntrada, modificaValorNovaEntrada } from '../actions/AppActions';

class NovaEntrada extends Component {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          padding: 40
        }}
      >
        <Label>Valor</Label>
        <TextInput
          value={this.props.valorNovaEntrada}
          style={{
            fontSize: 20,
            height: 45,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5
          }}
          placeholder="R$"
          placeholderTextColor="#000000"
          keyboardType="numeric"
          onChangeText={texto => this.props.modificaValorNovaEntrada(texto)}
        />
        <Label>Referente a</Label>
        <TextInput
          value={this.props.refNovaEntrada}
          style={{
            fontSize: 20,
            height: 45,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5
          }}
          placeholder="..."
          placeholderTextColor="#000000"
          onChangeText={texto => this.props.modificaRefNovaEntrada(texto)}
        />
        <TouchableOpacity
          onPress={() => this.props.novaEntrada(this.props.valorNovaEntrada, this.props.refNovaEntrada)}
          style={{ backgroundColor: '#E20000', alignItems: 'center', justifyContent: 'center', height: 45 }}
        >
          <Text style={{ fontSize: 20, color: 'white' }}>Cadastrar</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const Label = styled.Text`
  font-size: 20;
  color: black;
`;

const mapStateToProps = state => ({
  valorNovaEntrada: state.AppReducer.valorNovaEntrada,
  refNovaEntrada: state.AppReducer.refNovaEntrada
});

export default connect(
  mapStateToProps,
  { novaEntrada, modificaRefNovaEntrada, modificaValorNovaEntrada }
)(NovaEntrada);
