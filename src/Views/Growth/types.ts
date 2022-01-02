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
