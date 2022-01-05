import React, { useCallback, useRef } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { CustomToolTip } from "../../components";
import { ChartCard } from "./ChartCard";
import { getCoinColors } from "../../helpers/utils";
import { CashYAxis, DateXAxis } from "../../components/Chart";

export interface GrowthChartProps {
  sources: string[]; // just get the datapoints
  data: any[];
  title: string;
}

export const GrowthChart = ({ sources, data, title }: GrowthChartProps) => {
  const calculateTotal = useCallback(
    (index: number) => {
      const datapoint = data[index];
      const valuesToSum = sources
        .map((key) => datapoint[key])
        .filter((value) => value != null);
      // @ts-ignore
      const sum: number = valuesToSum.reduce((prev, next) => prev + next, 0);
      return (
        "$" +
        Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(sum)
      );
    },
    [data, sources]
  );

  const initValue = useRef(calculateTotal(data.length - 1));
  const valueRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = useCallback(
    (moveData: any) => {
      if (!valueRef.current) return;
      if (moveData.isTooltipActive) {
        // we're hovering something, lets calculate new totals
        valueRef.current.innerText = calculateTotal(
          moveData.activeTooltipIndex
        );
      } else {
        // we stopped hovering, reset to latest index
        valueRef.current.innerText = calculateTotal(data.length - 1);
      }
    },
    [calculateTotal, data.length]
  );

  return (
    <ChartCard title={title} valueRef={valueRef} initValue={initValue.current}>
      <ResponsiveContainer height="90%" width="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -5,
            bottom: 24,
          }}
          onMouseMove={handleMouseMove}
        >
          <defs>
            {sources.map((key) => {
              const [color1, color2] = getCoinColors(key);
              return (
                <linearGradient id={key} key={key} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={color1} />
                  <stop offset="80%" stopColor={color2} />
                </linearGradient>
              );
            })}
          </defs>
          {DateXAxis()}
          {CashYAxis()}

          <Tooltip content={<CustomToolTip />} />
          {sources.map((key) => {
            return (
              <Area
                type="monotone"
                key={key}
                dataKey={key}
                stackId="1"
                stroke="#000"
                strokeWidth={0}
                fill={`url(#${key})`}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};
