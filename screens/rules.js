import React from 'react';
import { Heading, StyledText, Underlay, PrimaryButtonLink } from '../components';
import { distance, groupNegative, house } from '../assets';
import { Link } from "react-router-native";
import { Text, Image } from 'react-native';


const KeepYourDistanceRule = ({ }) => {

  return (
    <Underlay>
      <Heading>Keep your distance!</Heading>

      <StyledText>
        Getting closer than 6ft increases your risk of getting germs on you
        (gross)!
      </StyledText>
      <Image source={distance} />

      <StyledText>
        A perfect excuse to avoid that person you ghosted!
      </StyledText>
      <PrimaryButtonLink text="...I’m listening..." url="/groups" />
    </Underlay>
  );
};

const GroupsRule = ({ }) => {

  return (
    <Underlay>
      <Heading>Avoid groups!</Heading>

      <StyledText>
        Don’t be around more than 1 other person at a time (except for the
        people you live with)!
      </StyledText>
      <Image source={groupNegative} />

      <StyledText>Bye, Felicia!</StyledText>
      <PrimaryButtonLink text="...aaaaand?..." url="/staysthome" />
    </Underlay >
  );
};

const StayHoneRule = ({ }) => {

  return (
    <Underlay>
      <Heading>Stay home!</Heading>

      <StyledText>
        Only go out if you have to: getting groceries, going to work, or getting
        some solo exercise!
      </StyledText>
      <Image source={house} />

      <StyledText>Who knew your housecat was onto something...</StyledText>
      <PrimaryButtonLink text="Ok, got it!" url="/" />

    </Underlay>
  );
};

export { KeepYourDistanceRule, GroupsRule, StayHoneRule };
