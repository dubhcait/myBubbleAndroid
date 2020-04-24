import styled from 'styled-components';

const Heading = styled.Text`
  font-family: Quicksand-Bold;
  font-style: normal;
  font-size: 38px;
  line-height: 38px;
  text-align: center;
  color: ${props => (props.color ? props.color : '#01016f')};
`;
// color: #0e3d71;

const StyledText = styled.Text`
  font-family: Lato-Regular;
  font-style: normal;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: ${props => (props.color ? props.color : '#01016f')};
`;

const BulletPont = styled.Text`
  font-family: Lato-Regular;
  font-style: normal;
  font-size: 12px;
  line-height: 14px;
  padding: 0;
  margin: 0;
`;

export {Heading, StyledText, BulletPont};
