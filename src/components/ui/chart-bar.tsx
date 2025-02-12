'use client';

// @mui & Mantine
import { ScrollArea, Select } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import Container from '@mui/material/Container';
// components
import { BarChartData } from '@/src/_mock';

// ----------------------------------------------------------------------

export default function ChartBar() {
  return (
    <Container className="bg-white w-full p-4 shadow-lg rounded-4">
      <div className="mb-3">
        <span className="border-b text-gray-500">کاربر های فعال در 30 دقیقه گذشته</span>
        <h1 className="text-lg font-bold">0</h1>
      </div>
      <div className="flex flex-col">
        <span className="text-gray-500 mb-2">کاربران فعال در دقیقه</span>
        <BarChart
          w="100%"
          h={100}
          dataKey="day"
          tickLine="none"
          gridAxis="none"
          withYAxis={false}
          withXAxis={false}
          data={BarChartData}
          className="border-b"
          series={[{ name: 'تعداد کاربر', color: 'hsl(var(--chart-2))' }]}
        />
      </div>
      <div className="flex justify-between pt-3">
        <Select
          w={150}
          size="xs"
          radius="md"
          variant="filled"
          defaultValue="مخاطب"
          data={[
            'مخاطب',
            'شهر/کشور',
            'کشور',
            'اولین کمپین کاربر',
            'رسانه کاربر اول',
            'منبع کاربر اول',
            'اولین پلتفرم منبع کاربر',
          ]}
        />
        <Select
          w={150}
          size="xs"
          radius="md"
          variant="filled"
          defaultValue="کاربر فعال"
          data={['کاربر فعال', 'کاربر جدید']}
        />
      </div>
      <div className="flex flex-col pt-2">
        <ScrollArea h={250}>
          {[
            { name: 'USA', value: 1 },
            { name: 'Iran', value: 1 },
          ].map((i, index) => (
            <div key={index} className="flex justify-between p-2 border-b">
              <span>{i.name}</span>
              <span>{i.value}</span>
            </div>
          ))}
        </ScrollArea>
      </div>
    </Container>
  );
}
