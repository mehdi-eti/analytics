import { useState } from 'react';
// @mui & Mantine
import Box from '@mui/material/Box';
import { AreaChart } from '@mantine/charts';
import Container from '@mui/material/Container';

import { AreaChartData } from '@/src/_mock';
import PopOverItem from './pop-over';

// ----------------------------------------------------------------------

export default function ChartArea({ hasPopOver = true }: {
  hasPopOver?: boolean
}) {
  const [label, setLabel] = useState('کاربر فعال');

  return (
    <Container className="flex flex-col align-middle justify-around gap-7 bg-white shadow-lg rounded-4" sx={{ padding: "1.25rem" }}>
      <div className="flex gap-4">
        {['کاربر فعال', 'تعداد کلیک ها', 'نشست ها', 'بازدید ها'].map((i, index) => (
          <PopOverItem setLabel={setLabel} label={i} hasPopOver={hasPopOver} key={index} />
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center w-full gap-2 mb-2">
          <strong>{label}</strong>
          <Box
            component="section"
            sx={{ px: 1.5, py: 0.5, backgroundColor: "hsl(var(--chart-2))" }}
          />
        </div>
        <AreaChart
          h={350}
          gridAxis="xy"
          dataKey="day"
          curveType="bump"
          data={AreaChartData}
          series={[{ name: 'تعداد', color: "hsl(var(--chart-2))" }]}
        />
      </div>
    </Container>
  );
}
