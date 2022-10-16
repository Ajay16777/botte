const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    columnGap: 15,
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      columnGap: 0,
    },
  },

  flexs: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      '& span': {
        flexDirection: 'column',
      },
    },
  },
}));

export default styles;
