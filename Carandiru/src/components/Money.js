import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import styled from 'styled-components';
import { Actions } from 'react-native-router-flux';

export default class Money extends Component {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          flex: 1,
          alignContent: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
      >
        <StyledView onPress={() => Actions.novogasto()}>
          <Label>Novo gasto</Label>
          <Label>temporário</Label>
        </StyledView>
        <StyledView onPress={() => Actions.novaentrada()}>
          <Label>Nova</Label>
          <Label>entrada</Label>
        </StyledView>
        <StyledView onPress={() => Actions.contascasa()}>
          <Label>Contas</Label>
          <Label>da casa</Label>
        </StyledView>
        <StyledView onPress={() => Actions.balanco()}>
          <Label>Balanço</Label>
        </StyledView>
      </ScrollView>
    );
  }
}

const StyledView = styled.TouchableOpacity`
  width: 190;
  height: 190;
  background-color: #e20000;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 10;
  margin-right: 10;
  margin-top: 20;
`;
const Label = styled.Text`
  font-size: 30;
  color: white;
`;
