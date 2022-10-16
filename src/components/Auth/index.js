/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  AppBar,
  Paper,
  Divider,
  Container,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './AuthStyles';
import Login from './Login';
import SignUp from './Signup';

import { useNavigate, useParams } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
        // style={{
        //   margin: '0rem 1rem 1rem 1rem',
        // }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Auth = () => {
  const classes = styles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const { tab } = useParams();

  const handleChange = (event, newValue) => {
    // setValue(newValue);
    navigate(`/auth/${newValue === 0 ? 'Signup' : 'login'}`);
  };

  useEffect(() => {
    switch (tab) {
      case 'login':
        setValue(1);
        break;
      case 'Signup':
        setValue(0);
        break;
      default:
        break;
    }
  }, [tab]);

  return (
    <div style={{ backgroundColor: '#EDEDED' }}>
      <Box
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div className={classes.root}>
          <Paper position='static' style={{ height: '40px' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='simple tabs example'
              variant='fullWidth'
              indicatorColor=''
            >
              <Tab label='REGISTER' {...a11yProps(0)} />
              <Tab label='LOG IN' {...a11yProps(1)} />
            </Tabs>
          </Paper>
          <TabPanel value={value} index={0}>
            <Paper className={classes.paper}>
              <SignUp />
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Paper className={classes.paper}>
              <Login />
            </Paper>
          </TabPanel>
        </div>
      </Box>
    </div>
  );
};

export default Auth;
