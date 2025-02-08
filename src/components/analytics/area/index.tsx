'use client';

import { useState } from 'react';
// @mui & Mantine
import Box from '@mui/material/Box';
import { AreaChart } from '@mantine/charts';
import Container from '@mui/material/Container';
import { DtPicker } from 'react-calendar-datetime-picker';

import { AreaChartData } from 'src/_mock';
import PopOverItem from './pop-over';
import { ChartAreaType } from './types';

// ----------------------------------------------------------------------

export default function ChartArea({ hasPopOver = true }: ChartAreaType) {
  const [date, setDate] = useState(null);
  const [label, setLabel] = useState('کاربر فعال');

  return (
    <Container className="d-flex flex-column justify-content-center align-content-center bg-white p-4 shadow-lg rounded-4">
      <div className="d-flex gap-4 mb-5">
        {['کاربر فعال', 'تعداد کلیک ها', 'نشست ها', 'بازدید ها'].map((i, index) => (
          <PopOverItem setLabel={setLabel} label={i} hasPopOver={hasPopOver} key={index} />
        ))}
      </div>
      <div className="d-flex justify-content-center text-center w-100 gap-2 mb-2">
        {label}
        <Box
          component="section"
          sx={{ px: 1.5, py: 0.5, backgroundColor: 'var(--mantine-color-violet-6)' }}
        />
      </div>
      <AreaChart
        h={300}
        gridAxis="xy"
        dataKey="day"
        curveType="bump"
        data={AreaChartData}
        series={[{ name: 'تعداد', color: 'violet' }]}
      />
      <div className="my-5" />
      <Box style={{width:`${date ? '45%' : '30%'}`}}>
        <DtPicker
          todayBtn
          local="fa"
          showWeekend
          type="range"
          clockLabel="month"
          onChange={setDate}
          placeholder="زمان را انتخاب کنید"
          inputClass="border-0 bg-body-tertiary p-4 rounded w-100"
        />
      </Box>
    </Container>
  );
}
