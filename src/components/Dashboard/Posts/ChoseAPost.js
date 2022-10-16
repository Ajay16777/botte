/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Button, Box, Typography } from '@material-ui/core';
import styles from '../DashboardStyles';
import useCommonStyles from 'styles/commonStyles';
import cube from 'assets/cube.svg';
import gray from 'assets/one.svg';
import world from 'assets/two.svg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import clsx from 'clsx';

const ChoseAPost = ({ validateStep, handleBack }) => {
  const classes = styles();
  const classes_g = useCommonStyles();
  const [isDeliveryRequest, setIsDeliveryRequest] = useState(false);
  const handleTrue = () => {
        setIsDeliveryRequest(true);
      };
      const handleFalse = () => {
        setIsDeliveryRequest(false);
      };
    
      const handleNext = () => {
        validateStep(isDeliveryRequest);
      };
    
      const handleCancel = () => {
        handleBack();
      };
  return (
    <div className={classes.postRoot}>
       <Typography variant='subtitle1'>
         Tell us What You are Posting
       </Typography>

       <Box className={classes.choseBody}>
        <Box className={classes.section}>
           <Box
            className={clsx(
              classes.smallGray,
              isDeliveryRequest && classes.hover
            )}
            onClick={handleTrue}
          >
            <Box p={1}>
              <Box>
                {!isDeliveryRequest ? (
                  <img
                    src={gray}
                    alt='orange'
                    style={{
                      height: '20px',
                      float: 'right',
                    }}
                  />
                ) : (
                  <CheckCircleIcon
                    fontSize='medium'
                    className={classes.muiIcon}
                  />
                )}
              </Box>
            </Box>
            <Box className={classes.icon}>
              <img
                src={cube}
                alt='orange'
                style={{ height: '35px' }}
              />
              <Typography variant='subtitle1'>
                Delivery Request
              </Typography>
            </Box>
          </Box>
          <Typography variant='body2'>
            Select to list request that you want others to fulfill for
            you
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Box
            className={clsx(
              classes.smallGray,
              !isDeliveryRequest && classes.hover
            )}
            onClick={handleFalse}
          >
            <Box p={1}>
              {isDeliveryRequest ? (
                <img
                  src={gray}
                  alt='orange'
                  style={{
                    height: '20px',
                    float: 'right',
                  }}
                />
              ) : (
                <CheckCircleIcon
                  fontSize='medium'
                  className={classes.muiIcon}
                />
              )}
            </Box>
            <Box className={classes.icon}>
              <img
                src={world}
                alt='orange'
                style={{ height: '35px' }}
              />
              <Typography variant='subtitle1'>
                Courier Travels
              </Typography>
            </Box>
          </Box>
          <Typography variant='body2'>
            Select to list your itinerary and detail out what you are
            willing to carry or deliver.
          </Typography>
        </Box>
      </Box>
      <Box className={classes.choseBtn}>
        <Button
          variant='contained'
          className={classes.whiteBtn}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          variant='contained'
          className={classes_g.greenButton}
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </div>
  )
}

export default ChoseAPost
