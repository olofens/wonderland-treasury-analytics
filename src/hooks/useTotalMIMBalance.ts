import { useMemo } from "react";
import { useMetrics } from "../contexts";

// Combines all MIM balances across subgraphs
export const useTotalMIMBalance = () => {
  const { avalancheData, ethereumWalletBalances } = useMetrics();
  const mergedMIMBalance: TotalMIMBalanceMetric[] | null = useMemo(() => {
    // okay so we have two arrays of different lengths. one assumption we can make is that they end at the same date
    // however if lengths are different their internal data starts on different dates.
    //so, steps:
    // 1. find shortest length.
    // 2: slice all arrs to this min length (from the end, stepping toward i=0)
    // 3. merge values knowing that all arrs are of same length

    const minLength = Math.min(
      avalancheData.length,
      ethereumWalletBalances.length
    );
    const shortAvalancheData = avalancheData.slice(
      avalancheData.length - minLength
    );
    const shortEthereumData = ethereumWalletBalances.slice(
      ethereumWalletBalances.length - minLength
    );

    console.log(avalancheData, shortAvalancheData);

    const arr = [];
    // loop over each index
    for (let i = 0; i < shortAvalancheData.length; i++) {
      const metadata = {
        id: shortAvalancheData[i].id,
        timestamp: shortAvalancheData[i].timestamp,
      };
      const avaxMIM = shortAvalancheData[i].treasuryMIMMarketValue ?? 0;
      const ethMIM = shortEthereumData[i].MIMCount ?? 0;
      arr.push({
        ...metadata,
        MIMCount: avaxMIM + ethMIM,
      });
    }

    return arr;
  }, [avalancheData, ethereumWalletBalances]);

  return mergedMIMBalance;
};

export type TotalMIMBalanceMetric = {
  id: string;
  timestamp: Date;
  MIMCount: number;
};
