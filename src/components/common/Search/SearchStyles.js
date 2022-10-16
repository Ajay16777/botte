import { makeStyles } from '@material-ui/core';

const styles = makeStyles((theme) => ({
  container: {
    cursor: 'text',
    display: 'flex',
    alignItems: 'center',
    borderRadius: 5,
    // padding: '3px 3px',
    minheight: '120px',
    backgroundColor: theme.palette.secondary.lighterr,
    boxShadow: '0px 3px 3px #0000004D',
    '& .MuiBox-root': {
      padding: '1rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '160px',
    },
    // '& input': {
    //   backgroundColor: '#ffffff',
    //   width: '10rem',
    //   height: '45px',
    //   border: 'none',
    //   outline: 'none',
    //   padding: '0.5rem',
    //   color: theme.custom.lightblue,
    //   fontSize: '0.8rem',

    //   '&::placeholder': {
    //     color: theme.custom.lightblue,
    //     height: '22px',
    //   },
    // },
  },
  selectControl: {
    width: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: '#ffffff',
    fontSize: '0.8rem',
    '& option': {
      color: theme.custom.lightblue,
    },
    '&::placeholder': {
      color: theme.custom.lightblue,
      height: '22px',
    },
  },
  // hoverStyles: {
  //   boxShadow: `${theme.palette.secondary.main}73 0px 0px 10px 0px`,
  //   backgroundColor: theme.custom.borders,
  // },

  typo: {
    color: '#3E3E3E',
    marginLeft: '1rem',
    fontSize: '14px',
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
    },
  },

  flexs: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    columnGap: 3,
    // rowGap: 10,
    // [theme.breakpoints.down('sm')]: {
    //   width: '45%',
    //   height: '26rem',
    // },
    '& .MuiTextField-root': {
      backgroundColor: '#ffffff',
      padding: '0.5rem',
      border: 'none',
      minWidth: '100px',
      flexGrow: 1,
      outline: 'none',
      height: '2.5rem',
      fontSize: '0.8rem',
      '& select': {
        color: theme.custom.lightblue,
        padding: '0.2rem',
      },
      '& option': {
        color: theme.custom.lightblue,
        border: 'none',
        outline: 'none',
      },
      '& input': {
        color: theme.custom.lightblue,
        padding: 0,
        height: '1.6rem',
        margin: 0,
        // fontSize: '0.8rem',
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: '0.5rem',
      },
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTextField-root': {
        height: '3rem',
        padding: '1rem 0.2rem',
        fontSize: '1.2rem ',
      },
    },
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    },
  },
  greenButton: {
    backgroundColor: theme.custom.green,
    color: '#ffffff',
    width: '5rem',
    height: '2.5rem',
    borderRadius: '0px',
    padding: '0.5rem',
    fontSize: 17,
    [theme.breakpoints.up('lg')]: {
      height: '3rem',
      width: '6rem',
      fontSize: 19,
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: 9,
    },
  },
}));

export default styles;
