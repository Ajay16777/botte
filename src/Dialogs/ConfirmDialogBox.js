import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import { Box, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialog-container': {
      // backgroundColor: '#454545',
    },
    '& .MuiDialog-paper	': {
      height: '30%',
      width: '45%',
      padding: '1rem',
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
    margin: '2rem 1rem 1rem 1rem',
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

export default function ConfirmationDialog(props) {
  const { open, toggleDialog, title } = props;
  const classes = useStyles();
//   const dispatch = useDispatch();

  const handleToggle = () => {
    // dispatch(toggleSuccess());
    toggleDialog();
  };

  return (
    <Dialog
      onClose={toggleDialog}
      aria-labelledby='simple-dialog-title'
      open={open}
      className={classes.root}
    >
      <Box className={classes.box}>
        <Typography variant='h6' className={classes.Title}>
          {title}
        </Typography>
        <Box style={{ textAlign: 'center' }}>
          <Button
            variant='contained'
            className={classes.btn}
            onClick={handleToggle}
          >
            Ok
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
