import { useMetrics } from "../contexts";

export const useAVAXInLP = (): AVAXInLPType[] => {
  const { avalancheData } = useMetrics();

  return avalancheData.map((dp) => ({
    id: dp.id,
    timestamp: dp.timestamp,
    AVAXInLP: dp.treasuryWAVAXValueFromWAVAXTIMEJLP,
  }));
};

export type AVAXInLPType = {
  id: string;
  timestamp: Date;
  AVAXInLP: number;
};
