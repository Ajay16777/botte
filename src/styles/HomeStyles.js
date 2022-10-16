const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    '& *': { fontFamily: `'Montserrat', sans-serif !important` },
  },
  divbackImg: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    minHeight: 200,
    padding: '1em',
    position: 'relative',
  },
// cardStyle: {
//   // for laptop
//   [theme.breakpoints.up('md')]: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     gap: '2rem',
//   },
//   // for mobile
//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     gap: '2rem',
//   },
// },



  offerWrapper: {
    flex: 2,

    '& > .MuiGrid-item:not(:first-child)': {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: '1em',
      },
      [theme.breakpoints.between('sm', 'xs')]: {
        paddingLeft: '1em',
      },

      [theme.breakpoints.down('xs')]: {
        paddingTop: '1em',
      },
    },
  },
  body: {
    margin: '0.2rem 1rem',
    [theme.breakpoints.up('lg')]: {
      margin: '0.5rem 3rem',
    },
    '& .MuiTab-root': {
      minWidth: '125px',
      color: '#3E3E3E',
      fontSize: '15px',
      padding: '0px !important',
      marginRight: '0.5rem',
      margin: '0rem 1.5rem',
    },
    '& .Mui-selected': {
      borderBottom: '2px solid #e0760b',
      padding: '0px !important',
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTab-root': {
        fontSize: '18px !important',
      },
    },
  },

  homePromoBg: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    padding: '1em',
  },

  typo: {
    color: theme.palette.secondary.main,
  },
  flexeven: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '4rem 0rem 4rem',
    columnGap: 40,
    [theme.breakpoints.up('lg')]: {
      columnGap: 70,
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      rowGap: 20,
    },
    '& .Mui-focused': {
      '& fieldset': {
        borderColor: '#e0760b !important',
      },
    },
  },
  coins: {
    height: '80px',
    width: '80px',
    [theme.breakpoints.up('lg')]: {
      height: '110px',
      width: '110px',
    },
  },
  greyBox: {
    backgroundColor: theme.custom.lightWhite,
    padding: '0.5rem',
    height: '32rem !important',
    width: '45%',
    boxShadow: '0px 3px 6px #00000029',
    borderRadius: '3px',
    '& li': {
      alignItems: 'start',
    },
    '& .MuiTypography-body1': {
      fontSize: '20px',
      padding: '2px',
    },
    '& .MuiTypography-body2': {
      fontSize: '15px',
    },

    [theme.breakpoints.up('lg')]: {
      height: '30rem',
      width: '46%',
      '& h6': { fontSize: '25px' },
      '& .MuiTypography-body1': {
        fontSize: '22px',
        padding: 0,
      },
      '& .MuiTypography-body2': {
        fontSize: '15px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      overflow: 'scroll',
      width: '45%',
      height: '32rem !important',
      '& .MuiTypography-body1': {
        fontSize: '17px',
        padding: 0,
      },
      '& .MuiTypography-body2': {
        fontSize: '12px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      height: '29rem',
    },
    '& button': {},
    '& input': {
      backgroundColor: '#fff',
      border: `2px solid ${theme.palette.secondary.light}`,
      height: '0.2rem',
      fontSize: 16,
    },
  },
  packImage: {
    width: '210px',
    height: '220px',
    [theme.breakpoints.up('lg')]: {
      width: '300px',
      height: '310px',
    },
  },
  startButton: {
    border: `2px solid ${theme.palette.secondary.light}`,
    backgroundColor: '#ffffff',
    width: '10rem',
    fontSize: '15px',
    color: theme.palette.secondary.main,
    fontWeight: 500,
    [theme.breakpoints.up('lg')]: {
      width: '14rem',
      height: '3rem',
      padding: '1rem',
      fontSize: '20px',
    },
  },
  staticContainer: {
    '& .MuiTypography-body1': {
      fontSize: '19px',
    },

    '& .MuiTypography-body2': {
      fontSize: '14px',
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTypography-body1': {
        fontSize: '22px',
      },

      '& .MuiTypography-body2': {
        fontSize: '17px',
      },
    },
    // [theme.breakpoints.down('sm')]: {},
  },
  cardBox: {
    borderRadius: '50%',
    backgroundColor: '#688D9D',
    width: '2rem',
    height: '2rem',
    '& p': {
      color: '#fff',
      textAlign: 'center',
      padding: '0.3rem',
    },
  },
  cardBox2: {
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    rowGap: 40,
    height: '32rem !important',
    padding: '2rem',
    marginTop: '3rem',
    [theme.breakpoints.down('sm')]: {
      padding: '2rem',
      marginTop: '2rem',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2rem',
      marginTop: '3rem',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '4rem',
    },
  },
  orangeButton: {
    backgroundColor: theme.palette.secondary.light,
    opacity: 1,
    color: '#ffffff',
    width: '5rem',
    border: 'none',
    borderRadius: '0px',
    padding: '0.5rem',
    fontWeight: 500,
    height: '2.8rem',
    minWidth: 'fit-content',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  // curve: {
  //   width: '100%',
  //   height: '100%',
  //   background: 'red',
  //   display: 'inline-block',
  //   position: 'relative',

  //   '&:before': {
  //     borderBottom: '35px solid green',
  //     borderLeft: '150px solid transparent',
  //     borderRight: '150px solid transparent',
  //     content: '',
  //     height: 0,
  //     left: '0',
  //     position: 'absolute',
  //     top: '-35px',
  //     width: 0,
  //   },
  // },
  newsleter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  // body1: {
  //   width: '100%',
  //   height: '500px',
  //   boxSizing: 'content-box',
  //   paddingTop: '15px',
  //   position: 'relative',
  //   // background: '#FDF7F2',
  //   background: 'red',
  //   // backgroundColor: '#FDF7F2',
  //   // paddingBottom: '7rem',
  //   color: 'white',
  //   fontSize: '11px',
  //   letterSpacing: '0.2em',
  //   textAlign: 'center',
  //   textTransform: 'uppercase',
  // },
  // body2: {
  //   content: '',
  //   position: 'absolute',
  //   left: 0,
  //   top: '88.3%',
  //   width: 0,
  //   height: 0,
  //   borderBottom: '60px solid #fff',
  //   borderLeft: '500px solid transparent',
  //   borderRight: '500px solid transparent',
  // },
}));

export default styles;
