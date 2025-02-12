import { ScrollArea, Select, Table } from '@mantine/core';
import { useState } from 'react';

const rows = [{ event: 'تعداد بازدید', count: 5 }].map((element, i) => (
  <Table.Tr key={i}>
    <Table.Td className="font-bold">{element.event}</Table.Td>
    <Table.Td className="text-left text-gray-500">{element.count}</Table.Td>
  </Table.Tr>
));

export default function ChartSession() {
  const [session, setSession] = useState<string | null>('نشست');
  const [groupSession, setGroupSession] = useState<string | null>('گروه کانال پیش‌فرض جلسه');

  return (
    <div className="bg-white shadow p-5 flex flex-col gap-3">
      <div className="flex justify-between">
        <Select
          w={200}
          size="xs"
          radius="md"
          variant="filled"
          defaultValue="نشست"
          onChange={setSession}
          value={session || null}
          data={['نشست', 'نشست درگیر']}
        />
        <Select
          w={200}
          size="xs"
          radius="md"
          variant="filled"
          onChange={setGroupSession}
          value={groupSession || null}
          defaultValue="گروه کانال پیش‌فرض جلسه"
          data={['گروه کانال پیش‌فرض جلسه', 'رسانه جلسه', 'کمپین جلسه', 'منبع جلسه']}
        />
      </div>
      <div style={{ height: 295 }}>
        <ScrollArea h={250}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>{groupSession}</Table.Th>
                <Table.Th className="text-left">{session}</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody className="h-auto">{rows}</Table.Tbody>
          </Table>
        </ScrollArea>
      </div>
    </div>
);
}
