'use client';

// @mui & Mantine & MapChart
import { lazy, Suspense } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mantine/core';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { TfiAndroid } from 'react-icons/tfi';
import { TiDeviceLaptop } from 'react-icons/ti';
import { BsBrowserChrome } from 'react-icons/bs';

// components
import { useSettingsContext } from 'src/components/settings';
import {
  ChartBar,
  ChartArea,
  ChartTable,
  ChartEvent,
  ChartSession,
  ChartUserActive,
  PieCharts,
  DatePickerWithRange,
  ChartLoader,
} from 'src/components/ui';
import { osConfig, osData, browserData, browserConfig, deviceData, deviceConfig } from 'src/_mock';

// ----------------------------------------------------------------------
const ChartMap = lazy(() => import('src/components/ui/chart-map'));
// ----------------------------------------------------------------------

export default function HomeView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <div className="w-full border-b p-3">
        <DatePickerWithRange />
      </div>
      <Box
        sx={{
          p: 5,
          mt: 5,
          width: 1,
          borderRadius: 2,
          bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
          border: (theme) => `dashed 1px ${theme.palette.divider}`,
        }}
      >
        <Grid>
          <Grid.Col span={8}>
            <ChartArea />
          </Grid.Col>
          <Grid.Col span={4}>
            <ChartBar />
          </Grid.Col>
          <Grid.Col span={4}>
            <ChartUserActive w="100%" />
          </Grid.Col>
          <Grid.Col span={4}>
            <ChartSession />
          </Grid.Col>
          <Grid.Col span={4}>
            <ChartEvent />
          </Grid.Col>
          <Grid.Col span={12}>
            <Suspense fallback={<ChartLoader />}>
              <ChartMap />
            </Suspense>
          </Grid.Col>
          <Grid.Col span={4}>
            <PieCharts
              chartConfig={osConfig}
              chartData={osData}
              label={
                <div className="flex gap-2 justify-center align-middle items-center">
                  <TfiAndroid size={30} />
                  <h1 className="text-xl font-bold">OS</h1>
                </div>
              }
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <PieCharts
              chartConfig={browserConfig}
              chartData={browserData}
              label={
                <div className="flex gap-2 justify-center align-middle items-center">
                  <BsBrowserChrome size={30} />
                  <strong className="text-xl font-bold">Browser</strong>
                </div>
              }
            />
          </Grid.Col>
          <Grid.Col span={4}>
            <PieCharts
              chartConfig={deviceConfig}
              chartData={deviceData}
              label={
                <div className="flex gap-2 justify-center align-middle items-center">
                  <TiDeviceLaptop size={30} />
                  <strong className="text-xl font-bold">Device</strong>
                </div>
              }
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <ChartTable />
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
}
