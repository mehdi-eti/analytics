import { ScrollArea, Table } from '@mantine/core';

const elements = [
  { event: 'تعداد بازدید', count: 5 },
  { event: 'اسکرول', count: 20 },
  { event: 'تعامل کاربر', count: 100 },
  { event: 'اولین بازدید', count: 9 },
  { event: 'اولین نشست', count: 0 },
];
const rows = elements.map((element, i) => (
  <Table.Tr key={i}>
    <Table.Td className="fw-bold">{element.event}</Table.Td>
    <Table.Td className="text-start text-gray">{element.count}</Table.Td>
  </Table.Tr>
));

export default function ChartEvent() {
  return (
    <div className="bg-white shadow p-5 d-flex flex-column gap-3">
      <p className="fw-bold">شمارش رویداد با نام رویداد</p>
      <div style={{ height: 300 }}>
        <ScrollArea h={250}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>رویداد</Table.Th>
                <Table.Th className="text-start">تعداد</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
}
