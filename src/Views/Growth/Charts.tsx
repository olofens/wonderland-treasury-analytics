import React from "react";
import { GrowthChart } from "./GrowthChart";
import { GrowthDataPoint, USTDegenboxDataPoint } from "../../types/data";
import { ChartsContainer, FlexMember, Wrapper } from "./styles";
import { USTDegenboxChart } from "./USTDegenboxChart";
import { useMetrics } from "../../contexts";
import { useTotalMIMBalance } from "../../hooks/useTotalMIMBalance";

const SOURCES_1: string[] = ["MIMCount"];
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
  const { avalancheData, ustDegenboxData } = useMetrics();
  const totalMIMData = useTotalMIMBalance();

  return (
    <Wrapper>
      <ChartsContainer>
        <FlexMember>
          <GrowthChart
            data={totalMIMData}
            sources={SOURCES_1}
            title="Treasury Risk-Free Value"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={avalancheData}
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
