import React from 'react';
import { Image, View } from 'react-native';

import styled from 'styled-components';

import { Actions } from 'react-native-router-flux';

import home from '../img/home.png';
import money from '../img/money.png';
import rh from '../img/rh.png';

export default class CustomTabBarBottom extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledTouchableOpacity onPress={() => Actions.money()}>
          <LabelContainer>
            <Image source={money} style={{ width: 30, height: 30 }} />
            <Label>Money</Label>
          </LabelContainer>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity onPress={() => Actions.principal()}>
          <LabelContainer>
            <Image source={home} style={{ width: 30, height: 30 }} />
            <Label>Home</Label>
          </LabelContainer>
        </StyledTouchableOpacity>
        <StyledTouchableOpacity onPress={() => Actions.rh()}>
          <LabelContainer>
            <Image source={rh} style={{ width: 30, height: 30 }} />
            <Label>RH</Label>
          </LabelContainer>
        </StyledTouchableOpacity>
      </StyledView>
    );
  }
}

const Label = styled.Text`
  font-size: 20;
  color: white;
`;

const StyledView = styled.View`
  height: 60;
  background-color: #e20000;
  flex-direction: row;
  justify-content: space-evenly;

  border-top-color: #e3e3e3;
  border-top-width: 0.5;

  padding-right: 30;
  padding-left: 30;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  width: 80;
  flex: 1;

  align-items: center;
  justify-content: center;
`;

const LabelContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  padding-left: 20;
  padding-right: 20;

  border-top-color: ${props => (props.active ? 'white' : '#E20000')};
  border-top-width: 4;
`;
