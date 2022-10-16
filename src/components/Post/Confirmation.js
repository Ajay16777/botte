import React from 'react';

import { Box, Typography, Button, Divider } from '@material-ui/core';
import glolabStyles from 'styles/commonStyles';
import styles from './PostStyles';
import { useNavigate } from 'react-router-dom';

const Confirmation = ({ validateStep, post }) => {
  const classes = styles();
  const classes_g = glolabStyles();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Box style={{ height: '100vh' }}>
        <Box className={classes.msgBox}>
          <Typography variant='Button' style={{ color: '#6FB462' }}>
            Success!
          </Typography>
          <Divider />
          <Typography
            style={{ display: 'block', margin: '0.5rem 0rem 0.5rem' }}
          >
            Your messsage has been sent
          </Typography>
          <Button
            variant='contained'
            className={classes_g.greenButton}
            onClick={handleBack}
          >
            Back to Listing
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Confirmation;
