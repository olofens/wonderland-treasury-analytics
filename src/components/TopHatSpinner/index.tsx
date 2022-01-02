import React from "react";
import { FontWeight, Text } from "..";
import styled from "styled-components";
import "./spinner.css";

const TransitionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const TopHatSpinner = () => {
  return (
    <TransitionWrapper id="tophat-spinner-animation">
      <Text weight={FontWeight.Bold} size="42px">
        (🎩, 🎩)
      </Text>
    </TransitionWrapper>
  );
};
