import React from 'react';
import { Heading, StyledText, Underlay, PrimaryButton } from '../components';
import { healthBubble } from '../assets';
import { Link } from "react-router-native";

const InitialScreen = () => (
  <Underlay color="dark">
    <Heading color="white">YOUR MISSION</Heading>

    <StyledText>
      Keep you and your loved ones safe as we battle{' '}
      <Text style={{ fontWeight: 'bold' }}>COVID-19</Text>
    </StyledText>
    <Image src={healthBubble} style={{ height: 190 + 'px' }} />
    <StyledText>
      Stay in your “bubble” each week - a{' '}
      <Text style={{ textDecoration: 'underline' }}>safe social distance</Text> to
      earn rewards
    </StyledText>

    <Link to="/game">
      <Text>Lets go!</Text>
    </Link>
  </Underlay>
);

export default InitialScreen;
