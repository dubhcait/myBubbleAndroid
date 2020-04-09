import React from 'react';
import {
  BubbleX,
  FlexRow,
  Heading,
  PrimaryButton,
  Underlay,
} from '../components';

const OupsEnd = () => (
  <Underlay>
    <Heading>Oups!!!</Heading>

    <Heading>
      You have 0 lives after the week. There is always next week
    </Heading>
    <FlexRow>
      <BubbleX />
      <BubbleX />
      <BubbleX />
    </FlexRow>
    <PrimaryButton>Try again</PrimaryButton>
  </Underlay>
);

const OupsTooManyPeople = () => (
  <Underlay>
    <Heading>Oups!!!</Heading>

    <Heading>Ohh no you are around too many people</Heading>
    <BubbleX />

    <PrimaryButton>Try again</PrimaryButton>
  </Underlay>
);

export {OupsEnd, OupsTooManyPeople};
