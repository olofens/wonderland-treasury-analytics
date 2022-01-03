import { useTreasuryQuery } from "./useTreasuryQuery";
import { useMemo } from "react";
import { ustDegenboxQuery } from "../constants/TreasuryQueries";
import { USTDegenboxDataPoint } from "../types/data";
import { ETH_SUBGRAPH_URL } from "../constants/graph";

// Returns a bunch of growth data in usable formats
export const useUSTDegenboxData = () => {
  const { data } = useTreasuryQuery(
    ETH_SUBGRAPH_URL,
    "ustdegenbox",
    ustDegenboxQuery
  );

  const mappedData: USTDegenboxDataPoint[] | null = useMemo(() => {
    if (!data) return null;

    return data.filter((metric: USTDegenboxDataPoint) => metric.collateral > 0);
  }, [data]);

  return mappedData;
};
