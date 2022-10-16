import React from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@material-ui/core';
import styles from './Styles';
import { Link } from 'react-router-dom';

const About = () => {
  const classes = styles();

  return (
    <Container className={classes.root}>
      <Box>
        <Typography variant='h5'>About BOTTE</Typography>
      </Box>
      <Box>
        <Typography variant='body1'>
          Who we are - our philosophy
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          Simply put, we are a platform that helps you get your stuff
          where you want it, when you want it, hassle free without
          breaking the bank. Botte is a play on the German for
          ‘messenger’ which aptly captures our essence. We are a
          technology driven platform poised to simplify deliveries
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1'>
          How it started - a bit of history/backstory
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          A few years ago, Ayo and Stephen noticed they were getting
          several requests from family and friends to assist with
          couriering small items. However, there was some frustration
          with date mismatch leading to long waits or discovering too
          late about journeys. Our light-bulb moment was in realising
          that multiple flights go between these locations with lots
          of passengers not fully utilising their luggage allowance.
        </Typography>
      </Box>
      <Box>
        <Typography variant='body1'>
          What we do - our approach
        </Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          We leverage existing journeys to courier parcels by
          utilising unused luggage space of regular travellers. The
          power is yours - you can courier parcels and you can send
          them.
        </Typography>
      </Box>
      <Box>
        <Button
          variant='standard'
          style={{
            textDecoration: 'underline',
            color: '#6FB462',
            padding: 0,
          }}
          component={Link}
          to='/working'
        >
          Join us today - here’s how it works
        </Button>
      </Box>
    </Container>
  );
};

export default About;
