/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import {
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import { toggleSuccess } from 'store/slices/MyRequests';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useToggleInput } from '../hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialog-container': {
      // backgroundColor: '#454545',
    },
    '& .MuiDialog-paper	': {
      width: '45%',
      padding: '0.5rem 0.5rem 0.5rem 2rem',
      borderRadius: '20px',
    },
    '& .MuiDialogTitle-root': { padding: '10px' },
  },
  box: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    rowGap: 30,
    margin: '1rem ',
    [theme.breakpoints.down('sm')]: {
      margin: '',
    },
  },
  Title: {
    fontFamily: 'Rubrik',
    color: '#898989',
  },

  btn: {
    backgroundColor: '#868686',
    color: '#fff',
    width: '8rem',
    borderRadius: '0px',
  },
}));

export default function CodeDialog(props) {
  const { open, toggleDialog, code } = props;
  const classes = useStyles();
  const [copied, toggleCopied, setCopied] = useToggleInput(false);

  const navigate = useNavigate();

  const handleToggle = () => {
    alert('Code copied to clipboard');
    // toggleDialog();
  };

  // const handleClick = () => {
  //   navigate(`/auth/signup?code=${code}`);
  // };

  return (
    <Dialog
      onClose={toggleDialog}
      aria-labelledby='simple-dialog-title'
      open={open}
      className={classes.root}
    >
      <Box style={{ textAlign: 'right' }}>
        <IconButton
          color='primary'
          aria-label='cancel'
          component='span'
          onClick={handleToggle}
        >
          <CancelIcon />
        </IconButton>
      </Box>
      <Box className={classes.box}>
        <Typography variant='subtitle1'>
          Join BOTTE using code:
          <CopyToClipboard
            text={code}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => {
                setCopied(false);
              }, 2000);
            }}
          >
            <Tooltip
              title={copied ? 'Copied' : ''}
              placement='top-start'
              style={{
                transition: '1s',
              }}
            >
              <span style={{ color: '#e0760b', cursor: 'pointer' }}>
                {' '}
                {code}{' '}
              </span>
            </Tooltip>
          </CopyToClipboard>
          to calim up to 10 points, and enjoy the ease of getting you
          parcels where you want them quickly and securely.
        </Typography>
        <Typography variant='h6'>Share Link : </Typography>
        <CopyToClipboard
          text={`https://botte.netlify.app/auth/signup?code=${code}`}
          onCopy={() => {
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
        >
          <Tooltip
            title={copied ? 'Copied' : ''}
            placement='top-start'
            style={{
              transition: '1s',
            }}
          >
            <span
              style={{
                textDecoration: 'underline',
                color: '#e0760b',
                cursor: 'pointer',
              }}
              // onClick={handleClick}
            >
              https://botte.netlify.app/auth/signup?code={code}
            </span>
          </Tooltip>
        </CopyToClipboard>
      </Box>
    </Dialog>
  );
}
