import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import { connect } from 'react-redux';

import gavel from '../img/gavel.png';

import { modificaPagarCasa, pagarCasa } from '../actions/AppActions';

class Principal extends Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20, alignItems: 'center', justifyContent: 'space-around' }}>
        <Image source={{ uri: this.props.foto }} style={{ width: 200, height: 200, borderRadius: 100 }} />

        <View
          style={{
            borderColor: '#E20000',
            borderWidth: 1,
            width: 200,
            height: 200,
            alignItems: 'center',
            justifyContent: 'space-around'
          }}
        >
          <Text style={{ fontSize: 60 }}>{this.props.nome}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={gavel} style={{ width: 50, height: 50 }} />
            <Text style={{ fontSize: 50, marginLeft: 20 }}>{this.props.periodo}º</Text>
          </View>
          <Text>Pago esse mês: R${this.props.pago}</Text>
        </View>

        <View style={{ flexDirection: 'row', width: Dimensions.get('window').width, paddingHorizontal: 20 }}>
          <TextInput
            value={this.props.valorPagarCasa}
            style={{
              fontSize: 20,
              height: 45,
              borderBottomColor: 'black',
              borderBottomWidth: 0.5,
              flex: 2
            }}
            placeholder="R$"
            placeholderTextColor="#000000"
            keyboardType="numeric"
            onChangeText={texto => this.props.modificaPagarCasa(texto)}
          />
          <TouchableOpacity
            onPress={() => this.props.pagarCasa(this.props.valorPagarCasa, this.props.uid)}
            style={{ backgroundColor: '#E20000', flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontSize: 20, color: 'white' }}>Pagar casa</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  uid: state.AuthReducer.uid,
  nome: state.AuthReducer.nome,
  foto: state.AuthReducer.foto,
  periodo: state.AuthReducer.periodo,
  valorPagarCasa: state.AppReducer.valorPagarCasa,
  pago: state.AuthReducer.pago
});

export default connect(
  mapStateToProps,
  { modificaPagarCasa, pagarCasa }
)(Principal);
