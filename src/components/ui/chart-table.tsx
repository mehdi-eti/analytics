import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { Input, NativeSelect, Table } from '@mantine/core';

import { tableChartData } from 'src/_mock';

// ----------------------------------------------------------------------

export default function ChartTable() {
  const [value, setValue] = useState('');

  return (
    <div className="bg-white shadow p-5 flex flex-col gap-3">
      <div className="flex w-full border-b p-3 justify-between items-center">
        <div className="flex w-full items-center mt-2 gap-3">
          <span className="font-bold text-gray-500">ردیف در هر صفحه</span>
          <NativeSelect data={['10', '25', '50', '100', '250']} />
        </div>
        <Input
          w={500}
          value={value}
          variant="filled"
          placeholder="جستوجو"
          className="flex items-center"
          rightSectionPointerEvents="auto"
          leftSection={<CiSearch size={20} />}
          onChange={(event) => setValue(event.currentTarget.value)}
          rightSection={
            value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined
          }
        />
      </div>
      <Table striped highlightOnHover withColumnBorders>
        <Table.Thead>
          <Table.Tr>
            <Table.Th className="text-right font-bold">آدرس</Table.Th>
            <Table.Th className="text-right font-bold">تعداد بازدید</Table.Th>
            <Table.Th className="text-right font-bold">نشست ها</Table.Th>
            <Table.Th className="text-right font-bold">تعداد کلیک</Table.Th>
            <Table.Th className="text-right font-bold">تعداد کاربر</Table.Th>
            <Table.Th className="text-right font-bold">کاربر جدید</Table.Th>
            <Table.Th className="text-right font-bold">کاربر قدیمی</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {tableChartData.map((d, i) => (
            <Table.Tr key={i}>
              <Table.Td>{d.website_url}</Table.Td>
              <Table.Td>{d.visits}</Table.Td>
              <Table.Td>{d.sessions}</Table.Td>
              <Table.Td>{d.clicks}</Table.Td>
              <Table.Td>{d.users}</Table.Td>
              <Table.Td>{d.new_users}</Table.Td>
              <Table.Td>{d.returning_users}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
}
