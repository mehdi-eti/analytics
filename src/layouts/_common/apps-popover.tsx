import { useEffect, useState } from 'react';
import { useHover } from '@mantine/hooks';
import { Popover, Button, Grid, ScrollArea } from '@mantine/core';

function AppsPopover() {
  const { hovered: appsHovered, ref: appsRef } = useHover();
  const { hovered: accountHovered, ref: accountRef } = useHover();
  const [{ account, apps }, setState] = useState({
    account: false,
    apps: false,
  });

  useEffect(() => {
    if (appsHovered) setState({ account: false, apps: true });
    if (accountHovered) setState({ account: true, apps: false });
    if (!appsHovered && !accountHovered) setState({ account: false, apps: false });
  }, [appsHovered, accountHovered]);

  return (
    <Popover
      withArrow
      width={832}
      shadow="ml"
      zIndex={10000}
      position="bottom"
      styles={{ dropdown: { height: 400 } }}
    >
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Grid>
          {/* eslint-disable-next-line no-nested-ternary */}
          <Grid.Col span={account ? 8 : apps ? 4 : 6} ref={appsRef}>
            <ScrollArea h={350} className='border border-gray-100'>
              Account
            </ScrollArea>
          </Grid.Col>
          {/* eslint-disable-next-line no-nested-ternary */}
          <Grid.Col span={apps ? 8 : account ? 4 : 6} ref={accountRef}>
            <ScrollArea h={350} className='border border-gray-100'>
              Apps
            </ScrollArea>
          </Grid.Col>
        </Grid>
      </Popover.Dropdown>
    </Popover>
  );
}

export default AppsPopover;
