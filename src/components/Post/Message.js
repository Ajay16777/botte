/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
} from '@material-ui/core';
import glolabStyles from 'styles/commonStyles';
import styles from './PostStyles';
import { Link } from 'react-router-dom';
import useTextInput from '../hooks/useTextInput';


const Message = ({ validateStep, request }) => {
  const classes = styles();
  const classes_g = glolabStyles();
  // const dispatch = useDispatch();

  const [text, handleText, resetText] = useTextInput('');

  // const handleSubmit = () => {
  //   //* create chat
  //   const post = request._id;
  //   dispatch(createChat({ text, post })).then((res) => {
  //     if (res.error) {
  //       toast.error(res.error);
  //     } else {
  //       resetText();
  //       validateStep();
  //     }
  //   });
  // };
const handleSubmit = () => {
  alert('submit');
}
  // console.log('request', request);

  return (
    <>
      <Box style={{ height: '100vh' }}>
        <Box>
          <Box className={classes.msgBox}>
            <Typography
              variant='button'
              style={{ display: 'block' }}
              className={classes.typo}
            >
              Your message to 
            </Typography>
            <TextField
              id='outlined-multiline-static'
              multiline
              rows={7}
              variant='outlined'
              name='text'
              onChange={handleText}
              style={{
                width: '100%',
                margin: '1rem 0rem 0.5rem',
              }}
            />
            <div className={classes_g.textWithLinks}>
              <Typography
                variant='subtitle2'
                style={{
                  color: 'rgb(106 101 96)',
                }}
              >
                To deter potential fraud, spam or suspicious
                behaviour, we anonymise your email address. By sending
                a message you agree to our
                <Link
                  to='/conditions'
                  style={{
                    color: 'rgb(106 101 96)',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  Terms & Conditions
                </Link>
                and
                <Link
                  to='/privacy'
                  style={{
                    color: 'rgb(106 101 96)',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  &nbsp;Privacy Policy
                </Link>
              </Typography>
            </div>
            <Box className={classes.buttonBox2}>
              <Button
                variant='contained'
                className={classes.whiteBtn}
              >
                Cancel
              </Button>
              <Button
                variant='contained'
                className={classes_g.greenButton}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Message;
