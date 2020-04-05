import React from 'react';
import {Heading, StyledText, Underlay, PrimaryButton} from '../components';
import {distance, groupNegative} from '../assets';
import {useHistory} from 'react-router-dom';

const KeepYourDistanceRule = ({}) => {
  let history = useHistory();
  return (
    <Underlay>
      <Heading>Keep your distance!</Heading>

      <StyledText>
        Getting closer than 6ft increases your risk of getting germs on you
        (gross)!
      </StyledText>
      <Image src={distance} />

      <StyledText>
        A perfect excuse to avoid that person you ghosted!
      </StyledText>

      <PrimaryButton onClick={() => history.push('/groups')}>
        ...I’m listening...
      </PrimaryButton>
    </Underlay>
  );
};

const GroupsRule = ({}) => {
  let history = useHistory();
  return (
    <Underlay>
      <Heading>Avoid groups!</Heading>

      <StyledText>
        Don’t be around more than 1 other person at a time (except for the
        people you live with)!
      </StyledText>
      <Image src={groupNegative} />

      <StyledText>Bye, Felicia!</StyledText>

      <PrimaryButton onClick={() => history.push('/staysthome')}>
        ...aaaaand?...
      </PrimaryButton>
    </Underlay>
  );
};

const StayHoneRule = ({}) => {
  let history = useHistory();
  return (
    <Underlay>
      <Heading>Stay home!</Heading>

      <StyledText>
        Only go out if you have to: getting groceries, going to work, or getting
        some solo exercise!
      </StyledText>
      <Image src={groupNegative} />

      <StyledText>Who knew your housecat was onto something...</StyledText>

      <PrimaryButton onClick={() => history.push('/')}>
        Ok, got it!
      </PrimaryButton>
    </Underlay>
  );
};

export {KeepYourDistanceRule, GroupsRule, StayHoneRule};
