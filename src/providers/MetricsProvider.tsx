import { MetricsContext } from "../contexts/MetricsContext";
import { useUSTDegenboxData } from "../hooks/useUSTDegenboxData";
import { ReactNode } from "react";
import { useAvalancheTreasuryMetrics } from "../hooks/useAvalancheMetrics";
import { useEthereumWalletBalances } from "../hooks/useEthereumWalletBalances";
export const MetricsProvider = ({ children }: { children: ReactNode }) => {
  const avalancheData = useAvalancheTreasuryMetrics();
  const ustDegenboxData = useUSTDegenboxData();
  const ethereumWalletBalances = useEthereumWalletBalances();
  const isLoaded = avalancheData != null && ustDegenboxData != null;

  const value = {
    isLoaded,
    avalancheData: avalancheData ?? [],
    ustDegenboxData: ustDegenboxData ?? [],
    ethereumWalletBalances: ethereumWalletBalances ?? [],
  };

  return (
    <MetricsContext.Provider value={value}>{children}</MetricsContext.Provider>
  );
};
