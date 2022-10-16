import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  root: {
    marginBottom: '4rem',
    padding: '1rem 5rem 1rem',
    '& div': {
      marginTop: '1rem',
    },
    '& h6': {
      color: '#4F4E4D',
      fontSize: '18px',
      fontWeight: 500,
    },
    '& p': {
      color: '#4F4E4D',
      fontWeight: 400,
    },
    [theme.breakpoints.up('lg')]: {
      padding: '1rem 4rem 1rem',
      '& p': {
        fontSize: '19px',
      },
      '& div': {
        marginTop: '2rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      padding: '1rem 3rem 1rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 2rem 1rem',
      '& p': {
        fontSize: '12px',
      },
      '& div': {
        marginTop: '0.75rem',
      },
    },
  },
}));

export default styles;
