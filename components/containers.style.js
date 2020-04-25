import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components';
import {bubble4} from '../assets';

const UnderlayStyle = styled.View`
  background-color: ${props =>
    props.background ? props.background : '#ffffff'};
  position: relative;
  z-index: 0;
`;

const ImgTop = styled.Image`
  position: absolute;
  top: -25;
  left: 250;
  width: 110px;
  height: 110px;
`;

const ImgBottom = styled.Image`
  position: absolute;
  bottom: 60;
  right: 60;
  width: 300px;
  height: 300px;
`;

const ImgLeft = styled.Image`
  position: absolute;
  top: 200;
  left: 40;
  width: 60px;
  height: 60px;
`;

const ImgRight = styled.Image`
  position: absolute;
  top: 100;
  left: 240;
  width: 180px;
  height: 180px;
`;
const Internal = styled.View`
  width: ${wp('100%')};
  height: ${hp('100%')};
  display: flex;
  align-items: center;
  z-index: 2000;
`;

const Underlay = ({children, bubbles = true, background}) => (
  <UnderlayStyle background={background}>
    <Internal>{children}</Internal>
    {bubbles && (
      <>
        <ImgTop source={bubble4} />
        <ImgLeft source={bubble4} />
        <ImgRight source={bubble4} />
        <ImgBottom source={bubble4} />
      </>
    )}
  </UnderlayStyle>
);

const CircularUnderlay = styled.View`
  border-radius: 50%;
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FlexRow = styled.View`
  display: flex;
  flex-direction: row;
`;

const FlexColumn = styled.View`
  display: flex;
  flex-direction: column;
`;

export {Underlay, FlexRow, FlexColumn, CircularUnderlay};
