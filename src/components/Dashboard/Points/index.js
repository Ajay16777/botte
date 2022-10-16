/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './PointsStyles';
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
} from '@material-ui/core';
import coin1 from 'assets/coin.svg';
import coin2 from 'assets/coin-1.svg';
import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Points = () => {
  const classes = styles();
  // const { user } = useSelector((st) => st.auth);

  // console.log('user', user);

  return (
    <Box mt={3}>
      <Box className={classes.root}>
        <Box>
          <Typography variant='subtitle1'>POINTS</Typography>
          <Typography variant='body1'>Manage your points</Typography>
        </Box>
        <Box className={classes.greyBox}>
          <Box className={classes.text}>
            <Typography
              variant='body1'
              style={{
                color: '#fff',
                fontSize: '15px',
              }}
            >
              You currently have{' '}
              <span style={{ fontSize: '50px' }}>789</span>
              points
            </Typography>
          </Box>
          <Box
            style={{
              position: 'relative',
              right: '30px',
            }}
          >
            <img
              src={coin1}
              className={`${classes.images} ${classes.img1}`}
              alt='coin1'
            />
            <img
              src={coin2}
              className={`${classes.images} ${classes.img2}`}
              alt='coin2'
            />
          </Box>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Box p={1}>
              <Typography
                variant='body1'
                style={{ color: '#EA6A11', marginBottom: '1rem' }}
              >
                WHAT TO DO WITH THE POINTS
              </Typography>
              <Typography
                variant='body2'
                style={{ paddingRight: '1rem' }}
              >
                What to do with the points Great news you have been
                advanced 2 points. After you accrue 100 points you can
                redeem it once the app Launches: this could be up to
                10% off your your next transaction.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box p={1}>
              <Typography
                variant='body1'
                style={{ color: '#EA6A11', marginBottom: '1rem' }}
              >
                HOW TO EARN MORE POINTS
              </Typography>
              <Typography
                variant='body2'
                style={{ paddingRight: '1rem' }}
              >
                You can start earning points right away. Grow your
                network
              </Typography>
              <Typography
                variant='body2'
                style={{ marginTop: '0.5rem' }}
              ></Typography>
              Share the link below{' '}
              <Link
                to='www.botte.co.uk/username'
                style={{ textDecoration: 'underline', color: '#000' }}
              >
                www.botte.co.uk/username
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box p={1}>
              <Typography
                variant='body1'
                style={{ color: '#EA6A11', marginBottom: '1rem' }}
              >
                LOYALTY PROGRAM
              </Typography>
              <Typography
                variant='body2'
                style={{ paddingRight: '1rem' }}
              >
                Keep earning and build on your loyalty points which
                unlocks various platform benefits
                <br /> -stay tuned!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Points;
