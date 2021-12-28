import React from "react";
import { useGrowthData } from "./useGrowthData";
import { GrowthChart } from "./GrowthChart";
import { GrowthDataPoint } from "./types";
import { ChartsContainer, FlexMember, Wrapper } from "./styles";

const SOURCES_1: (keyof GrowthDataPoint)[] = ["treasuryMIMMarketValue"];
const SOURCES_2: (keyof GrowthDataPoint)[] = [
  "treasuryMIMMarketValue",
  "treasuryMIMFromTIMEMIMJLP",
  "treasuryMIMFromWETHMIMJLP",
  "treasuryWAVAXMarketValue",
  "treasuryWETHMarketValue",
  "treasuryWETHValueFromWETHMIMJLP",
];

export const Charts = () => {
  const data = useGrowthData();

  return (
    <Wrapper>
      <h3>Growth</h3>
      {data && (
        <ChartsContainer>
          <FlexMember>
            <GrowthChart
              data={data}
              sources={SOURCES_1}
              title="Treasury Risk-Free Value"
            />
          </FlexMember>
          <FlexMember>
            <GrowthChart
              data={data}
              sources={SOURCES_2}
              title="Total treasury assets"
            />
          </FlexMember>
        </ChartsContainer>
      )}
    </Wrapper>
  );
};
