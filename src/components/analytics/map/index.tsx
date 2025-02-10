import { Chart } from 'react-google-charts';
import React, { useState } from 'react';
import { Select, Table, ScrollArea } from '@mantine/core';

export default function MapChart() {
  const [user, setUser] = useState<string | null>('کاربر فعال');
  const [country, setCountry] = useState<string | null>('کشور');
  const data = [
    ['Country', user],
    ['Germany', 50],
    ['United States', 50],
    ['Canada', 100],
    ['IR', 700],
  ];

  return (
    <div className="flex w-full bg-white shadow p-5 gap-3 justify-around">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3">
          <Select
            w={200}
            size="xs"
            radius="md"
            variant="filled"
            defaultValue="کاربر فعال"
            onChange={setUser}
            value={user || null}
            data={['کاربر فعال', 'کاربر جدید', 'کاربر های برگشتی']}
          />
          <Select
            w={200}
            size="xs"
            radius="md"
            variant="filled"
            defaultValue="کشور"
            onChange={setCountry}
            value={country || null}
            data={['آیدی کشور', 'کشور']}
          />
        </div>
        <ScrollArea h={250}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>کشور</Table.Th>
                <Table.Th className="text-left">{user}</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {data.map((element, i) => {
                if (i !== 0) {
                  return (
                    <Table.Tr key={i + Math.random()}>
                      <Table.Td className="font-bold">{element[0]}</Table.Td>
                      <Table.Td className="text-left text-gray-500">{element[1]}</Table.Td>
                    </Table.Tr>
                  );
                }
              })}
            </Table.Tbody>
          </Table>
        </ScrollArea>
      </div>
      <Chart
        data={data}
        chartType="GeoChart"
        className="bg-transparent"
        options={{
          defaultColor: '#f5f5f5',
          colorAxis: { colors: ['#00b5d5', '#0226ff'] },
        }}
        chartEvents={[
          {
            eventName: 'select',
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper?.getChart();
              const selection = chart?.getSelection();
              if (selection?.length === 0) return;
              const region = data[selection && selection[0].row + 1];
              console.log(`Selected : ${region}`);
            },
          },
        ]}
      />
    </div>
  );
}
