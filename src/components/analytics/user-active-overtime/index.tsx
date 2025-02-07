import { LineChart } from '@mantine/charts';

const LineChartData = [
  {
    date: 'Mar 22',
    seven: 2890,
    one: 2338,
    thirty: 2452,
  },
  {
    date: 'Mar 23',
    seven: 2756,
    one: 2103,
    thirty: 2402,
  },
  {
    date: 'Mar 24',
    seven: 3322,
    one: 986,
    thirty: 1821,
  },
  {
    date: 'Mar 25',
    seven: 3470,
    one: 2108,
    thirty: 2809,
  },
  {
    date: 'Mar 26',
    seven: 3129,
    one: 1726,
    thirty: 2290,
  },
];

const Dot = ({ bg }: { bg: string }) => (
  <div
    style={{
      borderRadius: '50%',
      height: '6px',
      marginRight: '5px',
      minWidth: '6px',
      width: '6px',
      backgroundColor: bg,
    }}
  />
);

export default function ChartUserActive({ h = 300, w = 300 }: { h?: number; w?: number }) {
  return (
    <div className="d-flex flex-column bg-white shadow p-5 gap-3">
      <p className="fw-bold">فعالیت کاربر در طول زمان</p>
      <div className="d-flex gap-5">
        <div className="d-flex flex-column gap-2">
          <div className="d-flex">
            <Dot bg="rgb(26, 115, 232)" />
            <div className="">
              <p style={{ width: 'max-content' }} className="m-0">
                30 روز
              </p>
              <strong>4</strong>
            </div>
          </div>
          <div className="d-flex">
            <Dot bg="rgb(71, 71, 235)" />
            <div className="">
              <p style={{ width: 'max-content' }} className="m-0">
                7 روز
              </p>
              <strong>4</strong>
            </div>
          </div>
          <div className="d-flex">
            <Dot bg="rgb(114, 7, 150)" />
            <div className="">
              <p style={{ width: 'max-content' }} className="m-0">
                1 روز
              </p>
              <strong>4</strong>
            </div>
          </div>
        </div>
        <LineChart
          h={h}
          w={w}
          gridAxis="none"
          dataKey="date"
          curveType="linear"
          data={LineChartData}
          series={[
            { name: 'one', color: 'rgb(114, 7, 150)' },
            { name: 'seven', color: 'rgb(71, 71, 235)' },
            { name: 'thirty', color: 'rgb(26, 115, 232)' },
          ]}
        />
      </div>
    </div>
  );
}
