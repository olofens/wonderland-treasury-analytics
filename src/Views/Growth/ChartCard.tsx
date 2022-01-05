import React, { ReactNode, RefObject } from "react";
import { BrightValueText, DimmedTitleText, Text } from "../../components";
import { ChartCardContainer, TextWrapper } from "./styles";

export const ChartCard = ({
  children,
  title,
  valueRef,
  initValue,
}: {
  children: ReactNode;
  title: string;
  valueRef: RefObject<HTMLSpanElement>;
  initValue: string;
}) => {
  return (
    <ChartCardContainer>
      <TextWrapper>
        <DimmedTitleText>{title}</DimmedTitleText>
        <BrightValueText ref={valueRef}>{initValue}</BrightValueText>
      </TextWrapper>

      {children}
    </ChartCardContainer>
  );
};
