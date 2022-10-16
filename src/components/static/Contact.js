import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'start',
    marginBottom: '4rem',
    minHeight: '85vh',
    padding: '1rem 5rem 1rem',
    '& div': {
      marginTop: '1rem',
    },
    '& h6': {
      color: '#4F4E4D',
      fontSize: '23px',
      fontWeight: 600,
    },
    '& p': {
      color: '#4F4E4D',
      fontWeight: 400,
    },
    [theme.breakpoints.up('lg')]: {
      padding: '1rem 4rem 1rem',
      '& p': {
        fontSize: '19px',
      },
      '& div': {
        marginTop: '2rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 3rem 1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 2rem 1rem',
      '& p': {
        fontSize: '12px',
      },
      '& div': {
        marginTop: '0.75rem',
      },
    },
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Box>
        <Typography variant='h6'>Contact Us</Typography>
      </Box>
      <Box>
        <Typography variant='body2'>
          For enquiries regarding press, feedback and business
          relations please write to us at
        </Typography>
        <a
          href='mailto: hello@botte.co.uk'
          style={{ textDecoration: 'underline', color: '#111' }}
        >
          {' '}
          hello@botte.co.uk
        </a>
      </Box>
      <Box>
        <Typography variant='body2'>
          If you have queries regarding transactions or resolving any
          issues please visit our <br />
          <span style={{ textDecoration: 'underline' }}>
            customer service helpdesk.
          </span>
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
