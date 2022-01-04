import { SSPELLDataPoint } from "./../types/data";
import { SSPELLQuery } from "./../constants/TreasuryQueries";
import { ETH_SUBGRAPH_URL } from "./../constants/graph";
import { useTreasuryQuery } from "./useTreasuryQuery";
import { useMemo } from "react";
import { removeZeroFields } from "../helpers/utils";

export const useSSPELLMetrics = () => {
  const { data } = useTreasuryQuery(
    ETH_SUBGRAPH_URL,
    "sspell_metrics",
    SSPELLQuery
  );

  const mappedData: SSPELLDataPoint[] | null = useMemo(() => {
    if (!data) return null;

    return data.map(removeZeroFields).reverse();
  }, [data]);

  return mappedData;
};
