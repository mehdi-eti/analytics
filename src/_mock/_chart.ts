import { range } from 'lodash';
import { ChartConfig } from '@/src/components/ui/chart';

export const AreaChartData = [...range(1, 31).map((r) => ({ day: r, "تعداد": r }))];
export const BarChartData = [...range(1, 31).map((r) => ({ day: `در ${r} دقیقه`, 'تعداد کاربر': r }))];
export const tableChartData = [
  {
    website_url: '/',
    visits: 1050,
    sessions: 890,
    clicks: 730,
    users: 450,
    new_users: 200,
    returning_users: 250,
  },
  {
    website_url: 'shop/',
    visits: 850,
    sessions: 720,
    clicks: 620,
    users: 380,
    new_users: 150,
    returning_users: 230,
  },
  {
    website_url: 'cars/',
    visits: 620,
    sessions: 540,
    clicks: 480,
    users: 290,
    new_users: 120,
    returning_users: 170,
  },
  {
    website_url: 'card/',
    visits: 1200,
    sessions: 1100,
    clicks: 980,
    users: 580,
    new_users: 250,
    returning_users: 330,
  },
];
export const deviceData = [
  { browser: 'laptop', visitors: 275, fill: 'var(--color-laptop)' },
  { browser: 'mobile', visitors: 200, fill: 'var(--color-mobile)' },
  { browser: 'tablet', visitors: 287, fill: 'var(--color-tablet)' },
  { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
];
export const deviceConfig = {
  visitors: {
    label: 'Visitors',
  },
  laptop: {
    label: 'Laptop',
    color: 'hsl(var(--chart-1))',
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))',
  },
  tablet: {
    label: 'Tablet',
    color: 'hsl(var(--chart-3))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;
export const osData = [
  { browser: 'android', visitors: 275, fill: 'var(--color-android)' },
  { browser: 'ios', visitors: 200, fill: 'var(--color-ios)' },
  { browser: 'windows', visitors: 287, fill: 'var(--color-windows)' },
  { browser: 'macos', visitors: 173, fill: 'var(--color-macos)' },
  { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
];
export const osConfig = {
  visitors: {
    label: 'Visitors',
  },
  android: {
    label: 'Android',
    color: 'hsl(var(--chart-1))',
  },
  ios: {
    label: 'Ios',
    color: 'hsl(var(--chart-2))',
  },
  windows: {
    label: 'Windows',
    color: 'hsl(var(--chart-3))',
  },
  macos: {
    label: 'Macos',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;
export const browserData = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: 'var(--color-safari)' },
  { browser: 'firefox', visitors: 287, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 190, fill: 'var(--color-other)' },
];
export const browserConfig = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;