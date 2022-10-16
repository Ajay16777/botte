const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 25,
    '& .MuiTypography-body1': {
      fontSize: 12,
    },
    '& .MuiTypography-body2': {
      lineHeight: 1.4,
      fontSize: 15,
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTypography-body1': {
        fontSize: 19,
      },
      '& .MuiTypography-body2': {
        lineHeight: 1.4,
        fontSize: 17,
      },
    },
  },
  greyBox: {
    backgroundColor: '#C6C4C1',
    borderRadius: '10px',
    width: '80%',
    height: '105px',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      width: '75%',
      height: '120px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  text: {
    [theme.breakpoints.up('md')]: {
      margin: '3rem 1rem 1rem',
    },
    [theme.breakpoints.down('md')]: {
      margin: '2rem 1rem 1rem',
    },
  },
  img1: {
    width: '90px',
    height: '90px',
    position: 'relative',
    right: '85px',
    top: '10px',
    zIndex: 1,
    [theme.breakpoints.down(500)]: {
      top: 45,
      width: 50,
      height: 50,
      right: 20,
      zIndex: 13,
      position: 'relative',
    },
    [theme.breakpoints.down(380)]: {
      display: 'none',
    },
  },
  img2: {
    width: '110px',
    height: '110px',
    position: 'absolute',
    bottom: '20px',
    right: '1px',
    zIndex: 2,
    [theme.breakpoints.down(500)]: {
      width: 70,
      height: 70,
      right: '-25px',
      bottom: 30,
      zIndex: 2,
      position: 'absolute',
    },
    [theme.breakpoints.down(380)]: {
      display: 'none',
    },
  },
}));

export default styles;
