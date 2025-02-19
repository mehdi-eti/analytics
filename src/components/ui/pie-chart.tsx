import type { ReactNode } from 'react';
import { useMemo } from 'react';
import { useAtom } from 'jotai';
import { format } from 'date-fns-jalali';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from 'src/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from 'src/components/ui/chart';
import atomStore from 'src/store';

type ChartDataType = { browser: string; visitors: number; fill: string };
type PieChartType = {
  label: ReactNode;
  chartConfig: ChartConfig;
  chartData: ChartDataType[];
};

export function PieCharts({ chartConfig, chartData, label }: PieChartType) {
  const [{ date }] = useAtom(atomStore);
  const totalVisitors = useMemo(
    () => chartData.reduce((acc, curr) => acc + curr.visitors, 0),
    [chartData]
  );

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{label}</CardTitle>
        <CardDescription>
          {date?.from ? (
            date.to ? (
              <strong>
                {format(date.from, 'yyyy MMMM d')} - {format(date.to, 'yyyy MMMM d')}
              </strong>
            ) : (
              <strong>{format(date.from, 'yyyy MMMM d')}</strong>
            )
          ) : (
            <span>Pick a date</span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => (
                  <>
                    {viewBox && 'cx' in viewBox && 'cy' in viewBox && (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Visitors
                        </tspan>
                      </text>
                    )}
                  </>
                )}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 7 days
        </div>
      </CardFooter>
    </Card>
  );
}
