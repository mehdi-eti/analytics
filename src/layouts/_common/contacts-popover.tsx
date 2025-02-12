import { m } from 'framer-motion';
// @mui
import { Avatar, Divider } from '@mantine/core';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

// components
import Iconify from 'src/components/iconify';
import Scrollbar from 'src/components/scrollbar';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import { useAtom } from 'jotai/index';
import { StoreType } from 'src/types';
import atomStore from 'src/store';

// ----------------------------------------------------------------------

export default function ContactsPopover() {
  const popover = usePopover();
  const [store] = useAtom<StoreType>(atomStore);
  const users = store.apps.filter((f) => f.name === store.active_app);

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        color={popover.open ? 'inherit' : 'default'}
        onClick={popover.onOpen}
        sx={{
          ...(popover.open && {
            bgcolor: (theme) => theme.palette.action.selected,
          }),
        }}
      >
        <Iconify icon="solar:users-group-rounded-bold-duotone" width={24} />
      </IconButton>

      {users.length > 0 && (
        <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 320 }}>
          <Typography variant="h6" sx={{ p: 1.5 }}>
            کاربر ها<Typography component="span">({users[0].access.length})</Typography>
          </Typography>

          <Scrollbar sx={{ height: 320 }}>
            {users[0].access.map((u, i) => (
              <div key={u.id}>
                <MenuItem sx={{ p: 1 }}>
                  <Avatar radius="xl" className="ml-3">
                    {u?.email[0]}
                  </Avatar>
                  <div className="flex flex-col">
                    <h2 className="font-bold text-base">{u.name}</h2>
                    <span className="text-gray-500 text-sm">{u.email}</span>
                  </div>
                </MenuItem>
                {i + 1 !== users[0].access.length && <Divider />}
              </div>
            ))}
          </Scrollbar>
        </CustomPopover>
      )}
    </>
  );
}
