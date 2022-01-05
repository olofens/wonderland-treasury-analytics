import { useMemo } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import {
  BrightValueText,
  Card,
  CustomToolTip,
  DimmedTitleText,
} from "../../../components";
import { CashYAxis, DateXAxis } from "../../../components/Chart";
import { useMetrics } from "../../../contexts";
import { formatNumber, getCoinColors } from "../../../helpers/utils";
import { TextWrapper } from "../styles";
import { Charts, PopsicleChart } from "./styles";

const RELATIVE_CHART_SOURCES = ["WETHValue", "WBTCValue"];

export const PopsicleV3Visualizer = () => {
  const { popsicleWBTCWETHData } = useMetrics();
  console.log(popsicleWBTCWETHData);
  const currTotal = useMemo(() => {
    const lastDataPoint = popsicleWBTCWETHData[popsicleWBTCWETHData.length - 1];
    const total = lastDataPoint.WBTCValue + lastDataPoint.WETHValue;
    return formatNumber(total);
  }, [popsicleWBTCWETHData]);

  // const relativeData = useMemo(() => {
  //   console.log("before", popsicleWBTCWETHData);
  //   return popsicleWBTCWETHData.map((datapoint) =>
  //     toPercentageValues(datapoint, RELATIVE_CHART_SOURCES)
  //   );
  // }, [popsicleWBTCWETHData]);

  return (
    <Card>
      <TextWrapper>
        <DimmedTitleText>Popsicle WBTC-WETH Position Breakdown</DimmedTitleText>
        <BrightValueText>Total {currTotal}</BrightValueText>
      </TextWrapper>
      <Charts>
        <PopsicleChart>
          <ResponsiveContainer height="90%" width="100%">
            <AreaChart
              data={popsicleWBTCWETHData}
              margin={{
                top: 10,
                right: 10,
                left: -5,
                bottom: 24,
              }}
            >
              <defs>
                {RELATIVE_CHART_SOURCES.map((key) => {
                  const [color1, color2] = getCoinColors(key);
                  return (
                    <linearGradient
                      id={key}
                      key={key}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor={color1} />
                      <stop offset="80%" stopColor={color2} />
                    </linearGradient>
                  );
                })}
              </defs>
              {DateXAxis()}
              {CashYAxis()}

              <Tooltip content={<CustomToolTip />} />
              {RELATIVE_CHART_SOURCES.map((key) => {
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
        </PopsicleChart>
      </Charts>
    </Card>
  );
};
