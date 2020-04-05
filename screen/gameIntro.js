import React from 'react';
import {
  Heading,
  StyledText,
  Underlay,
  FlexRow,
  PrimaryButton,
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
import {useHistory} from 'react-router-dom';

const GameIntro = ({introAllSeen}) => {
  let history = useHistory();

  return (
    <Underlay>
      <Heading> How to WIN</Heading>

      <StyledText>Start the week with a new challenge and 3 bubbles</StyledText>
      <FlexRow>
        <Image src={newTask} style={{height: 60 + 'px'}} />
        <Image src={plus} style={{height: 50 + 'px'}} />
        <Image src={healthBubble} style={{height: 60 + 'px'}} />{' '}
        <Image
          src={healthBubble}
          style={{height: 60 + 'px', marginLeft: -16 + 'px'}}
        />
        <Image
          src={healthBubble}
          style={{height: 60 + 'px', marginLeft: -16 + 'px'}}
        />
      </FlexRow>

      <Heading>Don’t burst any bubbles by breaking social distance!</Heading>
      <FlexRow>
        <Image src={twoPeople} style={{height: 30 + 'px', margin: 15 + 'px'}} />
        <Image src={group} style={{height: 40 + 'px', margin: 15 + 'px'}} />
        <Image src={home} style={{height: 40 + 'px', margin: 15 + 'px'}} />
        <Image
          src={poppedBubble}
          style={{height: 60 + 'px', margin: 15 + 'px'}}
        />
      </FlexRow>

      <StyledText>Keep your bubbles safe by Sunday and get rewards!</StyledText>

      <PrimaryButton
        onClick={() => {
          introAllSeen();
          history.push('/distance');
        }}>
        What’s social distancing?
      </PrimaryButton>
    </Underlay>
  );
};

export default GameIntro;
