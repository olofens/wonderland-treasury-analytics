import { MetricsContext } from "../contexts/MetricsContext";
import { useUSTDegenboxData } from "../hooks/useUSTDegenboxData";
import { ReactNode } from "react";
import { useGrowthData } from "../hooks/useGrowthData";
export const MetricsProvider = ({ children }: { children: ReactNode }) => {
  const growthData = useGrowthData();
  const ustDegenboxData = useUSTDegenboxData();
  const isLoaded = growthData != null && ustDegenboxData != null;

  const value = {
    isLoaded,
    growthData: growthData ?? [],
    ustDegenboxData: ustDegenboxData ?? [],
  };

  return (
    <MetricsContext.Provider value={value}>{children}</MetricsContext.Provider>
  );
};
