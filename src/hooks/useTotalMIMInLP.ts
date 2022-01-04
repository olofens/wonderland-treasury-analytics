import { useMemo } from "react";
import { useMetrics } from "../contexts";

export const useTotalMIMInLP = () => {
  const { avalancheData, ethereumWalletBalances: ethereumData } = useMetrics();

  const mergedMIMBalance: TotalMIMInLp[] | null = useMemo(() => {
    // okay so we have two arrays of different lengths. one assumption we can make is that they end at the same date
    // however if lengths are different their internal data starts on different dates.
    //so, steps:
    // 1. reverse arrays so that the first element is the latest data point
    // 2. get the longest array and use as reference, loop over it
    // 3. for each index, add all mim values from all arrays that have values at the current index.

    const reversedAvalancheData = [...avalancheData].reverse();
    const reversedEthereumData = [...ethereumData].reverse();

    const arrays = [reversedAvalancheData, reversedEthereumData];
    const longestArrIndex = arrays
      .map((a) => a.length)
      .indexOf(Math.max(...arrays.map((a) => a.length)));

    const longestArr = arrays[longestArrIndex];

    const arr = [];
    // loop over each index
    for (let i = longestArr.length - 1; i >= 0; i--) {
      const metadata = {
        id: longestArr[i].id,
        timestamp: longestArr[i].timestamp,
      };

      let indexMIM = 0;
      if (reversedAvalancheData.length > i) {
        indexMIM += reversedAvalancheData[i].treasuryMIMFromTIMEMIMJLP ?? 0;
        indexMIM += reversedAvalancheData[i].treasuryMIMFromWETHMIMJLP ?? 0;
        indexMIM += reversedAvalancheData[i].treasuryMIMFromWMEMOMIMSLP ?? 0;
      }

      //   if (reversedEthereumData.length > i) {
      //     indexMIM += reversedEthereumData[i].MIMCount ?? 0;
      //   }

      arr.push({
        ...metadata,
        MIMInLP: indexMIM,
      });
    }

    return arr;
  }, [avalancheData, ethereumData]);

  return mergedMIMBalance;
};

export type TotalMIMInLp = {
  id: string;
  timestamp: Date;
  MIMInLP: number;
};
