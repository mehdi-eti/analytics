// globals css
import './globals.css';
// scroll bar
import 'simplebar-react/dist/simplebar.min.css';

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';
// Import styles of packages that you've installed.
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
// ----------------------------------------------------------------------
import type { ReactNode } from 'react';

import Script from 'next/script';
// theme
import ThemeProvider from 'src/theme';
import { iranYekan } from 'src/theme/typography';
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
  DirectionProvider,
} from '@mantine/core';
// components
import ProgressBar from 'src/components/progress-bar';
import MotionLazy from 'src/components/animate/motion-lazy';
import { SettingsProvider, SettingsDrawer } from 'src/components/settings';
// auth
import { AuthProvider, AuthConsumer } from 'src/auth/context/jwt';


// ----------------------------------------------------------------------

export const metadata = {
  title: 'Minimal UI Kit',
  description:
    'The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style',
  keywords: 'react,material,kit,application,dashboard,admin,template',
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: [
    {
      rel: 'icon',
      url: '/favicon/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/favicon/apple-touch-icon.png',
    },
  ],
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr" dir="rtl" className={iranYekan.className} {...mantineHtmlProps}>
      <head>
        <Script src="https://cdn.tailwindcss.com" />
        <ColorSchemeScript />
      </head>
      <body>
        <DirectionProvider initialDirection="rtl">
          <MantineProvider>
            <AuthProvider>
              <SettingsProvider
                defaultSettings={{
                  themeMode: 'light', // 'light' | 'dark'
                  themeDirection: 'rtl', //  'rtl' | 'ltr'
                  themeContrast: 'default', // 'default' | 'bold'
                  themeLayout: 'horizontal', // 'vertical' | 'horizontal' | 'mini'
                  themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
                  themeStretch: false,
                }}
              >
                <ThemeProvider>
                  <MotionLazy>
                    <SettingsDrawer />
                    <ProgressBar />
                    <AuthConsumer>{children}</AuthConsumer>
                  </MotionLazy>
                </ThemeProvider>
              </SettingsProvider>
            </AuthProvider>
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
