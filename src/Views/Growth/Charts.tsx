import React from "react";
import { useGrowthData } from "../../hooks/useGrowthData";
import { GrowthChart } from "./GrowthChart";
import { GrowthDataPoint, USTDegenboxDataPoint } from "../../types/data";
import { ChartsContainer, FlexMember, Wrapper } from "./styles";
import { USTDegenboxChart } from "./USTDegenboxChart";
import { TopHatSpinner } from "../../components";
import { useUSTDegenboxData } from "../../hooks/useUSTDegenboxData";
import { useMetrics } from "../../contexts";

const SOURCES_1: (keyof GrowthDataPoint)[] = ["treasuryMIMMarketValue"];
const SOURCES_2: (keyof GrowthDataPoint)[] = [
  "treasuryMIMMarketValue",
  "treasuryMIMFromTIMEMIMJLP",
  "treasuryMIMFromWETHMIMJLP",
  "treasuryWAVAXMarketValue",
  "treasuryWETHMarketValue",
  "treasuryWETHValueFromWETHMIMJLP",
  "treasuryWAVAXValueFromWAVAXTIMEJLP",
  "treasuryMIMFromWMEMOMIMSLP",
];
const SOURCES_3: (keyof USTDegenboxDataPoint)[] = [
  "id",
  "timestamp",
  "collateral",
  "debt",
];

export const Charts = () => {
  const { growthData, ustDegenboxData } = useMetrics();

  return (
    <Wrapper>
      <ChartsContainer>
        <FlexMember>
          <GrowthChart
            data={growthData}
            sources={SOURCES_1}
            title="Treasury Risk-Free Value"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={growthData}
            sources={SOURCES_2}
            title="Total treasury assets"
          />
        </FlexMember>
      </ChartsContainer>

      <ChartsContainer>
        <FlexMember>
          <USTDegenboxChart
            data={ustDegenboxData}
            sources={SOURCES_3}
            title="Profit from USTDegenbox"
          />
        </FlexMember>
      </ChartsContainer>
    </Wrapper>
  );
};
