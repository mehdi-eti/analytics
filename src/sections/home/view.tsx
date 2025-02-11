'use client';

// @mui & Mantine & MapChart
import Box from '@mui/material/Box';
import { Flex } from '@mantine/core';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
// components
import { useSettingsContext } from 'src/components/settings';
import {
  ChartBar,
  ChartArea,
  ChartUserActive,
  ChartSession,
  ChartEvent,
  ChartMap
} from 'src/components/analytics';
import { DatePickerWithRange, PieCharts } from 'src/components/ui';

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
        <Flex direction="row">
          <ChartArea />
          <div className="mx-2" />
          <ChartBar />
        </Flex>
        <div className="flex flex-col mt-5 gap-2">
          <div className="flex gap-4">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <ChartUserActive w={500} />
              </Grid>
              <Grid item xs={4}>
                <ChartSession />
              </Grid>
              <Grid item xs={4}>
                <ChartEvent />
              </Grid>
              <Grid item xs={12}>
                <ChartMap />
              </Grid>
              <Grid item xs={4}>
                <PieCharts />
              </Grid>
              <Grid item xs={4}>
                <PieCharts />
              </Grid>
              <Grid item xs={4}>
                <PieCharts />
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
}
