/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { useState } from "react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useTheme } from "./ThemeProvider";

interface IChartData {
  xData: number;
  visits: number;
}

const chartData: IChartData[] = [
  { xData: 1, visits: 2075 },
  { xData: 2, visits: 13820 },
  { xData: 3, visits: 11700 },
  { xData: 4, visits: 5634 },
  { xData: 5, visits: 13921 },
  { xData: 6, visits: 7480 },
  { xData: 7, visits: 9863 },
  { xData: 8, visits: 2527 },
  { xData: 9, visits: 11542 },
  { xData: 10, visits: 4521 },
  { xData: 11, visits: 10677 },
  { xData: 12, visits: 12390 },
  { xData: 13, visits: 8054 },
  { xData: 14, visits: 14243 },
  { xData: 15, visits: 6738 },
  { xData: 16, visits: 8921 },
  { xData: 17, visits: 13820 },
  { xData: 18, visits: 12035 },
  { xData: 19, visits: 9002 },
  { xData: 20, visits: 11234 },
  { xData: 21, visits: 10715 },
  { xData: 22, visits: 13219 },
  { xData: 23, visits: 9214 },
  { xData: 24, visits: 15462 },
  { xData: 25, visits: 9670 },
  { xData: 26, visits: 14300 },
  { xData: 27, visits: 11092 },
];

const transformData = (data: IChartData[], filter: string) => {
  if (filter === "daily") {
    return data;
  } else if (filter === "weekly") {
    const weeklyData = [];
    for (let i = 0; i < data.length; i += 7) {
      const weekVisits = data
        .slice(i, i + 7)
        .reduce((sum, item) => sum + item.visits, 0);
      weeklyData.push({
        xData: `Week ${Math.floor(i / 7) + 1}`,
        visits: weekVisits,
      });
    }
    return weeklyData;
  } else if (filter === "monthly") {
    const monthlyData = data.reduce((sum, item) => sum + item.visits, 0);
    return [{ xData: "Current Month", visits: monthlyData }];
  }
};

export default function ActivityChart() {
  const [filter, setFilter] = useState("daily");
  const { accent } = useTheme();

  const chartConfig = {
    visits: {
      label: "User Visits",
      color: accent,
    },
  } satisfies ChartConfig;

  const transformedData = transformData(chartData, filter);
  const xAxisFormatter = function (value: any) {
    switch (filter) {
      case "daily":
        return value % 4 == 0 ? (value as string) : "";
      case "weekly":
      case "monthly":
        return value as string;
      default:
        return value as string;
    }
  };
  return (
    <Card
      className="col-span-4 dark:bg-slate-800"
      x-chunk="dashboard-01-chunk-4"
    >
      <CardHeader className="flex flex-row items-center">
        <div className="grid gap-2">
          <CardTitle>Activity</CardTitle>
        </div>
        <Select
          onValueChange={(value) => {
            setFilter(value);
          }}
          name="Frequency Filter"
        >
          <SelectTrigger className="w-[100px] ml-auto gap-1">
            <SelectValue placeholder="Daily" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[190px] w-full">
          <BarChart accessibilityLayer data={transformedData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="xData"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={xAxisFormatter}
              minTickGap={10}
            />
            <YAxis
              dataKey="visits"
              tickLine={true}
              axisLine={false}
              tickFormatter={(value) =>
                value >= 1000 ? `${value / 1000}k` : value
              }
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="visits" fill="var(--color-visits)" radius={10} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
