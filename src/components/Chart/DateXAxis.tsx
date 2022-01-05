import { XAxis } from "recharts";

const xAxisTickFormatter = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const DateXAxis = () => {
  return (
    <XAxis
      dataKey="timestamp"
      tickFormatter={xAxisTickFormatter}
      minTickGap={25}
      fontSize="13px"
      padding={{ right: 20 }}
      axisLine={false}
      tickLine={false}
    />
  );
};
