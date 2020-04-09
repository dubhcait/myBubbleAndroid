import React from 'react';
import {
  Heading,
  StyledText,
  Underlay,
  FlexRow,
  PrimaryButton,
} from '../components';
import {twoPeople, home, group} from '../assets';
import {Image, View} from 'react-native';

const WeeklyChallenge = ({navigation}) => (
  <Underlay>
    <Heading style={{width: 240}}>THIS WEEK’S CHALLENGE</Heading>
    <View>
      <StyledText>Signup for an online course </StyledText>
      <StyledText>Have a videochat with a friend</StyledText>
    </View>
    <StyledText>And don’t break the social distance rules!</StyledText>

    <FlexRow>
      <Image source={twoPeople} />
      <Image source={group} />
      <Image source={home} />
    </FlexRow>

    <Heading>TO EARN:</Heading>
    <FlexRow>
      <StyledText>A free month of Netflix</StyledText>
    </FlexRow>
    <PrimaryButton
      text="Challenge accepted!"
      onPress={() => navigation.navigate('Intro')}
    />
  </Underlay>
);

export default WeeklyChallenge;
