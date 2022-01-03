import React from "react";
import { FontWeight, Text } from "../../components";
import { Charts } from "./Charts";
import { ChartsWrapper, TitleTextWrapper } from "./styles";

export const Growth = () => {
  return (
    <ChartsWrapper>
      <TitleTextWrapper>
        <Text weight={FontWeight.Bold} size="32px">
          Wonderland Treasury Growth
        </Text>
      </TitleTextWrapper>
      <Charts />
    </ChartsWrapper>
  );
};
