import { GrowthDataPoint } from "./types";

export const WETH_COLOR_1 = "#474748";
export const WETH_COLOR_2 = "#3c3c3d";
export const AVAX_COLOR_1 = "#EB5C5C";
export const AVAX_COLOR_2 = "#e84142";
export const MIM_COLOR_1 = "#8D8BF8";
export const MIM_COLOR_2 = "#7b79f7";

type mytype = Omit<GrowthDataPoint, "id" | "timestamp">;

export const TREASURY_TOOLKIT: {
  [key in keyof mytype]: any;
} = {
  treasuryMIMMarketValue: {
    name: "MIM RFV",
    decimals: 8,
    color: "red",
    valueFormatter: (value: number) => value - 1,
  },
};
