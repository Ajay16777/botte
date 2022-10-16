const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '1rem',
    marginTop: '-57px',
    '& .MuiTab-root': {
      borderRight: `2px solid #8D88B7`,
      backgroundColor: theme.palette.primary.light,
      padding: 0,
      fontWeight: 400,
      border: 'none',
      fontFamily: `'Open Sans', sans-serif`,
      // width: '20%',
      minWidth: '110px',
      [theme.breakpoints.up('md')]: {
        width: '200px',
      },
      [theme.breakpoints.down('md')]: {
        marginTop: '4px',
        width: '150px',
        minHeight: '45px !important',
      },
      [theme.breakpoints.down('sm')]: {
        width: '125px',
      },
      [theme.breakpoints.up('xl')]: {
        width: '390px',
      },
    },
    '& .MuiTabs-root': {
      // backgroundColor: theme.palette.primary.main,
      color: '#fff',
      border: 'none',
      borderRadius: 0,
    },
    '& .MuiTabScrollButton-root.Mui-disabled': {
      width: 0,
    },

    '& .Mui-selected	': {
      backgroundColor: '#fff',
      color: '#111',
    },
    '& .MuiPaper-root': {
      // maxWidth: '1200px',
      // margin: '0rem 0rem 0rem 0rem',
    },
  },

  postRoot: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 20,
    margin: '1rem 0rem 3rem',
  },
  zeroPost: {
    backgroundColor: '#F7F5F4',
    height: '350px',
    // width: '100%',
    marginInline: '4%',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
      height: '450px',
      // width: '80%',
    },
    [theme.breakpoints.down('md')]: {
      height: '350px',
      // width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      // width: '100%',
    },
  },
  // withPost:{

  // }
  info:{
    [theme.breakpoints.up('lg')]: {
      marginTop: "16px",
      marginLeft: "24px",
      paddingLeft: "40px",
      marginBottom: "8px",
      paddingRight: "40px",
    },
    [theme.breakpoints.down('md')]: {
      marginTop: "16px",
      marginLeft: "16px",
      // paddingLeft: ÷"40px",
      marginBottom: "8px",
      // paddingRight: "40px",
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: "16px",
      // marginLeft: "24px",
      // paddingLeft: "40px",
      marginBottom: "8px",
      // paddingRight: "40px",
    },
  },
  greenButton: {
    backgroundColor: '#619D61',
    color: '#fff',
    width: '8rem',
    borderRadius: '0px',
    fontWeight: 'normal',
  },
  flexb: {
    display: 'flex',
    alignItems: 'center',
    columnGap: 30,
  },
  greenBox: {
    backgroundColor: '#CCE5CD',
    display: 'flex',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    borderRadius: '6px',
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  grayBox: {
    backgroundColor: '#FFFDFF',
    display: 'flex',
    alignItems: 'center',
    width: '70%',
    justifyContent: 'space-between',
    marginTop: '1rem',
    padding: '1.5rem 1rem 1.5rem',
    boxShadow: '0px 3px 6px #00000029',
    border: '1px solid #EBEBEB',
    borderRadius: '6px',
    '& button': {
      color: '#1A6A95',
      textDecoration: 'underline',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  whiteBtn: {
    backgroundColor: '#fff',
    color: '#111',
    width: '8rem',
    borderRadius: '0px',
  },
  smallGray: {
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '24px',
    height: '140px',
    width: '200px',
    cursor: 'pointer',
    [theme.breakpoints.up('lg')]: {
      minWidth: '170px',
      height: '140px',
    },
    [theme.breakpoints.up('md')]: {
      minWidth: '160px',
      height: '140px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '165px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '175px',
      height: '150px',
      margin: 'auto',
    },
  },
  hover: {
    border: '1px solid #6FB462',
    backgroundColor: '#F7F7F7 ',
  },
  icon: {
    display: 'flex',
    marginTop: '1.5rem',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 15,
    [theme.breakpoints.down('xs')]: {
      marginTop: '3rem',
    },
  },
  choseBody: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'start',
    columnGap: 15,
    width: '75%',
    [theme.breakpoints.up('lg')]: {
      width: '75%',
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: 'auto',
    },
  },
  muiIcon: {
    color: '#6FB462',
    height: '25px',
    float: 'right',
  },
  choseBtn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    columnGap: 12,
    marginTop: '5rem',
    paddingRight: '2.2rem',
    width: '75%',
    [theme.breakpoints.up('lg')]: {
      width: '75%',
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      flexDirection: 'column',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '3rem',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '5rem',
    },
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    columnGap: 10,

    [theme.breakpoints.up('lg')]: {
      columnGap: 20,
      '& .MuiTypography-body2': {
        padding: '1rem 2.5rem 1rem 0rem',
      },
    },
    [theme.breakpoints.down('md')]: {
      columnGap: 20,
      '& .MuiTypography-body2': {
        padding: '1rem 1rem 1rem 0rem',
      },
    },
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      rowGap: 20,
      '& .MuiTypography-body2': {
        padding: '1rem 5rem 1rem 0rem',
      },
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
      '& .MuiTypography-body2': {
        // padding: '1rem 2rem 1rem 2rem',
        padding: 0,
      },
    },
  },
}));

export default styles;
