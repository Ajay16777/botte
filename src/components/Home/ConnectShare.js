/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import globalStyles from 'styles/commonStyles';
import styles from 'styles/HomeStyles';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemAvatar,
} from '@material-ui/core';
import email from 'assets/email.png';
import coins from 'assets/coins.png';
import { Link } from 'react-router-dom';
// import { API_BASE_URL, handleCatch, makeReq } from 'utils/makeReq';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import UseToggle from '../hooks/useToggleInput';
import CodeDialog from './CodeDialog';

const ListData = [
  {
    count: 1,
    text: 'Earn up to 10 points for each person you invite: 2 points when they sign up and 8 points after their first transaction.',
  },
  {
    count: 2,
    text: '  After you accrue 100 points you can redeem it on the BOTTE App is launched: this could be up to 10% off your next transaction.',
  },
  {
    count: 3,
    text: '  Keep earning and build on your loyalty points which unlocks various platform benefits - stay tuned!',
  },
];

const ConnectShare = () => {
  const classes = styles();
  // const classes_g = globalStyles();
  const [subscribe, setSubscribe] = useState('');
  // const navigate = useNavigate();
  // const [isOpen, toggleOpen] = UseToggle(false);
  const [code, setCode] = useState();
  // const { user } = useSelector((st) => st.auth);

  // const handleSubChange = (e) => {
  //   setSubscribe(e.target.value);
  // };

  // const handleSubscribe = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(`${API_BASE_URL}/mailchimp`, { subscribe }, 'POST');
  //     toast.success('Subscribed sucessfully');
  //   } catch (err) {
  //     handleCatch(err);
  //   }
  // };

  // const handleShare = async () => {
  //   console.log('share');
  //   if (!user) {
  //     navigate('/auth/login');
  //     toast.info(' Login for ShareCode');
  //   }
  //   try {
  //     const resData = await makeReq(
  //       `/users/code`,
  //       {
  //         body: {},
  //       },
  //       'POST'
  //     );
  //     toast.success('Code Generated Success');
  //     setCode(resData.code.code);
  //     toggleOpen();
  //     // console.log('resData', resData.code.code);
  //   } catch (err) {
  //     console.log('err :>> ', err);
  //   }
  // };

  return (
    <div
      style={{
        background: '#fff',
        marginBottom: '5rem',
      }}
    >
      <Container className={classes.root}>
        <Box mt={5}>
          <Typography
            variant='h5'
            style={{ textAlign: 'center', paddingTop: '5rem' }}
          >
            Connect and Share
          </Typography>
        </Box>
        <Box className={classes.flexeven}>
          <Box className={classes.greyBox}>
            <Box style={{ textAlign: 'center' }}>
              <img src={coins} alt='coins' className={classes.coins} />
              <Typography variant='body1'>
                Introduce a friend and earn points
              </Typography>
            </Box>
            <List>
              {ListData.map((list) => (
                <ListItem>
                  <ListItemAvatar>
                    <Box className={classes.cardBox}>
                      <Typography variant='body1'>{list.count}</Typography>
                    </Box>
                  </ListItemAvatar>
                  <Typography variant='body2'>{list.text}</Typography>
                </ListItem>
              ))}
            </List>
            <Box sx={{ textAlign: 'center' }} mt={1}>
              <Button
                variant='contained'
                className={classes.startButton}
                // onClick={handleShare}
              >
                Start sharing
              </Button>
            </Box>
          </Box>
          <Box className={classes.greyBox}>
            <Box className={classes.cardBox2}>
              <img
                src={email}
                alt='email'
                style={{
                  height: '120px',
                  width: '120px',
                }}
              />
              <Box>
                <Typography variant='h6'>Sign Up to our newsleter</Typography>
                <Typography variant='body2'>
                  Want to get timely updates on our product offerings?
                </Typography>
              </Box>
              <Box>
                <form className={classes.newsleter}>
                  <TextField
                    style={{
                      minWidth: 300,
                      borderRight: 'none',
                      fontSize: 12,
                    }}
                    id='outlined-basic'
                    placeholder='Enter your email address here'
                    variant='outlined'
                    // value={subscribe}
                    type='email'
                    required
                    // onChange={handleSubChange}
                  />
                  <Button
                    variant='contained'
                    type='submit'
                    className={classes.orangeButton}
                  >
                    Sign Up
                  </Button>
                </form>
                <Typography
                  style={{
                    color: '#8b857f',
                    fontSize: '10px',
                    marginTop: '0.5rem',
                  }}
                >
                  By Signing up. I agree with BOTTE's{' '}
                  <Link
                    to='/conditions'
                    style={{
                      textDecoration: 'underline',
                      color: '#000',
                      verticalAlign: 'unset',
                    }}
                  >
                    Term & Conditions
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <CodeDialog code={code} />
    </div>
  );
};

export default ConnectShare;
