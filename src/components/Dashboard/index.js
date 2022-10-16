import React, { useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './DashboardStyles';
import Details from './Details';
// import Matches from './Matches';
// import Messages from './Messages';
import Points from './Points';
import Posts from './Posts';
import purple from 'assets/purplebg.png';
import {  useNavigate, useParams } from 'react-router-dom';
import Home from "../Dashboard/NewMessage/Home";

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
            style={{
              margin: '0rem 1rem 1rem 1rem',
            }}
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

const Dashboard = () => {
    const classes = styles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const { tab } = useParams();
  const handleChange = (event, newValue) => {
        // console.log('newValue', newValue);
        setValue(newValue);
        switch (newValue) {
          case 0:
            navigate('/dashboard/Posts');
            break;
          case 1:
            navigate('/dashboard/Messages');
            break;
          // case 2:
          //   navigate('/dashboard/Matches');
          //   break;
          case 2:
            navigate('/dashboard/Details');
            // <Link to="/dashboard/Details" />;
            break;
          case 3:
            navigate('/dashboard/Points');
            break;
    
          default:
            break;
        }
      };
      useEffect(() => {
            switch (tab) {
              case 'Posts':
                setValue(0);
                break;
              case 'Messages':
                setValue(1);
                break;
              case 'Details':
                setValue(2);
                break;
              case 'Points':
                setValue(3);
                break;
        
              default:
                setValue(0);
                break;
            }
          }, [tab]);

  return (
    <div
      style={{
        backgroundColor: 'rgb(238 232 232)',
        minHeight: '100vh',
      }}
    >
      <img
        src={purple}
        alt='orange'
        style={{
          width: '100vw',
          height: '20%',
          minHeight: 200,
          marginTop: '-2px',
        }}
      />
      <div className={classes.root}>
        <Paper position='static' style={{ marginLeft: '1rem' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='simple tabs example'
            variant='scrollable'
            scrollButtons='on'
            indicatorColor=''
          >
            <Tab label='Manage my posts' {...a11yProps(0)} />
            <Tab label='Messages' {...a11yProps(1)} />
            <Tab label='My details' {...a11yProps(2)} />
            <Tab label='Points' {...a11yProps(3)} />
          </Tabs>
        </Paper>

        <TabPanel value={value} index={0}>
          <Posts />
          {/* Post */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Home />
          {/* <Header /> */}
          {/* Message */}
        </TabPanel>
        {/* <TabPanel value={value} index={2}>
          <Matches />
        </TabPanel> */}
        <TabPanel value={value} index={2}>
          <Details />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Points />
          {/* Points */}
        </TabPanel>
      </div>
    </div>
  );
};
export default Dashboard;
