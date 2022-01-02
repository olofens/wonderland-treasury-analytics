import { USTDegenboxDataPoint, USTDegenboxProfitDataPoint } from "./types";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { ustDegenboxQuery } from "./TreasuryQueries";
import { mapDataPoint } from "./helpers";
import { apolloExt } from "../../helpers/apollo";
import { ETH_SUBGRAPH_URL } from "../../constants/graph";

const useUSTDegenboxMetrics = (options: any) => {
  return useQuery(
    "USTDegenbox_metrics",
    async () => {
      const response = await apolloExt(ustDegenboxQuery, ETH_SUBGRAPH_URL);

      // Transform string values to floats
      //@ts-ignore
      return response.data.ustdegenboxMetrics;
    },
    options
  );
};

// Returns a bunch of growth data in usable formats
export const useUSTDegenboxData = () => {
  const { data } = useUSTDegenboxMetrics({ refetchOnMount: false });

  const mappedData: USTDegenboxDataPoint[] | null = useMemo(() => {
    if (!data) return null;

    return data.filter((metric: USTDegenboxDataPoint) => metric.collateral > 0);
  }, [data]);

  return mappedData;
};
