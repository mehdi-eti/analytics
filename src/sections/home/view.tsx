'use client';

import { useState } from 'react';
// @mui & Mantine & MapChart
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import { Flex, Grid } from '@mantine/core';
// components
import { useSettingsContext } from 'src/components/settings';
import {
  ChartBar,
  ChartArea,
  ChartTable,
  ChartEvent,
  ChartSession,
  ChartUserActive,
  ChartMap,
  PieCharts,
  DatePickerWithRange,
} from 'src/components/ui';

// ----------------------------------------------------------------------

export default function HomeView() {
  const settings = useSettingsContext();
  const [value, setValue] = useState('');

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
            <ChartMap />
          </Grid.Col>
          <Grid.Col span={4}>
            <PieCharts />
          </Grid.Col>
          <Grid.Col span={4}>
            <PieCharts />
          </Grid.Col>
          <Grid.Col span={4}>
            <PieCharts />
          </Grid.Col>
          <Grid.Col span={12}>
            <ChartTable />
          </Grid.Col>
        </Grid>
      </Box>
    </Container>
  );
}
