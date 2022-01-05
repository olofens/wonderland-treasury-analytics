import { WBTC_COLOR_1 } from "./../constants/tools";
import {
  MIM_COLOR_1,
  MIM_COLOR_2,
  WETH_COLOR_1,
  WETH_COLOR_2,
  AVAX_COLOR_1,
  AVAX_COLOR_2,
  WBTC_COLOR_2,
} from "../constants/tools";
import { RawDataPoint, GrowthDataPoint } from "../types/data";
export function mapDataPoint(raw: RawDataPoint): GrowthDataPoint {
  Object.keys(raw).forEach((key) => {
    if (key === "id" || key === "timestamp") return;
    if (raw[key as keyof RawDataPoint] === 0)
      delete raw[key as keyof RawDataPoint];
  });

  return {
    ...raw,
    id: raw.id.toString(),
    timestamp: new Date(raw.timestamp * 1000), // unix ts is in seconds, not ms
  };
}

export function removeZeroFields(datapoint: any) {
  Object.keys(datapoint).forEach((key) => {
    if (key === "id" || key === "timestamp") return;
    if (datapoint[key] === 0) delete datapoint[key];
  });

  return {
    ...datapoint,
    id: datapoint.id.toString(),
    timestamp: new Date(datapoint.timestamp * 1000), // unix ts is in seconds, not ms
  };
}

/**
 * Converts some data class to a percentage representation of it,
 * while also conserving id and timestamp properties.
 * The return type will be the exact same data structure but the keys passed in
 * will have their values be converted from their absolute value to their relative value
 */
export const toPercentageValues = (datapoint: any, keysToConvert: string[]) => {
  const numbers: number[] = keysToConvert.map((key) => datapoint[key]);
  const total = numbers.reduce((prev, next) => prev + next, 0);
  const relativeNumbers = numbers.map((n) => n / total);
  const newObject = { ...datapoint };
  keysToConvert.forEach((key, i) => {
    newObject[key] = relativeNumbers[i];
  });

  return newObject;
};

export const formatNumber = (n: number): string => {
  return (
    "$" + Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n)
  );
};

export const formatCash = (n: number) => {
  if (n < 1e3) return n + "";
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  else return n + "";
};

export const getCoinColors = (key: string): string[] => {
  switch (key) {
    case "treasuryMIMFromTIMEMIMJLP":
    case "treasuryMIMMarketValue":
    case "treasuryMIMFromWETHMIMJLP":
    case "treasuryMIMFromWMEMOMIMSLP":
    case "MIMInLP":
    case "MIMCount":
      return [MIM_COLOR_2, MIM_COLOR_1];
    case "treasuryWAVAXMarketValue":
    case "AVAXValue":
    case "AVAXInLP":
    case "treasuryWAVAXValueFromWAVAXTIMEJLP":
      return [AVAX_COLOR_2, AVAX_COLOR_1];
    case "treasuryWETHMarketValue":
    case "treasuryWETHValueFromWETHMIMJLP":
    case "ETHInLP":
    case "ETHValue":
    case "WETHValue":
      return [WETH_COLOR_2, WETH_COLOR_1];
    case "WBTCValue":
      return [WBTC_COLOR_2, WBTC_COLOR_1];
    default:
      return ["#fff", "#fff"];
  }
};
