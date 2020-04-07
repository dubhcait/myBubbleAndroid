import React from 'react';
import { Heading, StyledText, Underlay, PrimaryButton } from '../components';
import { healthBubble } from '../assets';
import { Text, Image } from 'react-native';

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

    <PrimaryButton title="Lets go!"
      onPress={() => introPartialSeen()}
    />
  </Underlay>
);

export default InitialScreen;