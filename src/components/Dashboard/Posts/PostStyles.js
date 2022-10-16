const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  body: {
    paddingLeft: '1rem',
    '& .MuiInputBase-input': {
      borderRadius: '0px',
    },
    '& input': {
      borderRadius: '0px',
      padding: '16px',
      width: '100%',
      color: '#6F6F6F',
      height: '10px',
    },
    // '& fieldset': {
    //   fontSize: '30px',
    // },
    '& textarea': {
      fontSize: '17px',
    },

    '& .MuiOutlinedInput-root': {
      borderRadius: '0px',
    },
    // '& .MuiOutlinedInput-multiline': {
    //   height: '50px',
    // },
    '& .MuiAutocomplete-input': {
      height: '5px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#EA6A11  !important',
    },
    '& .MuiSlider-root': {
      color: '#EA6A11',
      width: '80%',
    },
    '& .MuiTypography-body2': {
      marginTop: '1rem',
      color: '#6F6F6F',
      marginBottom: '0.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiTypography-body2': {
        marginTop: '1.3rem',
      },
      '& input': {
        height: '15px',
      },
      '& .MuiAutocomplete-input': {
        height: '10px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      paddingRight: '5rem',
    },
    [theme.breakpoints.down('xs')]: {
      paddingRight: '1rem',
    },
  },

  greenText: {
    backgroundColor: '#D7EFD3',
    // boxShadow: '0px 3px 6px #00000029',
    display: 'flex',
    flexDirection: 'column',
    rowGap: 15,
    alignItems: 'start',
    justifyContent: 'center',
    height: 'fit-content',
    width: '75%',
    padding: '1.5rem 1.3rem 2rem',
    borderRadius: '5px',
    marginTop: '3rem',
    margin: 'auto',
    '& .MuiTypography-body2': {
      marginTop: '.3rem',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '2rem 1.5rem 2.5rem',
      width: '60%',
    },
    [theme.breakpoints.down('sm')]: {
      padding: '2.5rem 1.5rem 3rem',
      width: '60%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '2rem 1.5rem 2rem',
      width: '90%',
    },
  },
  submit: {
    backgroundColor: '#619D61',
    color: '#fff',
    width: '8rem',
    borderRadius: '0px',
    '& .Mui-disabled': {
      backgroundColor: '#6F6F6F',
    },
  },
  smallBox: {
    border: '1px solid #eb8a47',
    height: '40px',
    width: '75px',
    padding: '7px',
    textAlign: 'center',
    borderRadius: 0,
  },
  dimensions: {
    '& .MuiOutlinedInput-root': {
      height: 40,
    },
  },
}));

export default styles;
