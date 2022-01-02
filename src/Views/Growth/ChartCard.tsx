import React, { ReactNode, RefObject } from "react";
import { Text } from "../../components";
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
        <Text weight={500} dimmed size="20px">
          {title}
        </Text>
        <Text ref={valueRef} weight={700} size="30px">
          {initValue}
        </Text>
      </TextWrapper>

      {children}
    </ChartCardContainer>
  );
};
