/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  TextField,
} from '@material-ui/core';
import {sendPasswordReset,auth} from "../../Firebse/firebase";
import styles from 'styles/FormStyles';
import useStyles from 'styles/commonStyles';

const ForgotPassword = () => {
  const classes = styles();
  const classes_g = useStyles();
  const [email, setEmail] = React.useState('');

  const handleResetPassword = (e) => {
    e.preventDefault();
    sendPasswordReset(email)
  }
  return (
    <Box className={clsx(classes_g.backWrapper)} justifyContent='center'>
      <Box className='overlay' position='absolute' />
      <div className={clsx(classes.root, classes.loginWrapper)}>
        <Box>
          <Typography variant='h3' color='primary' gutterBottom={true}>
            Forgot Password
          </Typography>
          <Typography
            variant='body2'
            color='textSecondary'
            gutterBottom={true}
            sx={{ textAlign: 'justify' }}
          >
            Please enter the email address associated with your account and
            we'll email you a link to reset your password.
          </Typography>
        </Box>

        <TextField
          variant='outlined'
          margin='normal'
          fullWidth={true}
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />

        <Button
          variant='contained'
          color='secondary'
          onClick={handleResetPassword}
        >
          {/* {loading ? ( */}
            {/* // <CircularProgress size={25} color='inherit' /> */}
        {/* ) : (  */}
            'Reset Password'
          {/* )} */}
        </Button>

        <Box
          mt={1}
          display='flex'
          justifyContent='center'
          sx={{ columnGap: '1em' }}
        >
          <Typography variant='body1' color='textPrimary'>
            Already have account?{' '}
          </Typography>
          <Typography variant='body1' color='textSecondary'>
            <NavLink to='/auth/login '>Login</NavLink>
          </Typography>
        </Box>
      </div>
    </Box>
  );
};

export default ForgotPassword;
