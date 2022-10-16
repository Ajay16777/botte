const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    margin: '1rem',
    marginTop: '4rem',
    width: '550px',
    paddingBottom: '3rem',
    // '& .MuiOutlinedInput-input': {
    //   height: '7px',
    // },
    '& .Mui-focused': {
      // border: '0px',
      '& fieldset': {
        borderColor: '#e0760b !important',
      },
    },
    '& .MuiTab-root': {
      // backgroundColor: theme.palette.primary.light,
      // backgroundColor: '#C8C6C6',
      color: '#111',
      height: '5px',
      fontWeight: 300,
    },
    '& .Mui-selected': {
      backgroundColor: theme.palette.primary.light,
      // backgroundColor: '#F8F8F8',
      color: '#111',
    },
    '& .MuiTabs-fixed': {
      height: '40px',
      backgroundColor: '#fff',
    },
    '& .MuiPaper-rounded': {
      borderRadius: 0,
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: '11px',
      minWidth: '330px',
    },

    '& .MuiButton-contained': {
      borderRadius: '11px',
      minWidth: '330px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '650px',
      '& .MuiOutlinedInput-root': {
        borderRadius: '9px',
        minWidth: '400px',
      },
      '& .MuiButton-contained': {
        borderRadius: '9px',
        minWidth: '400px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: '400px',
    },
  },
  body: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: 20,
    padding: '2rem 1rem 2rem',
    [theme.breakpoints.up('lg')]: {
      rowGap: 30,
    },
  },
  inputs: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '2rem',
    rowGap: 14,
    [theme.breakpoints.up('lg')]: {
      rowGap: 20,
    },
  },
  icons: {
    marginLeft: '-100px',
    color: '#111',
    [theme.breakpoints.up('lg')]: {
      marginLeft: '-150px',
    },
  },
  paper: {
    minHeight: 500,
    [theme.breakpoints.up('lg')]: {
      width: '650px',
      minHeight: 600,
    },
  },
  forgot: {
    minWidth: '350px',
    textDecoration: 'underline',
    [theme.breakpoints.up('lg')]: {
      minWidth: '400px',
    },
  },
  signupBtn: {
    backgroundColor: '#619D61',
    color: '#fff',
    fontWeight: 100,
    marginTop: '1.5rem',
    height: '2.3rem',
    [theme.breakpoints.up('lg')]: {
      height: '2.7rem',
    },
  },
}));

export default styles;
