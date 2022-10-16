import {
  Box,
  Button,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

// import bannerGraphic from 'assets/banner-graphic.png';
import bannerGraphic2 from 'assets/banner-nographic.png';
// import location from 'assets/location.png';
import banner from 'assets/banner.png';
import { Link } from 'react-router-dom';
// import circle from 'assets/circle.png';
// import useStyles from 'styles/commonStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const styles = makeStyles((theme) => ({
  root: {
    height: 300,
    width: '100%',
    marginBottom: 40,
    backgroundImage: `url(${banner})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      height: 400,
    },
    [theme.breakpoints.down('xs')]: {
      backgroundImage: `url(${bannerGraphic2})`,
    },
  },
  content: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    zIndex: 555,
  },
  loc: {
    position: 'absolute',
    top: '99%',
    left: '53%',
    transform: 'translateY(-50%)',
    width: '100%',
    zIndex: 555,
  },
  text: {
    margin: '2rem',
    '& div': {
      marginBottom: '1rem',
    },
    '& h6': {
      fontSize: 21,
      fontWeight: 500,
    },
    [theme.breakpoints.up('lg')]: {
      margin: '1rem 4rem 1rem',
      '& div': {
        marginBottom: '1.5rem',
      },
      '& h6': {
        fontSize: 26,
        fontWeight: 500,
      },
    },
  },
  btn: {
    maxWidth: 350,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 380,
    },
  },
  containedBtn: {
    backgroundColor: '#fff',
    color: '#111',
    borderRadius: 0,
    fontWeight: 500,
  },
  simpleBtn: {
    color: '#fff',
    textDecoration: 'underline',
    fontWeight: 500,
  },
  // circle: {
  //   height: 300,
  //   // marginTop: 200,
  //   backgroundImage: `url(${circle})`,
  //   backgroundPosition: 'bottom',
  //   backgroundSize: 'cover',
  //   position: 'relative',
  // zIndex: 555,
  // },
  // caption: {
  //   display: 'flex',
  //   rowGap: 15,
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   paddingInline: '4em',
  //   paddingBlock: '2em',
  //   minHeight: 250,
  //   color: '#fff',
  //   [theme.breakpoints.down('sm')]: {
  //     minHeight: 300,
  //   },
  // },
}));

const Banner = () => {
  const classes = styles();

  return (
    <section className={classes.root}>
      <div className={classes.content}>
        <Box className={classes.text}>
          <Box>
            <Typography variant='body1'>
              DELIVERY MADE SIMPLE
            </Typography>
          </Box>
          <Box>
            <Typography variant='h6'>
              Your companion to get your items <br /> when and where
              you need it!
            </Typography>
          </Box>
          <Box className={classes.btn}>
            <Button
              component={Link}
              to='/working'
              className={classes.containedBtn}
              variant='contained'
              endIcon={
                <ArrowForwardIosIcon
                  style={{
                    color: '#fff',
                    backgroundColor: '#e0760b',
                    padding: 2.5,
                    borderRadius: '50%',
                  }}
                />
              }
            >
              Learn how it works
            </Button>
            <Button variant='standard' className={classes.simpleBtn}>
              watch the Video
            </Button>
          </Box>
        </Box>
      </div>
      {/* <div className={classes.loc}>
        <img
          src={location}
          alt='loc'
          style={{ height: 50, width: 35 }}
        />
      </div> */}
    </section>
  );
};

export default Banner;
