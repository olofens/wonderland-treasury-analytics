import { useMetrics } from "../contexts";

export const useTotalAVAXBalance = () => {
  const { avalancheData } = useMetrics();

  return avalancheData.map((datapoint) => ({
    id: datapoint.id,
    timestamp: datapoint.timestamp,
    AVAXValue: datapoint.treasuryWAVAXMarketValue,
  }));
};

export type TotalAVAXMetric = {
  id: string;
  timestamp: Date;
  AVAXValue: number;
};
