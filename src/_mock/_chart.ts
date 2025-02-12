import { range } from 'lodash';

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