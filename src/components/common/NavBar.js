
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Badge,
} from '@material-ui/core';
import { Box, Button, Typography } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { NavLink } from 'react-router-dom';
import useStyles from './NavBarStyles';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import globalStyles from 'styles/commonStyles';
import clsx from 'clsx';
import Menu from './Menu';
import { toast } from 'react-toastify';
import CookieConsent from 'react-cookie-consent';
// import {auth, logout} from "../../Firebse/firebase";
import {auth,logout} from "../../Firebse/firebase";

const Navbar = (props) => {
  const classes = useStyles();
  const classes_g = globalStyles();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const user = sessionStorage.getItem('Auth Token');
  const toggleSideBar = () => {
    setOpen((prev) => !prev);
  };
  const handlePost = () => {
    navigate('/dashboard/Posts');
  };
  const handleLogout = () => {
    setOpen(false);
    toast.success('Logout Successful');
    logout(auth);
  };

  const handleReadChat = async () => {
    // try {
    //   await makeReq(`/chats/read`, {}, 'PATCH');
    // } catch (err) {
    //   handleCatch(err);
    // }
    console.log('readchat');
  };

  return (
    <div className={classes.root}>
      {/* {loading && <Loading />} */}
      <AppBar position='fixed' className={classes.Appbar}>
        <Toolbar>
          <div
          // className={`${classes_g.flexAlignDisp} ${classes.navSearch}`}
          >
            <Box
              display='flex'
              alignItems='center'
              // className={classes_g.flexAlignDisp}
              sx={{ columnGap: 5 }}
              mt={1}
            >
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label='show more'
                  // aria-controls={mobileMenuId}
                  aria-haspopup='true'
                  onClick={toggleSideBar}
                  style={{
                    marginLeft: 'auto',
                    color: '#dcd9d4',
                  }}
                >
                  <MenuOpenIcon fontSize='small' />
                </IconButton>
              </div>
              <Box
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Logo w={35} h={35} comp='nav' />
                <NavLink to='/'>BOTTE </NavLink>
              </Box>
            </Box>
          </div>

          <div className={classes.sectionDesktop}>
            <Box className={classes.itemsParent}>
              <Box
                className={clsx(
                  classes_g.linkHover,
                  classes.itemsChild
                )}
              >
                <Typography variant='body1' noWrap>
                  <NavLink to='/'>Home </NavLink>
                </Typography>
                <Typography variant='body1' noWrap>
                  <NavLink to='/about'>About</NavLink>
                </Typography>
                <Typography variant='body1' noWrap>
                  <NavLink to='/working'>How It Works</NavLink>
                </Typography>
                <Typography variant='body1' noWrap>
                  <NavLink to='/faq'>FAQ</NavLink>
                </Typography>
                <Typography variant='body1' noWrap>
                  <NavLink to='/contact'>Contact Us</NavLink>
                </Typography>
                {user ? (
                  <>
                    <NavLink
                      to='/dashboard/Messages'
                      onClick={handleReadChat}
                    >
                      {/* Messages */}
                      <Badge
                        className={classes.badge}
                        // badgeContent={notify}
                      >
                        Messages
                      </Badge>
                    </NavLink>
                    <Box className={classes.btnBox}>
                      <Typography
                        variant='body1'
                        noWrap
                        // variant='outlined'
                        className={clsx(
                          classes.customNavBtn,
                          classes.navBtn
                        )}
                        // size='medium'
                        onClick={() => navigate('/dashboard/posts')}
                      >
                        Post a Request
                      </Typography>
                    </Box>
                    <Menu />
                  </>
                ) : (
                  <>
                    <Typography variant='body1' noWrap>
                      <NavLink to='/auth/login'>Log in</NavLink>
                    </Typography>
                    <Typography variant='body1' noWrap>
                      <NavLink to='/auth/signup'>Register</NavLink>
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.navFixed} />
      <Drawer
        anchor='left'
        className={classes.drawer}
        onClose={toggleSideBar}
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        {/* <div className={classes_dr.drawerHeader}> */}
        <Box
          px={2}
          display='flex'
          alignItems='center'
          justifyContent='space-between'
        >
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Logo w={35} h={35} comp='nav' />

            <NavLink to='/' style={{ color: 'white' }}>
              BOTTE{' '}
            </NavLink>
          </Box>

          <IconButton onClick={toggleSideBar} size='small'>
            <NavigateBeforeIcon />
          </IconButton>
        </Box>
        <Box mx={2} sx={{ backgroundColor: '#fff' }}>
          <Divider />
        </Box>

        <Box mt={4} />

        <List className={classes.drawerList}>
          <NavLink to='/' className={classes_g.linkHover}>
            <ListItem button>
              <ListItemIcon style={{ minWidth: 35 }}></ListItemIcon>
              <Typography variant='subtitle1'>Home</Typography>
            </ListItem>
          </NavLink>
          <NavLink to='/about' className={classes_g.linkHover}>
            <ListItem button>
              <ListItemIcon style={{ minWidth: 35 }}></ListItemIcon>
              <Typography variant='subtitle1'>About</Typography>
            </ListItem>
          </NavLink>

          <NavLink to='/working' className={classes_g.linkHover}>
            <ListItem button>
              <ListItemIcon style={{ minWidth: 35 }}></ListItemIcon>
              <Typography variant='subtitle1'>
                How It Works
              </Typography>
            </ListItem>
          </NavLink>

          <NavLink to='/faq' className={classes_g.linkHover}>
            <ListItem button>
              <ListItemIcon style={{ minWidth: 35 }}></ListItemIcon>
              <Typography variant='subtitle1'>FAQ</Typography>
            </ListItem>
          </NavLink>

          {user ? (
            <>
              <Divider />
              <NavLink
                to='/dashboard/Posts'
                className={classes_g.linkHover}
              >
                <ListItem button>
                  <ListItemIcon
                    style={{ minWidth: 35 }}
                  ></ListItemIcon>
                  <Typography variant='subtitle1'>
                    Manage my posts
                  </Typography>
                </ListItem>
              </NavLink>
              <NavLink
                to='/dashboard/Messages'
                className={classes_g.linkHover}
              >
                <ListItem button>
                  <ListItemIcon
                    style={{ minWidth: 35 }}
                  ></ListItemIcon>
                  <Typography variant='subtitle1'>
                    Messages
                  </Typography>
                </ListItem>
              </NavLink>
              <NavLink
                to='/dashboard/Details'
                className={classes_g.linkHover}
              >
                <ListItem button>
                  <ListItemIcon
                    style={{ minWidth: 35 }}
                  ></ListItemIcon>
                  <Typography variant='subtitle1'>
                    My details
                  </Typography>
                </ListItem>
              </NavLink>
              <NavLink
                to='/dashboard/Points'
                className={classes_g.linkHover}
              >
                <ListItem button>
                  <ListItemIcon
                    style={{ minWidth: 35 }}
                  ></ListItemIcon>
                  <Typography variant='subtitle1'>Points</Typography>
                </ListItem>
              </NavLink>
              <NavLink
                to='/dashboard/Points'
                className={classes_g.linkHover}
              >
                <ListItem button onClick={handlePost}>
                  <ListItemIcon
                    style={{ minWidth: 35 }}
                  ></ListItemIcon>
                  <Typography variant='subtitle1'>
                    Post a Request
                  </Typography>
                </ListItem>
              </NavLink>
              <NavLink to='/logout' className={classes_g.linkHover}>
                <ListItem button>
                  <ListItemIcon
                    style={{ minWidth: 35 }}
                  ></ListItemIcon>
                  <Typography
                    variant='subtitle1'
                    onClick={handleLogout}
                  >
                    Logout
                  </Typography>
                </ListItem>
              </NavLink>
            </>
          ) : (
            <>
              <NavLink
                to='/auth/login'
                className={classes_g.linkHover}
              >
                <ListItem button>
                  <ListItemIcon
                    style={{ minWidth: 35 }}
                  ></ListItemIcon>
                  <Typography variant='subtitle1'>Log in</Typography>
                </ListItem>
              </NavLink>

              <NavLink
                to='/auth/signup'
                className={classes_g.linkHover}
              >
                <ListItem button>
                  <ListItemIcon
                    style={{ minWidth: 35 }}
                  ></ListItemIcon>
                  <Typography variant='subtitle1'>
                    Register
                  </Typography>
                </ListItem>
              </NavLink>
            </>
          )}
        </List>
        <Divider />
      </Drawer>
      <CookieConsent
        debug={true}
        style={{ background: '#4F4E4D', height: '70px' }}
        buttonStyle={{
          background: '#e0760b',
          color: 'white',
          padding: '10px',
        }}
        buttonText='GOT IT'
        cookieName='bottieCookie'
        expires={365}
      >
        This site is using Cookie to improve your experience on our
        website. To find out more , read our{' '}
        <a
          href='/privacy'
          style={{
            color: 'white',
            display: 'contents',
            alignItems: 'center',
            backgroundColor: 'red',
          }}
        >
          privacy policy{' '}
        </a>
      </CookieConsent>
    </div>
  );
};
export default Navbar;
