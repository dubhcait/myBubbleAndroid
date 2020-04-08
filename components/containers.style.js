import React from 'react';
import styled from 'styled-components';
import {topLeftBubbles, bottomRightBubbles} from '../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const UnderlayStyle = styled.View`
  background: #ffffff;
  position: relative;
  z-index: 0;
`;

const ImgTop = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
`;

const ImgBottom = styled.Image`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const Internal = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
`;

const Underlay = ({children, bubbles = true}) => (
  <UnderlayStyle>
    <Internal>{children}</Internal>
    {bubbles && <ImgTop source={topLeftBubbles} />}
    {/* {bubbles && <ImgBottom source={bottomRightBubbles} />} */}
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
