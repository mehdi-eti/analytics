'use client';

import React from 'react';
// @mui & Mantine & MapChart
import Box from '@mui/material/Box';
import { Flex } from '@mantine/core';
import Grid from '@mui/material/Grid';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { TbDeviceDesktopAnalytics } from 'react-icons/tb';
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

// ----------------------------------------------------------------------



export default function HomeView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> خانه </Typography>
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
        <div className="mt-5 d-flex flex-column">
          <h4>دسترسی های اخیر</h4>
          <Grid container spacing={1} mt={1}>
            {['', '', '', ''].map((i) => (
              <Grid item xs={3} key={i}>
                <div className="bg-white border shadow rounded">
                  <div className="d-flex p-3 gap-3">
                    <TbDeviceDesktopAnalytics fontSize={40} className="text-cyan-600" />
                    <div className="d-flex flex-column">
                      <h4 className="text-info-emphasis">رویداد</h4>
                      <span className="text-secondary fs-6">دیروز</span>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <div className="d-flex flex-column mt-5 gap-2">
          <h4>پیشنهاد برای شما</h4>
          <div className="d-flex gap-4">
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
            </Grid>
          </div>
        </div>
      </Box>
    </Container>
  );
}
