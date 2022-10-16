const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiTypography-root': {
      fontFamily: 'Rubrik',

      // font-weight: 600;
      // color: #626262;
    },
    '& *': {
      fontFamily: 'Rubrik',
    },
  },
  body: {
    margin: '0rem 0rem 10rem 3rem',
    boxShadow: '0px 3px 6px #00000029',
    backgroundColor: '#ffffff',
    height: '32rem',
    width: '75%',
    display: 'flex',
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      height: '35rem',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '30rem',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: '0rem 0rem 10rem 0.5rem',
      flexDirection: 'column',
      height: '50rem',
    },
  },
  body2: {
    backgroundColor: '#EFEFEF',
    width: '62%',

    [theme.breakpoints.down('xs')]: {
      width: '95%',
      height: '52rem',
    },
  },
  content: {
    margin: '2rem 1rem 1rem 3rem',
    fontWeight: 'normal',
    '& div': {
      marginTop: '0.5rem',
      display: 'flex',
      columnGap: 30,
    },
    [theme.breakpoints.up('lg')]: {
      margin: '2rem 1rem 1rem 4rem',
      '& div': {
        marginTop: '0.7rem',
        columnGap: 35,
      },
    },
    [theme.breakpoints.down('sm')]: {
      margin: '2rem 1rem 1rem 3rem',
      '& div': {
        columnGap: 20,
      },
    },
  },
  info: {
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    width: '38%',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 10,
    padding: '2rem 3rem 1rem',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: 20,
      width: '100%',
    },
  },
  avatar: {
    width: '7rem',
    height: '7rem',
    backgroundColor: '#EFEFEF',
    color: '#727170',
    border: `1px solid  ${theme.palette.secondary.main}`,
    [theme.breakpoints.up('lg')]: {
      width: '9rem',
      height: '9rem',
    },
  },
  icon: {
    position: 'absolute',
    left: '58%',
    top: '12%',
    transform: 'translateY(-50%)',
    width: '100%',
    zIndex: 555,
  },
  typo: {
    minWidth: '10rem',
    fontFamily: 'Rubrik',

    color: '#626262',
    [theme.breakpoints.down('md')]: {
      minWidth: '9rem',
    },
  },
  buttonBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    columnGap: 30,
    marginLeft: '3rem',
    marginTop: '2rem',
    [theme.breakpoints.up('lg')]: {
      marginRight: '4rem',
      marginTop: '1.5rem',
    },
  },
  buttonBox2: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    columnGap: 10,
    marginTop: '0.5rem',
  },
  greenBtn: {
    backgroundColor: theme.custom.green,
    color: '#fff',
    minWidth: '8rem',
    borderRadius: '0px',
    '&:hover': {
      backgroundColor: 'rgb(67, 109, 67)',
    },
  },
  msgBody: {
    margin: '1rem 0rem 1rem 3rem',
  },
  msgBox: {
    backgroundColor: '#fff',
    borderRadius: '20px',
    height: '30%',
    width: '70%',
    padding: '2rem',
    marginLeft: '3rem',
    '& textArea': {
      backgroundColor: '#fff',
    },
    '& .Mui-focused': {
      '& fieldset': {
        borderColor: '#e0760b !important',
      },
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginLeft: '1rem',
    },
  },
  whiteBtn: {
    backgroundColor: '#fff',
    borderRadius: '0px',
    color: '#3E3E3E',
    width: '7rem',
  },
  customBox: {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    '& div': {
      margin: 0,
    },
  },
}));

export default styles;
