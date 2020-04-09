import React from 'react';
import {Image} from 'react-native';
import {distance, groupNegative} from '../assets';
import {Heading, StyledText, Underlay} from '../components';

const KeepYourDistanceRule = ({}) => {
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

      {/* <Link to="/groups">
        <Text> ...I’m listening...</Text>
      </Link> */}
    </Underlay>
  );
};

const GroupsRule = ({}) => {
  return (
    <Underlay>
      <Heading>Avoid groups!</Heading>

      <StyledText>
        Don’t be around more than 1 other person at a time (except for the
        people you live with)!
      </StyledText>
      <Image source={groupNegative} />

      <StyledText>Bye, Felicia!</StyledText>

      {/* <Link to="/staysthome">
        <Text>...aaaaand?...</Text>
      </Link> */}
    </Underlay>
  );
};

const StayHoneRule = ({}) => {
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

      {/* <Link to="/">
        <Text> Ok, got it!</Text>
      </Link> */}
    </Underlay>
  );
};

export {KeepYourDistanceRule, GroupsRule, StayHoneRule};
