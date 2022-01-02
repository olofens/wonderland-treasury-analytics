import React from "react";
import { useGrowthData } from "./useGrowthData";
import { useUSTDegenboxData } from "./useUSTDegenboxData";
import { GrowthChart } from "./GrowthChart";
import { GrowthDataPoint, USTDegenboxDataPoint } from "./types";
import { ChartsContainer, FlexMember, Wrapper } from "./styles";
import { USTDegenboxChart } from "./USTDegenboxChart";
import { TopHatSpinner } from "../../components";

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
  const data = useGrowthData();
  const data2 = useUSTDegenboxData();

  const loaded = data && data2;

  if (!loaded) {
    return <TopHatSpinner />;
  }

  return (
    <Wrapper>
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
      {data2 && (
        <ChartsContainer>
          <FlexMember>
            <USTDegenboxChart
              data={data2}
              sources={SOURCES_3}
              title="Profit from USTDegenbox"
            />
          </FlexMember>
        </ChartsContainer>
      )}
    </Wrapper>
  );
};
