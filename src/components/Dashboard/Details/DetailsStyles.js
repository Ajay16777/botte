const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 25,
    margin: 'auto',
    '& *': {},
    '& .MuiInputBase-root': {
      // width: '270px',
    },
    '& .MuiOutlinedInput-input': {
      borderRadius: '0px',
      height: '5px',
    },
    '& .Mui-focused': {
      // border: '0px',
      '& fieldset': {
        borderColor: '#e0760b !important',
      },
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiInputBase-root': {
        width: '330px',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiInputBase-root': {
        // width: '230px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& .MuiInputBase-root': {
        // width: '240px',
      },
    },
  },

  image: {
    backgroundColor: '#E6E6E6',
    border: '1px solid #EA6A11',
    cursor: 'pointer',
    borderRadius: '20px',
    height: '120px',
    width: '130px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    marginBottom: '1rem',
    [theme.breakpoints.up('lg')]: {
      height: '130px',
      width: '150px',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100px ',
      width: '150px',
    },
  },
  miniText: {
    padding: '1rem 3rem 1rem 0.2rem',
    lineHeight: '1rem',
    [theme.breakpoints.down('xs')]: {
      padding: '1rem 1rem 1rem 1rem',
    },
  },
  smScreen: {
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  },
  btn: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    columnGap: 20,
    marginTop: '2rem',
  },
  flexb: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  normalButton: {
    backgroundColor: '#fff',
    width: '8rem',
    borderRadius: '0px',
    fontWeight: 'normal',
  },
  greenButton: {
    backgroundColor: '#619D61',
    color: '#fff',
    width: '8rem',
    borderRadius: '0px',
  },
}));

export default styles;
