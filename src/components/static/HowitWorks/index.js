import React from 'react';
import styles from './Styles';
import { Box, Container, Typography } from '@material-ui/core';
import fastTime from 'assets/fast-time.png';
import parcel from 'assets/parcel.png';
import savemoney from 'assets/save-money.png';
import collaboration from 'assets/collaboration.png';
import passiveIncome from 'assets/passive-income.png';

const HowitWorks = () => {
  const classes = styles();
  return (
    <Container className={classes.root}>
      <Box>
        <Typography variant='h5'>How It Works</Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          If you’ve ever considered sending a small item with a friend
          of a friend/colleague or family member who happens to be
          travelling to the destination that is close to your
          recipient, then you already understand our model. Here at
          BOTTE you can be a parcel sender or courier.
        </Typography>
      </Box>
      <Box className={classes.videoBox}> </Box>
      <Box>
        <Typography variant='body2'>
          #1 As a Sender, search for available couriers based on
          desired origin and destination points and filter by date or
          set up a delivery request and the system will match you to
          the most suitable couriers available.
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          #2 As a Courier, simply enter your location, spare luggage
          capacity, item preference or exclusions and travel itinerary
          which will all be anonymised until you accept a gig. You
          will be matched with parcels senders based on your journey
          plan.
        </Typography>
      </Box>
      <Box
        className={classes.flexb}
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <Typography variant='body2'>
          <span style={{ textDecoration: 'underline' }}>
            Quick and Hassle Free Service
          </span>
          <br />
          No need to queue, no long waits. Enjoy fast deliveries.
        </Typography>

        <img src={fastTime} alt='clock' className={classes.img} />
      </Box>
      <Box className={classes.flexb}>
        <img src={parcel} alt='clock' className={classes.img} />
        <Typography variant='body2'>
          <span style={{ textDecoration: 'underline' }}>
            Secure and Personalised Service
          </span>
          <br />
          Know the location of your package at no extra cost.
          Experience true human touch when your queries are resolved.
        </Typography>
      </Box>
      <Box
        className={classes.flexb}
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <Typography variant='body2'>
          <span style={{ textDecoration: 'underline' }}>
            Cost Effective Option
          </span>
          <br />
          Relish exceptional service at exciting prices. Unbeatable
          value, unforgettable experience.
        </Typography>
        <img src={savemoney} alt='clock' className={classes.img} />
      </Box>
      <Box className={classes.flexb}>
        <img
          src={collaboration}
          alt='clock'
          className={classes.img}
        />
        <Typography variant='body2'>
          <span style={{ textDecoration: 'underline' }}>
            Community
          </span>
          <br />
          Access a friendly community of individuals with shared
          values, culture and a willingness to help with your delivery
          requirements.
        </Typography>
      </Box>
      <Box
        className={classes.flexb}
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <Typography variant='body2'>
          <span style={{ textDecoration: 'underline' }}>
            Passive Income
          </span>
          <br />
          It’s never been easier to earn in the gig economy. Make some
          extra cash when you travel.
        </Typography>
        <img
          src={passiveIncome}
          alt='clock'
          className={classes.img}
        />
      </Box>
    </Container>
  );
};

export default HowitWorks;
