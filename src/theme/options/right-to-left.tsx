import { useEffect } from 'react';
// rtl
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
// emotion
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// ----------------------------------------------------------------------

type Props = {
  themeDirection: 'rtl' | 'ltr';
  children: React.ReactNode;
};

export default function RTL({ children, themeDirection }: Props) {
  useEffect(() => {
    document.dir = themeDirection;
  }, [themeDirection]);

  const cacheRtl = createCache({
    key: 'rtl',
    prepend: true,
    stylisPlugins: [prefixer, rtlPlugin],
  });

  if (themeDirection === 'rtl') {
    // @ts-ignore
    return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
  }

  return <>{children}</>;
}

// ----------------------------------------------------------------------

export function direction(themeDirection: 'rtl' | 'ltr') {
  const theme = {
    direction: themeDirection,
  };

  return theme;
}
