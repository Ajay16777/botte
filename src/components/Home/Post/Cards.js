/* eslint-disable no-unused-vars */
import React, {useEffect, useState,memo, useMemo } from 'react';
import Card from './PostCard';
import {
  Box,
  Grid,
  Button,
  Typography,
  // MenuItem,
  // Menu,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core';
import globalStyles from 'styles/commonStyles';
// import { Posts } from 'data';

import styles from './CardStyles';
import Popover from '@material-ui/core/Popover';
import PopupState, {
  bindPopover,
  bindTrigger,
} from 'material-ui-popup-state';
import { Skeleton } from '@material-ui/lab';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import PostCard from './PostCard';

const Cards = memo(({ requests, loading }) => {
  const classes = styles();
  const classes_g = globalStyles();
  const location = useLocation();

const handlePreviousPage = () => {
  console.log("hello");
};
const handleNextPage = () => {
  console.log("hello");
};
const priceFilter = () => {
  console.log("hello");
};
const handlePriceFilter = () => {
  console.log("hello");
};


  return (
    <>
      <Box mt={5}>
        <Box className={classes_g.flexs} mt={1} mb={2}>
          <Box className={classes.PaginationBox}>
            <Typography variant='subtitle1'>
              {/* {filteredPosts?.length} */}
               Results
            </Typography>
            <Typography variant='subtitle1'>-</Typography>
            <Typography variant='subtitle1'>
              Page 1
              {/* {page} of{' '} */}
              {/* {Math.ceil(filteredPosts.length / rowsPerPage)} */}
            </Typography>
            <Typography
              variant='subtitle1'
              className={classes_g.underline}
              onClick={handlePreviousPage}
            >
              Previous
            </Typography>
            <Typography
              variant='subtitle1'
              className={classes_g.underline}
              onClick={handleNextPage}
            >
              Next
            </Typography>
          </Box>

          <Box>
            <PopupState
              variant='popover'
              popupId='demo-popup-popover'
            >
              {(popupState) => (
                <div>
                  <Typography
                    variant='body1'
                    className={classes.sortBy}
                    {...bindTrigger(popupState)}
                  >
                    SORT BY
                  </Typography>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                  >
                    <Box p={2} style={{ backgroundColor: '#EDEDED' }}>
                      <FormControl>
                        <FormLabel
                          id='demo-radio-buttons-group-label'
                          style={{ textDecoration: 'underline' }}
                        >
                          Price
                        </FormLabel>
                        <RadioGroup
                          aria-labelledby='demo-radio-buttons-group-label'
                          defaultValue='female'
                          name='radio-buttons-group'
                          value={priceFilter}
                        >
                          <FormControlLabel
                            value='high'
                            control={<Radio />}
                            label='High to Low'
                            onClick={handlePriceFilter}
                            data-filter={'high'}
                          />
                          <FormControlLabel
                            value='low'
                            control={<Radio />}
                            label='Low to high'
                            onClick={handlePriceFilter}
                            data-filter={'low'}
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                  </Popover>
                </div>
               )} 
            </PopupState>
          </Box>
        </Box>
        {/* <PostCard /> */}
     
      </Box>
    </>
  );
});

export default Cards;


// how to use the states of the other component in this component
