'use client';

// @mui & Mantine
import { ScrollArea, Select } from '@mantine/core';
import { BarChart } from '@mantine/charts';
import Container from '@mui/material/Container';
// components
import { BarChartData } from 'src/_mock';

// ----------------------------------------------------------------------

export default function ChartBar() {
  return (
    <Container className="bg-white p-5 shadow-lg rounded-4 w-auto">
      <div className="mb-3">
        <span className="border-bottom text-secondary">کاربر های فعال در 30 دقیقه گذشته</span>
        <h1>0</h1>
      </div>
      <div className="d-flex flex-column">
        <span className="text-dark-emphasis mb-2">کاربران فعال در دقیقه</span>
        <BarChart
          w={500}
          h={100}
          dataKey="day"
          tickLine="none"
          gridAxis="none"
          withYAxis={false}
          withXAxis={false}
          data={BarChartData}
          className="border-bottom"
          series={[{ name: 'تعداد کاربر', color: 'violet.6' }]}
        />
      </div>
      <div className="d-flex justify-content-between pt-3">
        <Select
          w={200}
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
            'پلتفرم منبع دوم کاربر',
          ]}
        />
        <Select
          w={200}
          size="xs"
          radius="md"
          variant="filled"
          defaultValue="کاربر فعال"
          data={['کاربر فعال', 'کاربر جدید']}
        />
      </div>
      <div className="d-flex flex-column pt-2">
        <ScrollArea h={250}>
          {[
            { name: 'USA', value: 1 },
            { name: 'Iran', value: 1 }
          ].map((i, index) => (
            <div key={index} className="d-flex justify-content-between p-2 border-bottom">
              <span>{i.name}</span>
              <span>{i.value}</span>
            </div>
          ))}
        </ScrollArea>
      </div>
    </Container>
  );
}
