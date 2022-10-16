const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    // width: 295,
    // maxWidth: 295,
    height: 215,
    margin: 'auto',
    borderTopRightRadius: '12px',
    borderRadius: '6px',
    boxShadow: '0px 3px 3px #0000004D',
    padding: '0px 0px 1px 8px',
    '& span': {
      fontSize: '12px',
      lineHeight: '14px',
    },
    '& h6': {
      fontSize: '14px',
      paddingTop: '3px',
      fontFamily: `'Montserrat', sans-serif !important`,
    },
    [theme.breakpoints.up('lg')]: {
      // width: 330,
      // maxWidth: 330,
      height: 250,
      borderRadius: '10px',
      '& span': {
        lineHeight: '21px',
        boxSizing: 'border-box',
      },
      '& h6': {
        fontSize: '17px',
        paddingTop: '1px',
        lineHeight: '19px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      // width: 330,
      // maxWidth: 330,
      //  width :
    },
  },
  PaginationBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 12,
    '& h6': {
      fontFamily: `'Montserrat', sans-serif !important`,
      fontWeight: 300,
    },
  },
  cardBody: {
    maxWidth: '18rem',
    // backgroundColor: '#fff',
    // height: '180px',
    borderRadius: '10px',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '20rem',
    },
  },
  body2: {
    color: '#73A35A',
    marginLeft: '0.7rem',
    marginTop: '0.5rem',
    fontSize: '16px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
    },
  },
  textBox: {
    height: '55px',
    [theme.breakpoints.up('lg')]: {
      height: '85px',
    },
  },
  sortBy: {
    textDecoration: 'underline',
    fontSize: '14px',
    cursor: 'pointer',
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
    },
  },
  paper: {
    color: '#fff',
    padding: '0.4rem',
    marginTop: -10,
    backgroundColor: '#5CBCC9',
    borderBottomLeftRadius: '25px',
    borderTopRightRadius: '10px',
    borderBottomRightRadius: 0,
    fontSize: '11px',
    textAlign: 'center',
    height: '1.5rem',
    letterSpacing: '1px',
    width: '5.5rem',
    [theme.breakpoints.up('lg')]: {
      fontSize: '14px',
      width: '6.5rem',
      height: '1.7rem',
    },
  },
  paper2: {
    color: '#fff',
    padding: '0.4rem',
    backgroundColor: '#707070',

    fontSize: '12px',
    textAlign: 'center',
    height: '1.7rem',
    // flexGrow: 1,
    minWidth: '6rem',
    letterSpacing: '0.5px',
    '& span': {
      boxSizing: 'border-box',
      fontSize: '17px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '1.9rem',

      '& span': {
        fontSize: '18px',
        padding: '0.1rem',
      },
    },
  },
  filter: {
    '& .MuiPaper-root': {
      backgroundColor: '#EDEDED',
    },
    '& .MuiMenu-paper': {
      top: '275px !important',
      right: '10px !important',
      width: '150px !important',
    },
  },
  cardBottom: {
    marginTop: '0.5rem',
    paddingInline: 10,
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    columnGap: 70,
  },
}));

export default styles;
