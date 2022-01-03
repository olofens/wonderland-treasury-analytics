import React from "react";
import { GrowthMetric, TREASURY_TOOLKIT } from "../../constants/tools";
import { TooltipContainer } from "./styles";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const CustomToolTip = ({ active, payload: rechartData, label }: any) => {
  if (!active || !rechartData) return null;

  const date = new Date(label);
  const formattedDate = `${days[date.getDay()]} ${date.getDate()} ${
    months[date.getMonth()]
  } ${date.getFullYear()}`;

  return (
    <TooltipContainer>
      {rechartData.map((dataPoint: any, i: number) => {
        const shortName =
          TREASURY_TOOLKIT[dataPoint.name as keyof GrowthMetric].shortName;
        const formattedUSDvalue = dataPoint.value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        });
        return <p key={i}>{`${shortName} : ${formattedUSDvalue}`}</p>;
      })}
      <p>{`${formattedDate}`}</p>
    </TooltipContainer>
  );
};
