/* eslint-disable no-unused-vars */
import {
  Avatar,
  Box,
  Button,
  Divider,
  Typography,
} from '@material-ui/core';
import React from 'react';
import styles from './FooterStyles';
import globalStyles from 'styles/commonStyles';
import { NavLink } from 'react-router-dom';

const menu = [
  {
    item: 'FAQ',
    url: '/faq',
  },
  {
    item: 'Disclaimer',
    url: '/disclaimer',
  },
  {
    item: 'Privacy policies ',
    url: '/privacy',
  },
  {
    item: 'Terms & Conditions',
    url: '/conditions',
  },
  {
    item: 'Contact us',
    url: '/contact',
  },
];

const Footer = () => {
  const classes = styles();
  const classes_g = globalStyles();

  return (
    <>
      <Box className={classes.root}>
        <Box className={classes.flexs}>
          <Box m={3}>
            <Typography variant='body1'>&copy; BOTTE 2022</Typography>
          </Box>
          <Box m={3}>
            <Box className={classes_g.flexs} sx={{ columnGap: 20 }}>
              {menu &&
                menu.map((el, index) => (
                  <NavLink
                    to={el.url}
                    key={index}
                    style={{ color: '#fff' }}
                  >
                    <Typography variant='body1'>{el.item}</Typography>
                  </NavLink>
                ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
