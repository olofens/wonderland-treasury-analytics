import React, { ReactNode, RefObject } from "react";
import { FontWeight, Text } from "../../components";
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
        <Text weight={FontWeight.Medium} dimmed size="20px">
          {title}
        </Text>
        <Text ref={valueRef} weight={FontWeight.Bold} size="24px">
          {initValue}
        </Text>
      </TextWrapper>

      {children}
    </ChartCardContainer>
  );
};
