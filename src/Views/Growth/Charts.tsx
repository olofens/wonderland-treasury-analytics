import React from "react";
import { GrowthChart } from "./GrowthChart";
import { GrowthDataPoint, USTDegenboxDataPoint } from "../../types/data";
import { ChartsContainer, FlexMember, Wrapper } from "./styles";
import { USTDegenboxChart } from "./USTDegenboxChart";
import { useMetrics } from "../../contexts";
import { useTotalMIMBalance } from "../../hooks/useTotalMIMBalance";
import { useTotalAVAXBalance } from "../../hooks/useTotalAVAXBalance";
import { useTotalETHBalance } from "../../hooks/useTotalETHBalance";
import { useAVAXInLP } from "../../hooks/useAVAXInLP";
import { useTotalMIMInLP } from "../../hooks/useTotalMIMInLP";
import { useTotalETHInLP } from "../../hooks/useTotalETHInLP";

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
  const { avalancheData, ustDegenboxData, ethereumWalletBalances, sSPELLData } =
    useMetrics();
  const totalMIMData = useTotalMIMBalance();
  const totalAVAXData = useTotalAVAXBalance();
  const totalETHData = useTotalETHBalance();
  const avaxInLPData = useAVAXInLP();
  const mimInLPData = useTotalMIMInLP();
  const ETHInLPData = useTotalETHInLP();

  return (
    <Wrapper>
      <ChartsContainer>
        <FlexMember>
          <GrowthChart
            data={totalMIMData}
            sources={SOURCES_1}
            title="MIM Wallet Balance"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={totalAVAXData}
            sources={["AVAXValue"]}
            title="AVAX Wallet Balance"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={totalETHData}
            sources={["ETHValue"]}
            title="ETH Wallet Balance"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={ethereumWalletBalances}
            sources={["CRVValue", "CVXValue"]}
            title="CVX and CRV Balances"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={mimInLPData}
            sources={["MIMInLP"]}
            title="MIM Balance in LPs"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={avaxInLPData}
            sources={["AVAXInLP"]}
            title="AVAX Balance in LPs"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={ETHInLPData}
            sources={["ETHInLP"]}
            title="ETH Balance in LPs"
          />
        </FlexMember>
        <FlexMember>
          <GrowthChart
            data={sSPELLData}
            sources={["SSPELLValue"]}
            title="Staked SPELL Wallet Balance"
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
