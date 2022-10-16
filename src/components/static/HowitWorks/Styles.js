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
  videoBox: {
    backgroundColor: '#5C5656',
    borderRadius: '8px',
    height: '250px',
    width: '100%',
  },
  flexb: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0.5rem 2rem 0.5rem',
    marginTop: '3rem !important',
    borderRadius: '8px',
    '& p': {
      maxWidth: '300px',
    },
    '& img': {
      marginRight: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '5rem !important',
      borderRadius: '10px',
      '& img': {
        marginRight: '8rem',
      },
    },
    [theme.breakpoints.down('md')]: {
      '& img': {
        marginRight: '3rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: '150px',
      padding: '0.5rem',
      '& p': {
        maxWidth: '200px',
      },
      '& img': {
        marginRight: '5px',
      },
    },
  },
  img: {
    height: '150px',
    width: '150px',
    [theme.breakpoints.up('lg')]: {
      height: '190px',
      width: '190px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100px',
      width: '100px',
    },
  },
}));

export default styles;
