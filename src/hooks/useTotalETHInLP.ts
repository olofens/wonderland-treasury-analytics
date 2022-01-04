import { useMetrics } from "../contexts";

export const useTotalETHInLP = (): TotalETHInLPType[] => {
  const { avalancheData } = useMetrics();

  return avalancheData.map((dp) => ({
    id: dp.id,
    timestamp: dp.timestamp,
    ETHInLP: dp.treasuryWETHValueFromWETHMIMJLP,
  }));
};

export type TotalETHInLPType = {
  id: string;
  timestamp: Date;
  ETHInLP: number;
};
