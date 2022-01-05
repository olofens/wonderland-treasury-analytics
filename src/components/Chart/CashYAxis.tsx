import { YAxis } from "recharts";
import { formatCash } from "../../helpers/utils";

const yAxisTickFormatter = (value: number) => {
  return `$${formatCash(value)}`;
};

export const CashYAxis = () => {
  return (
    <YAxis
      tickFormatter={yAxisTickFormatter}
      axisLine={false}
      tickLine={false}
      fontSize="13px"
    />
  );
};
