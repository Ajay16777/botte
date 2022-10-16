import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    padding: '1rem 5rem 1rem',
    '& div': {
      marginTop: '1rem',
    },
    '& h6': {
      color: '#4F4E4D',
      fontSize: '18px',
      fontWeight: 600,
    },
    '& p': {
      color: '#4F4E4D',
      fontWeight: 400,
    },
    [theme.breakpoints.up('lg')]: {
      padding: '1rem 3rem 1rem',
      '& p': {
        fontSize: '19px',
      },
      '& div': {
        marginTop: '2rem',
      },
    },
  },
}));

export default styles;
