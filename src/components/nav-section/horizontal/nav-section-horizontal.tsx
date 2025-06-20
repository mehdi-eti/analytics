import { memo } from 'react';
// @mui
import Stack from '@mui/material/Stack';
// theme
import { hideScroll } from 'src/theme/css';
//
import { NavSectionProps, NavListProps, NavConfigProps } from '../types';
import { navHorizontalConfig } from '../config';
import NavList from './nav-list';

// ----------------------------------------------------------------------

function NavSectionHorizontal({ data, config, sx, ...other }: NavSectionProps) {
  return (
    <Stack
      direction="row"
      sx={{
        mx: 'auto',
        ...hideScroll.y,
        ...sx,
      }}
      {...other}
    >
      {data.map((group, index) => (
        <Group
          items={group.items}
          key={group.subheader || index}
          config={navHorizontalConfig(config)}
        />
      ))}
    </Stack>
  );
}

export default memo(NavSectionHorizontal);

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
