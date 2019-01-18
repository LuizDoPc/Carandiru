import React, { Component } from 'react';
import { TextInput, Text, ScrollView, Picker, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { novoGasto, modificaLastNovoGasto, modificaRefNovoGasto, modificaValorNovoGasto } from '../actions/AppActions';

class NovoGasto extends Component {
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
          value={this.props.valorNovoGasto}
          style={{
            fontSize: 20,
            height: 45,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5
          }}
          placeholder="R$"
          placeholderTextColor="#000000"
          keyboardType="numeric"
          onChangeText={texto => this.props.modificaValorNovoGasto(texto)}
        />
        <Label>Referente a</Label>
        <TextInput
          value={this.props.refNovoGasto}
          style={{
            fontSize: 20,
            height: 45,
            borderBottomColor: 'black',
            borderBottomWidth: 0.5
          }}
          placeholder="..."
          placeholderTextColor="#000000"
          onChangeText={texto => this.props.modificaRefNovoGasto(texto)}
        />
        <Label>Última parcela em</Label>
        <Picker
          selectedValue={this.props.lastNovoGasto}
          style={{
            height: 45
          }}
          onValueChange={(texto, index) => this.props.modificaLastNovoGasto(texto)}
        >
          <Picker.Item label="Janeiro" value="Janeiro" />
          <Picker.Item label="Fevereiro" value="Fevereiro" />
          <Picker.Item label="Marco" value="Marco" />
          <Picker.Item label="Abril" value="Abril" />
          <Picker.Item label="Maio" value="Maio" />
          <Picker.Item label="Junho" value="Junho" />
          <Picker.Item label="Julho" value="Julho" />
          <Picker.Item label="Agosto" value="Agosto" />
          <Picker.Item label="Setembro" value="Setembro" />
          <Picker.Item label="Outubro" value="Outubro" />
          <Picker.Item label="Novembro" value="Novembro" />
          <Picker.Item label="Dezembro" value="Dezembro" />
        </Picker>
        <TouchableOpacity
          onPress={() =>
            this.props.novoGasto(this.props.valorNovoGasto, this.props.refNovoGasto, this.props.lastNovoGasto)
          }
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
  valorNovoGasto: state.AppReducer.valorNovoGasto,
  refNovoGasto: state.AppReducer.refNovoGasto,
  lastNovoGasto: state.AppReducer.lastNovoGasto
});

export default connect(
  mapStateToProps,
  { novoGasto, modificaLastNovoGasto, modificaRefNovoGasto, modificaValorNovoGasto }
)(NovoGasto);
