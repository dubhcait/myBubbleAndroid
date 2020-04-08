import React from "react";
import {
  Heading,
  Underlay,
  FlexRow,
  BubbleX,
  PrimaryButton
} from "../components";

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

export { OupsEnd, OupsTooManyPeople };
