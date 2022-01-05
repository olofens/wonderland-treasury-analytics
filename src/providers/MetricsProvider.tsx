import { MetricsContext } from "../contexts/MetricsContext";
import { useUSTDegenboxData } from "../hooks/useUSTDegenboxData";
import { ReactNode } from "react";
import { useAvalancheTreasuryMetrics } from "../hooks/useAvalancheMetrics";
import { useEthereumWalletBalances } from "../hooks/useEthereumWalletBalances";
import { useSSPELLMetrics } from "../hooks/useSSPellMetric";
import { usePopsicleWBTCWETHMetric } from "../hooks/usePopsicleWBTCWETHMetric";
export const MetricsProvider = ({ children }: { children: ReactNode }) => {
  const avalancheData = useAvalancheTreasuryMetrics();
  const ustDegenboxData = useUSTDegenboxData();
  const ethereumWalletBalances = useEthereumWalletBalances();
  const sSPELLData = useSSPELLMetrics();
  const popsicleWBTCWETHData = usePopsicleWBTCWETHMetric();
  const isLoaded =
    avalancheData != null &&
    ustDegenboxData != null &&
    sSPELLData != null &&
    popsicleWBTCWETHData != null;

  const value = {
    isLoaded,
    avalancheData: avalancheData ?? [],
    ustDegenboxData: ustDegenboxData ?? [],
    ethereumWalletBalances: ethereumWalletBalances ?? [],
    sSPELLData: sSPELLData ?? [],
    popsicleWBTCWETHData: popsicleWBTCWETHData ?? [],
  };

  return (
    <MetricsContext.Provider value={value}>{children}</MetricsContext.Provider>
  );
};
