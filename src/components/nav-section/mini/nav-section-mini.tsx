import { memo } from 'react';
import Stack from '@mui/material/Stack';
//
import { NavSectionProps, NavListProps, NavConfigProps } from '../types';
import { navMiniConfig } from '../config';
import NavList from './nav-list';

// ----------------------------------------------------------------------

function NavSectionMini({ data, config, sx, ...other }: NavSectionProps) {
  return (
    <Stack sx={sx} {...other}>
      {data.map((group, index) => (
        <Group key={group.subheader || index} items={group.items} config={navMiniConfig(config)} />
      ))}
    </Stack>
  );
}

export default memo(NavSectionMini);

// ----------------------------------------------------------------------

type GroupProps = {
  items: NavListProps[];
  config: NavConfigProps;
};

function Group({ items, config }: GroupProps) {
  return (
    <>
      {items.map((list) => (
        <NavList
          depth={1}
          data={list}
          config={config}
          hasChild={!!list.children}
          key={list.title + list.path}
        />
      ))}
    </>
  );
}
