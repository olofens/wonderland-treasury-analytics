import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { FontWeight, Text } from "../../components";
import { Charts } from "./Charts";
import { ChartsWrapper, TitleTextWrapper } from "./styles";

export const Growth = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ChartsWrapper>
        <TitleTextWrapper>
          <Text weight={FontWeight.Bold} size="32px">
            Wonderland Treasury Growth
          </Text>
        </TitleTextWrapper>
        <Charts />
      </ChartsWrapper>
    </QueryClientProvider>
  );
};
