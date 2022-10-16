import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
// import Grow from '@mui/material/Grow';
// import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import ReorderIcon from '@mui/icons-material/Reorder';
import { Box, Fade } from '@material-ui/core';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import styles from './NavBarStyles';
import {auth, logout} from "../../Firebse/firebase";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Menu() {
  const classes = styles();
  const theme = useTheme();

  // const dispatch = useDispatch();

  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleMenuClick = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }

    const { link } = event.currentTarget.dataset;
    console.log('link', link);

    setOpen(false);
    if (link === '/logout') {
      // * Logout User
    } else {
      navigate(link);
    }
  };

  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogout = () => {
    toast.success('Logout Successful');
    logout(auth);
    // dispatch(logout());
  };

  return (
    <Stack direction='row' spacing={2}>
      <div>
        <Button
          style={
            lg
              ? {
                  color: '#fff',
                  fontFamily: `'Montserrat', sans-serif !important`,
                  fontSize: '16px',
                }
              : {
                  color: '#fff',
                  fontSize: '12px',
                  fontFamily: `'Montserrat', sans-serif !important`,
                }
          }
          ref={anchorRef}
          id='composition-button'
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup='true'
          onClick={handleToggle}
          endIcon={<ReorderIcon />}
        >
          Menu
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement='bottom-start'
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Fade {...TransitionProps}>
              <Box className={classes.backPaper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id='composition-menu'
                    aria-labelledby='composition-button'
                    onKeyDown={handleListKeyDown}
                    className={classes.dropdown}
                  >
                    <Box>
                      <MenuItem
                        onClick={handleMenuClick}
                        data-link='/dashboard/Posts'
                      >
                        Manage my posts
                      </MenuItem>
                      <ArrowForwardIosSharpIcon />
                    </Box>
                    <Box>
                      <MenuItem
                        onClick={handleMenuClick}
                        data-link='/dashboard/Messages'
                      >
                        Messages{' '}
                      </MenuItem>
                      <ArrowForwardIosSharpIcon />
                    </Box>
                    {/* <Box>
                      <MenuItem
                        onClick={handleMenuClick}
                        data-link='/dashboard/Matches'
                      >
                        Matches
                      </MenuItem>
                      <ArrowForwardIosSharpIcon />
                    </Box> */}
                    <Box>
                      <MenuItem
                        onClick={handleMenuClick}
                        data-link='/dashboard/Details'
                      >
                        My details
                      </MenuItem>
                      <ArrowForwardIosSharpIcon />
                    </Box>
                    <Box>
                      <MenuItem
                        onClick={handleMenuClick}
                        data-link='/dashboard/Points'
                      >
                        Points
                      </MenuItem>
                      <ArrowForwardIosSharpIcon />
                    </Box>
                    <Box>
                      <MenuItem
                        onClick={handleLogout}
                        data-link='/logout'
                      >
                        Logout
                      </MenuItem>
                      <ArrowForwardIosSharpIcon />
                    </Box>
                  </MenuList>
                </ClickAwayListener>
              </Box>
            </Fade>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
