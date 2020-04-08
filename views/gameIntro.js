import React from 'react';
import {
  Heading,
  StyledText,
  Underlay,
  FlexRow,
  PrimaryButtonLink
} from '../components';
import {
  healthBubble,
  plus,
  newTask,
  home,
  poppedBubble,
  twoPeople,
  group,
} from '../assets';
import { Image, Text } from 'react-native';
import { Link } from "react-router-native";

const GameIntro = ({ introAllSeen }) => {
  // let history = useHistory();

  return (
    <Underlay>
      <Heading> How to WIN</Heading>

      <StyledText>Start the week with a new challenge and 3 bubbles</StyledText>
      <FlexRow>
        <Image source={newTask} />
        <Image source={plus} />
        <Image source={healthBubble} />
        <Image
          source={healthBubble}
        />
        <Image
          source={healthBubble}
        />
      </FlexRow>

      <Heading>Don’t burst any bubbles by breaking social distance!</Heading>
      <FlexRow>
        <Image source={twoPeople} />
        <Image source={group} />
        <Image source={home} />
        <Image
          source={poppedBubble} />
      </FlexRow>

      <StyledText>Keep your bubbles safe by Sunday and get rewards!</StyledText>
      <PrimaryButtonLink text="What’s social distancing?" url="/distance" />


    </Underlay>
  );
};

export default GameIntro;
