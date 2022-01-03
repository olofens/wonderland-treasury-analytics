import { ETHBalances } from "./../types/data";
import { createContext, useContext } from "react";
import { GrowthDataPoint, USTDegenboxDataPoint } from "../types/data";

export const MetricsContext = createContext<MetricsContextProps>({
  isLoaded: false,
  avalancheData: [],
  ustDegenboxData: [],
  ethereumWalletBalances: [],
});

export const useMetrics = () => {
  return useContext(MetricsContext);
};

type MetricsContextProps = {
  isLoaded: boolean;
  avalancheData: GrowthDataPoint[];
  ustDegenboxData: USTDegenboxDataPoint[];
  ethereumWalletBalances: ETHBalances[];
};
