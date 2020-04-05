import React, {useState} from 'react';
import {
  Bubble,
  Heading,
  FlexRow,
  StyledText,
  Underlay,
  FlexColumn,
} from '../components';
import {
  leaderboard,
  healthBubble,
  poppedBubble,
  award,
  goodDeed,
} from '../assets';

const MainScreen = ({lifeCount}) => {
  const [status, setStatus] = useState('BubblePlus');

  const LifeCount = ({lifeCount}) => {
    console.log(lifeCount);
    return lifeCount.map((i, k) => {
      if (k === 0) {
        if (i === 1) {
          return (
            <Image src={healthBubble} key={k} style={{height: 100 + 'px'}} />
          );
        }
        return <Image src={poppedBubble} key={k} />;
      }
      if (i === 1) {
        return (
          <Image
            src={healthBubble}
            key={k}
            style={{height: 100 + 'px', marginLeft: -28 + 'px'}}
          />
        );
      }
      return <Image src={poppedBubble} key={k} />;
    });
  };

  return (
    <Underlay>
      <Heading>MyBubble</Heading>

      <StyledText>Bubbles remaining:</StyledText>
      <FlexRow>
        <LifeCount lifeCount={lifeCount} />
      </FlexRow>

      <StyledText>Who knew your housecat was onto something...</StyledText>
      <StyledText>Signup for an online course</StyledText>
      <StyledText>Have a videochat with a friend</StyledText>
      <FlexRow>
        <FlexColumn>
          <Image src={goodDeed} />
          <StyledText>Do a good deed</StyledText>
        </FlexColumn>
        <FlexColumn>
          <Image src={leaderboard} />
          <StyledText>Leaderboard</StyledText>
        </FlexColumn>
        <FlexColumn>
          <Image src={award} />
          <StyledText>My Rewards</StyledText>
        </FlexColumn>
      </FlexRow>
    </Underlay>
  );
};

export default MainScreen;
