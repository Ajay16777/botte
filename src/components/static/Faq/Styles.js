/* eslint-disable no-unused-vars */
import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    margin: '2rem 10rem 5rem 5rem',
    marginBottom: '5em',
    '& h5': {
      marginBlock: '0.3em',

      fontWeight: 500,
    },
    '& h6': {
      marginTop: '0.2em',
      marginBottom: '0.7em',
    },
    '& strong': {
      //   marginBlock: '1em',
      fontWeight: 600,
    },
    '& a': {
      verticalAlign: 'unset',
    },

    '&.MuiAccordion-root': {
      border: '1px solid red',

      boxShadow: 'none',
      // border: '1px solid red',
    },
    '&.MuiPaper-elevation1': {
      boxShadow: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '1rem 3rem 2rem 1rem',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      margin: '2rem 30rem 5rem 10rem',
    },
  },
}));

export default styles;
