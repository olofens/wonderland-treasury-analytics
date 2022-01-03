import { AVAX_SUBGRAPH_URL } from "./../constants/graph";
import { useTreasuryQuery } from "./useTreasuryQuery";
import { GrowthDataPoint } from "../types/data";
import { useMemo } from "react";
import { treasuryQuery } from "../constants/TreasuryQueries";
import { mapDataPoint } from "../helpers/utils";

export const useAvalancheTreasuryMetrics = () => {
  const { data } = useTreasuryQuery(
    AVAX_SUBGRAPH_URL,
    "treasury_metrics",
    treasuryQuery
  );

  const mappedData: GrowthDataPoint[] | null = useMemo(() => {
    if (!data) return null;

    return data.map(mapDataPoint).reverse();
  }, [data]);

  return mappedData;
};
