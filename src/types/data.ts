export interface GrowthDataPoint {
  id: string;
  timestamp: Date;
  treasuryMIMFromTIMEMIMJLP: number;
  treasuryMIMFromWETHMIMJLP: number;
  treasuryMIMMarketValue: number;
  treasuryWAVAXMarketValue: number;
  treasuryWETHMarketValue: number;
  treasuryWETHValueFromWETHMIMJLP: number;
  treasuryWAVAXValueFromWAVAXTIMEJLP: number;
  treasuryMIMFromWMEMOMIMSLP: number;
}

export interface RawDataPoint {
  id: number;
  timestamp: number;
  treasuryMIMFromTIMEMIMJLP: number;
  treasuryMIMFromWETHMIMJLP: number;
  treasuryMIMMarketValue: number;
  treasuryWAVAXMarketValue: number;
  treasuryWETHMarketValue: number;
  treasuryWETHValueFromWETHMIMJLP: number;
  treasuryWAVAXValueFromWAVAXTIMEJLP: number;
  treasuryMIMFromWMEMOMIMSLP: number;
}

export interface USTDegenboxDataPoint {
  id: string;
  timestamp: Date;
  collateral: number;
  debt: number;
}

export interface USTDegenboxProfitDataPoint {
  id: string;
  timestamp: Date;
  profit: number;
}

//https://thegraph.com/hosted-service/subgraph/olofens/wonderland-eth-subgraph?query=Token%20balances%20query
export interface ETHBalances {
  id: string;
  timestamp: Date;
  MIMCount: number;
  MIMValue: number;
  CVXCount: number;
  CVXValue: number;
  WBTCCount: number;
  WBTCValue: number;
  CRVCount: number;
  CRVValue: number;
  ETHCount: number;
  ETHValue: number;
}

export interface SSPELLDataPoint {
  id: string;
  timestamp: Date;
  SPELLPrice: number;
  SPELLSSPELLRatio: number;
  SSPELLPrice: number;
  SSPELLCount: number;
  SSPELLValue: number;
}
