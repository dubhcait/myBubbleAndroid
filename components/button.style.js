import styled from 'styled-components';
import { Link } from "react-router-native";
import React from 'react';

const PrimaryButton = styled.Button`
  font-family: Dosis-Bold;
  font-style: normal;
  color: white;
  font-size: 20px;
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

const LinkStyle = styled.Text`
  font-family: Dosis-Bold;
  color: white;
  font-size: 20px;
  background: #0e3d71;
  border-radius: 5px;
  min-width: 200px;
  height: 40px;
  line-height: 40px;
  text-align:center;
`

const PrimaryButtonLink = ({ text, url }) => {

  return (<Link to={url}>
    <LinkStyle >{text}</LinkStyle>
  </Link>)
}


export { PrimaryButton, PrimaryButtonLink };
