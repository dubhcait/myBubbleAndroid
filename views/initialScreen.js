import React from 'react';
import { Heading, StyledText, Underlay, PrimaryButton } from '../components';
import { healthBubble } from '../assets';
import { Text, Image } from 'react-native';
import { Link } from "react-router-native";

const InitialScreen = ({ introPartialSeen }) => (

  <Underlay color="dark">
    <Heading color="white">YOUR MISSION</Heading>

    <StyledText>
      Keep you and your loved ones safe as we battle{' '}
      <Text>COVID-19</Text>
    </StyledText>
    <Image source={healthBubble} />
    <StyledText>
      Stay in your “bubble” each week - a{' '}
      <Text>safe social distance</Text> to
      earn rewards
    </StyledText>
    <Link to="/game"><Text>Text</Text></Link>

  </Underlay>
);

export default InitialScreen;