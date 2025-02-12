'use client';

import { useLayoutEffect } from 'react';
import axios from 'axios';
// auth
import { AuthGuard } from 'src/auth/guard';
// components
import DashboardLayout from 'src/layouts/dashboard';
import { useAtom } from 'jotai/index';
import { StoreType } from '@/src/types';
import atomStore from 'src/store';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [, setStore] = useAtom<StoreType>(atomStore);

// Render Apps
  useLayoutEffect(() => {
    const options = {
      method: 'GET',
      url: 'http://localhost:3000/apps?user_id=user_001',
      headers: { 'content-type': 'application/json' },
    };

    (async () => {
      try {
        const { data } = await axios.request(options);
        setStore((prev) => ({ ...prev, apps: data, active_app: data[0].name }));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [setStore]);

  return (
    <AuthGuard>
      <DashboardLayout>{children}</DashboardLayout>
    </AuthGuard>
  );
}
