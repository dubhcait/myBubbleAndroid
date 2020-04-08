import React from 'react';
import { Heading, StyledText, Underlay, PrimaryButtonLink } from '../components';
import { healthBubble } from '../assets';
import { Text, Image } from 'react-native';
import { Link } from "react-router-native";

const InitialScreen = () => (

  <Underlay color="dark" bubbles={false}>
    <Heading color="white">YOUR MISSION</Heading>

    <StyledText color="white">
      Keep you and your loved ones safe as we battle{' '}
      <Text color="white">COVID-19</Text>
    </StyledText>
    <Image source={healthBubble} />
    <StyledText color="white">
      Stay in your “bubble” each week - a{' '}
      <Text color="white">safe social distance</Text> to
      earn rewards
    </StyledText>
    <PrimaryButtonLink text="Lets go!" url="/game" />

  </Underlay>
);

export default InitialScreen;