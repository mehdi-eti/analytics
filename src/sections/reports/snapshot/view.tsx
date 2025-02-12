'use client';

// @mui & Mantine
import Box from '@mui/material/Box';
import { Flex } from '@mantine/core';
import { alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// components
import { useSettingsContext } from 'src/components/settings';
import { ChartBar, ChartArea, ChartUserActive, ChartEvent } from 'src/components/ui';

// ----------------------------------------------------------------------

export default function HomeView() {
  const settings = useSettingsContext();

  return (
    <Container maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4"> گزارش تصویری </Typography>
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
          <ChartArea hasPopOver={false} />
          <div className="mx-2" />
          <ChartBar />
        </Flex>
        <div className="d-flex flex-column mt-5 gap-2">
          <h5>کاربران فعال چگونه ترند می شوند؟</h5>
          <div className="d-flex gap-4">
            <ChartUserActive />
            <ChartEvent />
          </div>
        </div>
      </Box>
    </Container>
);
}
