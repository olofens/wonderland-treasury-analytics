import { createContext, useContext } from "react";
import { GrowthDataPoint, USTDegenboxDataPoint } from "../types/data";

export const MetricsContext = createContext<MetricsContextProps>({
  isLoaded: false,
  growthData: [],
  ustDegenboxData: [],
});

export const useMetrics = () => {
  return useContext(MetricsContext);
};

type MetricsContextProps = {
  isLoaded: boolean;
  growthData: GrowthDataPoint[];
  ustDegenboxData: USTDegenboxDataPoint[];
};
