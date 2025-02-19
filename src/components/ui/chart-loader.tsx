import { Loader } from '@mantine/core';

export default function ChartLoader() {
  return (
    <div className="flex w-full bg-white justify-center items-center h-80">
      <Loader color="blue" />
    </div>
  );
}
