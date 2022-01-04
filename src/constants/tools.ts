import { GrowthDataPoint } from "../types/data";

export const WETH_COLOR_1 = "#020256";
export const WETH_COLOR_2 = "#9393F6";
export const AVAX_COLOR_1 = "#671A1A";
export const AVAX_COLOR_2 = "#C80203";
export const MIM_COLOR_1 = "#6C6CFB";
export const MIM_COLOR_2 = "#9A84C8";

export type GrowthMetric = Omit<GrowthDataPoint, "id" | "timestamp">;

export const TREASURY_TOOLKIT = {
  treasuryMIMFromTIMEMIMJLP: {
    shortName: "MIM in TIME/MIM JLP",
    name: "MIM in TIME/MIM JLP",
    coins: ["MIM"],
  },
  treasuryMIMFromWETHMIMJLP: {
    shortName: "MIM in WETH/MIM JLP",
    name: "MIM in WETH/MIM JLP",
    coins: ["MIM"],
  },
  treasuryMIMMarketValue: {
    shortName: "MIM",
    name: "Magic Internet Money",
    coins: ["MIM"],
  },
  treasuryWAVAXMarketValue: {
    shortName: "wAVAX",
    name: "Wrapped Avalanche",
    coins: ["AVAX"],
  },
  treasuryWETHMarketValue: {
    shortName: "wETH",
    name: "Wrapped Ethereum",
    coins: ["wETH"],
  },
  treasuryWETHValueFromWETHMIMJLP: {
    shortName: "WETH in WETH/MIM JLP",
    name: "WETH in WETH/MIM JLP",
    coins: ["wETH"],
  },
  treasuryWAVAXValueFromWAVAXTIMEJLP: {
    shortName: "WAVAX in WAVAX/TIME JLP",
    name: "WAVAX in WAVAX/TIME JLP",
    coins: ["wETH"],
  },
  treasuryMIMFromWMEMOMIMSLP: {
    shortName: "MIM in WMEMO/MIM SLP",
    name: "MIM in WMEMO/MIM SLP",
    coins: ["MIM"],
  },
  MIMCount: {
    shortName: "MIM in wallet",
    name: "MIM in wallet",
    coins: ["MIM"],
  },
  AVAXValue: {
    shortName: "AVAX USD Value",
    name: "AVAX USD Value",
    coins: ["AVAX"],
  },
  ETHValue: {
    shortName: "ETH USD Value",
    name: "ETH USD Value",
    coins: ["ETH"],
  },
  AVAXInLP: {
    shortName: "AVAX In AMM LP",
    name: "AVAX In AMM LP",
    coins: ["AVAX"],
  },
  MIMInLP: {
    shortName: "MIM in LP",
    name: "MIM in LP",
    coins: ["MIM"],
  },
  ETHInLP: {
    shortName: "ETH in LP",
    name: "ETH in LP",
    coins: ["ETH"],
  },
  CRVValue: {
    shortName: "CRV in wallet",
    name: "CRV in wallet",
    coins: ["CRV"],
  },
  CVXValue: {
    shortName: "CVX in wallet",
    name: "CVX in wallet",
    coins: ["CVX"],
  },
  SSPELLValue: {
    shortName: "Staked SPELL Wallet Balance",
    name: "Staked SPELL Wallet Balance",
    coins: ["SSPELL"],
  },
};
