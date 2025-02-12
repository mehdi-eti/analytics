import { Dispatch, type MouseEvent, SetStateAction, useState } from 'react';
import Button from '@mui/material/Button';
import { IoMdArrowDropdown } from 'react-icons/io';
import ButtonBase from '@mui/material/ButtonBase';
import { Popper } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { MdKeyboardDoubleArrowDown, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import Collapse from '@mui/material/Collapse';

const items = [
  {
    title: 'برای شما',
    en: 'Suggested',
    children: [
      { title: 'کاربر های فعال', en: 'Active user' },
      { title: 'تعداد کلیک ها', en: 'Key event' },
      { title: 'رویداد های انجام شده', en: 'Event count' },
      { title: 'نشست ها', en: 'Sessions' },
      { title: 'بازدید ها', en: 'views' },
    ],
  },
  {
    title: 'کاربر ها',
    en: 'Users',
    children: [
      { title: 'کاربر های فعال', en: 'Active user' },
      { title: 'تمام کاربر ها', en: 'Total users' },
    ],
  },
];

export default function PopOverItem({
  setLabel,
  label,
  hasPopOver = false,
}: {
  setLabel: Dispatch<SetStateAction<string>>;
  label: string;
  hasPopOver?: boolean;
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [state, setState] = useState({ value: '0', title: label });
  const [openList, setOpenList] = useState('');

  const handleClick = (event: MouseEvent<HTMLElement>) =>
    setAnchorEl(anchorEl ? null : event.currentTarget);

  const handleListClick = (value: string) => {
    if (openList === value) setOpenList('');
    else setOpenList(value);
  };

  const open = Boolean(anchorEl);
  const id = open ? `id-${Math.random().toString(16).slice(2)}` : undefined;

  return (
    <div className="flex flex-col align-start">
      <Button
        type="button"
        aria-describedby={id}
        onClick={(e) => (hasPopOver ? handleClick(e) : null)}
        startIcon={hasPopOver && <IoMdArrowDropdown fontSize="medium" />}
      >
        <span className="mr-2">{state.title}</span>
      </Button>
      <ButtonBase className="mt-2 font-bold" onClick={() => setLabel(state.title)}>
        {state.value}
      </ButtonBase>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start">
        <Box className="border shadow-lg bg-white p-2" width={300}>
          <List>
            {items.map((item, index) => (
              <div key={index}>
                <ListItemButton onClick={() => handleListClick(item.en)} className="">
                  <ListItemText title={item.title} primary={item.title} />
                  {openList === item.en ? (
                    <MdKeyboardDoubleArrowDown />
                  ) : (
                    <MdKeyboardDoubleArrowLeft />
                  )}
                </ListItemButton>
                {item.children.map((c, i) => (
                  <Collapse in={openList === item.en} timeout="auto" unmountOnExit key={i}>
                    <List component="div" disablePadding>
                      <ListItemButton
                        sx={{ pl: 4 }}
                        onClick={() => {
                          setState({ ...state, title: c.title });
                          setOpenList('');
                          setAnchorEl(null);
                          setLabel(c.title);
                        }}
                      >
                        <ListItemText primary={c.title} />
                      </ListItemButton>
                    </List>
                  </Collapse>
                ))}
              </div>
            ))}
          </List>
        </Box>
      </Popper>
    </div>
  );
}
