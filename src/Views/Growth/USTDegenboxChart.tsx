import React from "react";
import { formatCash } from "./helpers";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { USTDegenboxDataPoint } from "./types";
import { ChartCard } from "./ChartCard";

export interface USTDegenboxChartProps {
  sources: (keyof USTDegenboxDataPoint)[];
  data: USTDegenboxDataPoint[];
  title: string;
}

const yAxisTickFormatter = (value: number) => {
  return `$${formatCash(value)}`;
};

const xAxisTickFormatter = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

export const USTDegenboxChart = ({
  sources,
  data,
  title,
}: USTDegenboxChartProps) => {
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid />
      <XAxis dataKey="id" />
      <YAxis
        dataKey="collateral"
        type="number"
        tickFormatter={yAxisTickFormatter}
      />
      <Tooltip />
      <Legend />
      <Bar dataKey="collateral" fill="#82ca9d" />
      <Bar dataKey="debt" fill="#8884d8" />
    </BarChart>
  );
};
