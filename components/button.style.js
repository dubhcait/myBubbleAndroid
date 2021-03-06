import styled from 'styled-components';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const ButtonContent = styled.View`
  display: flex;
  align-items: center;
  background: #0e3d71;
  border-radius: 5px;
  min-width: 200px;
  height: 50px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledButtonText = styled.Text`
  font-family: Dosis-Bold;
  font-style: normal;
  color: white;
  font-size: 20px;
`;

const PrimaryButton = ({onPress, text}) => (
  <TouchableOpacity onPress={onPress}>
    <ButtonContent>
      <StyledButtonText>{text}</StyledButtonText>
    </ButtonContent>
  </TouchableOpacity>
);

const LinkStyle = styled.Text`
  font-family: Dosis-Bold;
  color: white;
  font-size: 20px;
  background: #0e3d71;
  border-radius: 5px;
  min-width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
`;

const PrimaryButtonLink = ({text, url}) => {
  return <LinkStyle>{text}</LinkStyle>;
};

export {PrimaryButton, PrimaryButtonLink};
