import { GrowthDataPoint } from "../types/data";
import { useMemo } from "react";
import { useQuery } from "react-query";
import { treasuryQuery } from "../constants/TreasuryQueries";
import { mapDataPoint } from "../helpers/utils";
import apollo from "../helpers/apollo";

const useTreasuryMetrics = (options: any) => {
  return useQuery(
    "treasury_metrics",
    async () => {
      const response = await apollo<any>(treasuryQuery);

      // Transform string values to floats
      //@ts-ignore
      return response.data.protocolMetrics.map((metric: any) =>
        Object.entries(metric).reduce(
          //@ts-ignore
          (obj, [key, value]) => ((obj[key] = parseFloat(value)), obj),
          {}
        )
      );
    },
    options
  );
};

// Returns a bunch of growth data in usable formats
export const useGrowthData = () => {
  const { data } = useTreasuryMetrics({ refetchOnMount: false });

  const mappedData: GrowthDataPoint[] | null = useMemo(() => {
    if (!data) return null;

    return data.map(mapDataPoint).reverse();
  }, [data]);

  return mappedData;
};
