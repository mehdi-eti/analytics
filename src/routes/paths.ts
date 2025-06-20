// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  minimalUI: 'https://mui.com/store/items/minimal-dashboard/',
  // AUTH
  auth: {
    jwt: {
      login: `${ROOTS.AUTH}/jwt/login`,
      register: `${ROOTS.AUTH}/jwt/register`,
    },
  },
  // DASHBOARD
  dashboard: {
    root: ROOTS.DASHBOARD,
    three: `${ROOTS.DASHBOARD}/reports`,
    group: {
      root: `${ROOTS.DASHBOARD}/reports`,
      five: `${ROOTS.DASHBOARD}/reports/five`,
      six: `${ROOTS.DASHBOARD}/reports/six`,
    },
  },
};
