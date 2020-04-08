import React from "react";
import {
  Heading,
  Underlay,
  FlexRow,
  Bubble,
  PrimaryButton
} from "../components";

const WellDone = () => (
  <Underlay>
    <Heading>Well Done!!</Heading>

    <Heading>You have 3 lives after the week. What’s poppin’? Not you!</Heading>
    <FlexRow>
      <Bubble />
      <Bubble />
      <Bubble />
    </FlexRow>
    <PrimaryButton>Excellent</PrimaryButton>
  </Underlay>
);

export default WellDone;
