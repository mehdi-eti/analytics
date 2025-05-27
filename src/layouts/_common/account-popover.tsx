import { useAtom } from 'jotai';
import { m } from 'framer-motion';
// @mui
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// store
import atomStore from 'src/store';
// routes
import { useRouter } from 'src/routes/hook';
// hooks
// auth
import { useAuthContext } from 'src/auth/hooks';
// components
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';

// ----------------------------------------------------------------------

const OPTIONS = [
  {
    label: 'Home',
    linkTo: '/',
  },
  {
    label: 'Profile',
    linkTo: '/#1',
  },
  {
    label: 'Settings',
    linkTo: '/#2',
  },
];

// ----------------------------------------------------------------------

export default function AccountPopover() {
  const router = useRouter();

  const [{ user }] = useAtom(atomStore);

  const { logout } = useAuthContext();

  const popover = usePopover();

  const handleLogout = async () => {
    try {
      await logout();
      popover.onClose();
      router.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickItem = (path: string) => {
    popover.onClose();
    router.push(path);
  };

  return (
    <>
      <IconButton
        component={m.button}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={popover.onOpen}
        sx={{
          width: 40,
          height: 40,
          background: (theme) => alpha(theme.palette.grey[500], 0.08),
          ...(popover.open && {
            background: (theme) =>
              `linear-gradient(135deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
          }),
        }}
      >
        <Avatar
          alt={user?.name}
          sx={{
            width: 36,
            height: 36,
            border: (theme) => `solid 2px ${theme.palette.background.default}`,
          }}
        />
      </IconButton>

      <CustomPopover open={popover.open} onClose={popover.onClose} sx={{ width: 300, p: 0 }}>
        <div className="flex gap-2 p-4">
          <Avatar
            alt={user?.name}
            sx={{
              border: (theme) => `solid 2px ${theme.palette.background.default}`,
            }}
          />
          <Box>
            <Typography variant="subtitle2" noWrap>
              {user?.displayName}
            </Typography>

            <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
              {user?.email}
            </Typography>
          </Box>
        </div>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={handleLogout}
          sx={{ m: 1, fontWeight: 'fontWeightBold', color: 'error.main' }}
        >
          Logout
        </MenuItem>
      </CustomPopover>
    </>
  );
}
