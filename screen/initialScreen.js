import React from 'react';
import {Heading, StyledText, Underlay, PrimaryButton} from '../components';
import {healthBubble} from '../assets';

const InitialScreen = ({introPartialSeen}) => (
  <Underlay color="dark">
    <Heading color="white">YOUR MISSION</Heading>

    <StyledText>
      Keep you and your loved ones safe as we battle{' '}
      <span style={{fontWeight: 'bold'}}>COVID-19</span>
    </StyledText>
    <Image src={healthBubble} style={{height: 190 + 'px'}} />
    <StyledText>
      Stay in your “bubble” each week - a{' '}
      <span style={{textDecoration: 'underline'}}>safe social distance</span> to
      earn rewards
    </StyledText>

    <PrimaryButton onClick={() => introPartialSeen()}>
      <p style={{margin: 0}}>Lets go!</p>
    </PrimaryButton>
  </Underlay>
);

export default InitialScreen;
