import { PopsicleWBTCWETHQuery } from "./../constants/TreasuryQueries";
import { ETH_SUBGRAPH_URL } from "../constants/graph";
import { useTreasuryQuery } from "./useTreasuryQuery";
import { useMemo } from "react";
import { removeZeroFields } from "../helpers/utils";

export const usePopsicleWBTCWETHMetric = ():
  | PopsicleWBTCWETHDataPoint[]
  | null => {
  const { data } = useTreasuryQuery(
    ETH_SUBGRAPH_URL,
    "popsicle_wbtc_weth_metrics",
    PopsicleWBTCWETHQuery
  );

  const mappedData: PopsicleWBTCWETHDataPoint[] | null = useMemo(() => {
    if (!data) return null;

    return data.map(removeZeroFields).reverse();
  }, [data]);

  return mappedData;
};

export type PopsicleWBTCWETHDataPoint = {
  id: string;
  timestamp: Date;
  WBTCPrice: number;
  WETHPrice: number;
  WBTCCount: number;
  WETHCount: number;
  WBTCValue: number;
  WETHValue: number;
  combinedValue: number;
};
