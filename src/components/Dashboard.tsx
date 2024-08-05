import {
  ChevronRight,
  Crosshair,
  HandPlatter,
  Pizza,
  Play,
  Triangle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import ActivityChart from "./ActivityChart";
import RecentOrdersTable from "./RecentOrdersTable";

import CustomerFeedback from "./CustomerFeedback";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartConfig, ChartContainer } from "./ui/chart";
import { useTheme } from "./ThemeProvider";

export default function Dashboard() {
  const { theme, accent } = useTheme();
  const chartData = [{ browser: "safari", visitors: 70, fill: accent }];
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;
  let currentTheme = theme;
  if (currentTheme == "system") {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-slate-100 dark:bg-black">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <div className="grid gap-4 ">
        <div className="grid gap-4  lg:grid-cols-6 xl:grid-col-6 ">
          <Card x-chunk="dashboard-01-chunk-0" className="dark:bg-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Button
                  variant="outline"
                  size="icon"
                  className=" col-span-1 w-12 h-12 border-blue-100 bg-blue-100 hover:bg-blue-100 dark:bg-blue-900 dark:border-blue-900"
                >
                  <img
                    src="/images/ordered.png"
                    alt="ordered"
                    className="w-8 h-8 icon-blue-filter"
                  />
                </Button>
                <p className="text-lg">Total Orders</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div className="text-3xl font-bold">75</div>
              <div className="text-sm  text-muted-foreground flex justify-between items-center">
                <Play
                  className="size-4 mx-1"
                  color="lightgreen"
                  fill="lightgreen"
                  transform="rotate(270)"
                />
                <p className="font-semibold text-green-400">3%</p>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1" className="dark:bg-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Button
                  variant="outline"
                  size="icon"
                  className=" col-span-1 w-12 h-12 border-green-100 bg-green-100 hover:bg-green-100 dark:bg-green-800 dark:border-green-800"
                >
                  <img
                    src="/images/delivered.png"
                    alt="delivered"
                    className="w-8 h-8 icon-green-filter"
                  />
                </Button>
                <p className="text-lg">Total Delivered</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div className="text-3xl font-bold">70</div>
              <div className="text-sm  text-muted-foreground flex justify-between items-center">
                <Play
                  className="size-4 mx-1"
                  color="red"
                  fill="red"
                  transform="rotate(90)"
                />
                <p className="font-semibold text-red-400">3%</p>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2" className="dark:bg-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Button
                  variant="outline"
                  size="icon"
                  className=" col-span-1 w-12 h-12 border-red-100 bg-red-100 hover:bg-red-100 dark:bg-red-900 dark:border-red-900"
                >
                  <img
                    src="/images/cancelled.png"
                    alt="cancelled"
                    className="w-8 h-8 icon-red-filter"
                  />
                </Button>
                <p className="text-lg">Total Cancelled</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div className="text-3xl font-bold">05</div>
              <div className="text-sm  text-muted-foreground flex justify-between items-center">
                <Play
                  className="size-4 mx-1"
                  color="lightgreen"
                  fill="lightgreen"
                  transform="rotate(270)"
                />
                <p className="font-semibold text-green-400">3%</p>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3" className="dark:bg-slate-800">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <Button
                  variant="outline"
                  size="icon"
                  className=" col-span-1 w-12 h-12 bg-pink-200 hover:bg-pink-200 border-pink-200 dark:bg-pink-900 dark:border-pink-900"
                >
                  <img
                    src="/images/revenue.png"
                    alt="revenue"
                    className="w-8 h-8 icon-magenta-filter"
                  />
                </Button>
                <p className="text-lg">Total Revenue</p>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <div className="text-3xl font-bold">$12k</div>
              <div className="text-sm  text-muted-foreground flex justify-between items-center">
                <Play
                  className="size-4 mx-1"
                  color="red"
                  fill="red"
                  transform="rotate(90)"
                />
                <p className="font-semibold text-red-400">3%</p>
              </div>
            </CardContent>
          </Card>
          <Card
            x-chunk="dashboard-01-chunk-4"
            className="flex flex-col dark:bg-slate-800 col-span-2"
          >
            <CardHeader className="inline pt-2 pb-2">
              <CardTitle className="text-sm font-medium inline">
                Net Profit
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-3 flex justify-between items-center">
              <div>
                <div className="text-4xl font-bold mb-4">$6759.25</div>
                <span className="flex space-x-1 green-400 items-center">
                  <Triangle
                    fill="lightgreen"
                    stroke="lightgreen"
                    className="size-4"
                    color="lightgreen"
                  />
                  <p className="text-sm text-green-400">3%</p>
                </span>
              </div>
              <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px] h-28 w-28"
              >
                <RadialBarChart
                  data={chartData}
                  startAngle={90}
                  endAngle={-162}
                  innerRadius={50}
                  outerRadius={80}
                >
                  <PolarGrid
                    gridType="circle"
                    radialLines={false}
                    stroke="none"
                    className="first:fill-muted last:fill-background  dark:first:fill-gray-600 dark:last:fill-gray-800"
                    polarRadius={[56, 44]}
                  />
                  <RadialBar dataKey="visitors" background cornerRadius={10} />
                  <PolarRadiusAxis
                    tick={false}
                    tickLine={false}
                    axisLine={false}
                  >
                    <Label
                      content={({ viewBox }) => {
                        if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                          return (
                            <text
                              x={viewBox.cx}
                              y={viewBox.cy}
                              textAnchor="middle"
                              dominantBaseline="middle"
                            >
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) - 10}
                                className="fill-foreground text-2xl font-bold"
                              >
                                {chartData[0].visitors.toLocaleString() + " %"}
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 15}
                                className="fill-muted-foreground text-xs"
                              >
                                Goal
                              </tspan>
                              <tspan
                                x={viewBox.cx}
                                y={(viewBox.cy || 0) + 28}
                                className="fill-muted-foreground text-xs"
                              >
                                Completed
                              </tspan>
                            </text>
                          );
                        }
                      }}
                    />
                  </PolarRadiusAxis>
                </RadialBarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
        <div className="grid xl:grid-cols-6 gap-4">
          <ActivityChart />
          <Card
            x-chunk="dashboard-01-chunk-6"
            className="dark:bg-slate-800 col-span-4 xl:col-span-2"
          >
            <CardContent className="grid gap-2 px-4 py-9">
              <div className="flex justify-between items-center px-4 hover:bg-red-200 dark:hover:bg-red-700 cursor-pointer p-2 rounded-sm">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    name="goals"
                    className="rounded-full w-14 h-14 bg-red-100 hover:bg-red-100 dark:bg-red-900 dark:border-red-900"
                  >
                    <Crosshair
                      className="size-5"
                      color={currentTheme == "dark" ? "#FC8181" : "red"}
                    />
                  </Button>
                  <h3 className="font-medium">Goals</h3>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  name="chevron right"
                  className="rounded-full w-8 h-8 dark:bg-slate-700"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center px-4 hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer p-2 rounded-sm">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    name="popular dishes"
                    className="rounded-full w-14 h-14 bg-blue-100 hover:bg-blue-100 dark:bg-blue-900 dark:border-blue-900"
                  >
                    <Pizza
                      className="size-5"
                      color={currentTheme == "dark" ? "#63B3ED" : "blue"}
                    />
                  </Button>
                  <h3 className="font-medium">Popular Dishes</h3>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  name="chevron right"
                  className="rounded-full w-8 h-8 dark:bg-slate-700"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
              <div className="flex justify-between items-center px-4 hover:bg-teal-200 dark:hover:bg-teal-700 cursor-pointer p-2 rounded-sm">
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    name="Menus"
                    className="rounded-full w-14 h-14 bg-teal-100 hover:bg-teal-100 dark:bg-teal-900 dark:border-teal-900"
                  >
                    <HandPlatter
                      className="size-5"
                      color={currentTheme == "dark" ? "#81E6D9" : "teal"}
                    />
                  </Button>
                  <h3 className="font-medium">Menus</h3>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  name="chevron right"
                  className="rounded-full w-8 h-8 dark:bg-slate-700"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid xl:grid-cols-6 gap-4">
          <Card
            className="col-span-4 dark:bg-slate-800"
            x-chunk="dashboard-01-chunk-4"
          >
            <CardHeader className="flex flex-row items-center">
              <div className="grid gap-2">
                <CardTitle>Recent Orders</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <RecentOrdersTable />
            </CardContent>
          </Card>
          <Card
            x-chunk="dashboard-01-chunk-7"
            className="flex flex-col h-full dark:bg-slate-800 xl:col-span-2 col-span-4"
          >
            <CardHeader>
              <CardTitle>Customer's Feedback</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <CustomerFeedback />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
