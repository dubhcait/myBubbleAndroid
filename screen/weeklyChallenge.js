import React from 'react';
import {
  Heading,
  StyledText,
  Underlay,
  FlexRow,
  PrimaryButton,
  GroupIcon,
} from '../components';
import {
  healthBubble,
  plus,
  newTask,
  home,
  poppedBubble,
  group,
} from '../assets';

const WeeklyChallenge = ({introAllSeen}) => (
  <Underlay>
    <Heading>THIS WEEK’S CHALLENGE</Heading>

    <StyledText>Signup for an online course </StyledText>
    <StyledText>Have a videochat with a friend</StyledText>
    <StyledText>And don’t break the social distance rules!</StyledText>
    <FlexRow>
      <Image src={newTask} />
      <Image src={plus} />
      <Image src={healthBubble} /> <Image src={healthBubble} />
      <Image src={healthBubble} />
    </FlexRow>

    <Heading>Don’t burst any bubbles by breaking social distance!</Heading>
    <FlexRow>
      <GroupIcon />
      <Image src={group} />
      <Image src={home} />
      <Image src={poppedBubble} />
    </FlexRow>

    <Heading>TO EARN:</Heading>
    <FlexRow>
      <StyledText>A free month of Netflixd</StyledText>
    </FlexRow>

    <PrimaryButton>Challenge accepted!</PrimaryButton>
  </Underlay>
);

export default WeeklyChallenge;
