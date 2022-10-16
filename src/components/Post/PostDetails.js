import { useState, useEffect, useCallback } from 'react';
import {
  Box,
  Button,
  Typography,
  Avatar,
  // ClickAwayListener,
  // Link,
} from '@material-ui/core';
import globalStyles from 'styles/commonStyles';
import styles from './PostStyles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { db , createChatroom} from "Firebse/firebase";
import { query, collection, onSnapshot } from "firebase/firestore";
import box from 'assets/box.png';
import bag from 'assets/bag.png';
import simple from 'assets/orangebg.png';
import { Link } from 'react-router-dom';

const { makeStyles } = require('@material-ui/core');
const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#FFCBA7',
    margin: 0,
    borderRadius: 10,
    color: '#3E3E3E',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);
const styBox = makeStyles((theme) => ({
  // orange: {
  //   width: '100vw',
  //   height: '18vh',
  //   position: 'relative',
  //   [theme.breakpoints.up('lg')]: {
  //     height: '22vh',
  //   },
  root: {
    height: 200,
    width: '100%',
    marginBottom: 40,
    backgroundImage: `url(${simple})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      height: 250,
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 30,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    zIndex: 555,
  },
}));

const url = window.location.href;
const id = url.substring(url.lastIndexOf('/') + 1);
// console.log("id", id);

const PostDetails = ({ validateStep }) => {
  const classes = styles();
  const classes_g = globalStyles();
  const BoSty= styBox();
  
  const [post, setPost] = useState([]);


  const handleMessage = () => {
    createChatroom(post[0].uid);
  };
    //check if the user is logged in
  //   if (sessionStorage.getItem('Auth Token')) {
  //     //if the user is logged in, navigate to the chat page
  //     window.location.href = '/dashboard/Message';
      
  //   }
  //   //if the user is not logged in, redirect to the login page
  //   else {
  //     //clear the cache and redirect to the login page
  //     sessionStorage.clear();
  //     localStorage.clear();
  //     //clear indexDB
  //     // window.indexedDB.deleteDatabase('firebaseLocalStorageDb');

  //     window.location.href = '/auth/login';
  //   }

  // };


  //function to fetch the post from the database by id
  const fetchPost = useCallback(async () => {
    console.log("fetching post");

    //get post by id from the database
    const q = query(collection(db, "posts"));
    let posts = [];
    await onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if(doc.id === id){
          posts.push({ ...doc.data(), id: doc.id });
        }
      });
      setPost(posts);
      // console.log("posts", posts);
    });
  }, []);

  console.log("post", post);

  useEffect(() => {
     fetchPost(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Box className={classes.root}>

        
         
           
        <div style={{ backgroundColor: '#FDF7F2'}}>
      {/* <img src={simple} alt='orange' className={BoSty.orange} /> */}
      <div className={BoSty.root}>
         {/* {post.isDeliveryRequest==="true" ? ( 
          <Typography variant='body1'>.................</Typography>
        ) : (  */}
          <Box className={BoSty.content}>
            {post.isDeliveryRequest==="true" ? (
              <>
                <img
                  src={box}
                  alt='box'
                  style={{ width: '50px', height: '50px' }}
                />
                <Typography
                  variant='subtitle1'
                  style={{ color: '#fff' }}
                >
                  DELIVERY REQUEST
                </Typography>
              </>
            ) : (
              <>
                <img
                  src={bag}
                  alt='bag'
                  style={{ width: '50px', height: '50px' }}
                />
                <Typography
                  variant='subtitle1'
                  style={{ color: '#fff' }}
                >
                  COURIER REQUEST
                </Typography>
           </> 
            )} 
          </Box>
        {/* )} */}
      </div>
      </div>
      <Box
          style={{
            marginLeft: '2rem',
          }}
        >
          <Button
            variant='standard'
            startIcon={<ArrowBackIcon />}
            onClick={handleBack}
            style={{ color: '#3E3E3E', fontWeight: 100 }}
          >
            Back
          </Button>
        </Box>
               {post && post.map((data,ID) => (
          <Box className={classes.body}>
            <Box className={classes.info}>
              <Avatar className={classes.avatar} />
              <Box className={classes.icon}>
                <HtmlTooltip
                  title={
                    <>
                      <Typography variant='caption'>
                        Courier’s profile picture is hidden until they
                        feel safe and agree to proceed with the
                        transaction!
                      </Typography>
                    </>
                  }
                >
                  <IconButton
                    color='primary'
                    aria-label='upload picture'
                    component='span'
                  >
                    <InfoIcon
                      style={{
                        color: '#e0760b',
                        backgroundColor: '#fff',
                        borderRadius: '50%',
                      }}
                    />
                  </IconButton>
                </HtmlTooltip>
              </Box>
              
              <Typography variant='h6' style={{ color: '#e0760b' }}>
                {/* {request?.user?.firstName} */}
                {/* {data?.user?.firstName} */}
               Devesh
              </Typography>
              <Typography
                variant='body2'
                style={{
                  wordBreak: 'break-word',
                }}
              >
                {/* {request.description} */}
                {data.description}
                {/* fjasdhfjksdh sdjfkalsdjf */}
                              </Typography>
            </Box>
            <Box className={classes.body2}>
              <Box className={classes.content}>
                {/* <Typography
                  variant='button'
                  style={{
                    color: '#3E3E3E',
                    fontWeight: 'normal',
                  }}
                  className={classes_g.underline}
                >
                  Need prompt delivery between {request?.from}-
                  {request?.to}
                </Typography> */}
                <Box
                  style={{
                    display: 'flex',
                    columnGap: 20,
                    marginTop: '1rem',
                  }}
                >
                  <Box>
                    <Box>
                      <Typography
                        variant='body1'
                        className={classes.typo}
                      >
                        Destination route
                      </Typography>
                    </Box>
                    <Box className={classes.customBox}>
                      <Box>
                        <Typography
                          variant='body1'
                          style={{ width: '1rem' }}
                        >
                          From:
                        </Typography>
                        <Typography
                          variant='body1'
                          style={{ marginLeft: '0.5rem' }}
                        >
                          {data.from.name}-{data.fromCity.name}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          variant='body1'
                          style={{ width: '1rem' }}
                        >
                          To:
                        </Typography>
                        <Typography
                          variant='body1'
                          style={{ marginLeft: '0.5rem' }}
                        >
                          {data.to.name}-{data.tcity.name}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant='body1'
                    className={classes.typo}
                  >
                    Delivery Date
                  </Typography>
                  <Typography variant='body1'>
                    {new Date(data.deliveryDate).toDateString()}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant='body1'
                    className={classes.typo}
                  >
                    Category
                  </Typography>
                  <Box
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    {data?.categories.map((category) => (
                      <Typography variant='body1'>
                        {category.name}
                      </Typography>
                     ))}  
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant='body1'
                    className={classes.typo}
                  >
                    Weight
                  </Typography>
                  {/* {request.isDeliveryRequest ? ( */}
                    <Typography variant='body1'>
                      {data.weight} kg
                    </Typography>
                  {/* ) : ( */}
                    <Typography variant='body1'>
                      {/* {request.weightFrom}-{request.weightTo} kg */}
                    </Typography>
                  {/* )} */}
                </Box>

                <Box>
                  <Box>
                    <Typography
                      variant='body1'
                      className={classes.typo}
                    >
                      Dimensions
                    </Typography>
                  </Box>
                  <Box variant='body1' className={classes.customBox}>
                    <Box>
                      <Typography
                        variant='body1'
                        style={{ width: '1.3rem' }}
                      >
                        {' '}
                        Length:{' '}
                      </Typography>
                      <Typography
                        variant='body1'
                        style={{ marginLeft: '1rem' }}
                      >
                        {data.length.value} cm
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant='body1'
                        style={{ width: '1.3rem' }}
                      >
                        Breadth:{' '}
                      </Typography>
                      <Typography
                        variant='body1'
                        style={{ marginLeft: '1rem' }}
                      >
                        {data.breadth.value} cm
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        variant='body1'
                        style={{ width: '1.3rem' }}
                      >
                        Height:{' '}
                      </Typography>
                      <Typography
                        variant='body1'
                        style={{ marginLeft: '1rem' }}
                      >
                        {data.height.name} cm
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box>
                  <Typography
                    variant='body1'
                    className={classes.typo}
                  >
                    Payment
                  </Typography>
                  <Typography variant='body1'>
                    ${data.amount[0]} - ${data.amount[1]}
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.buttonBox}>
                <Button
                  // onClick={handleBack}
                  variant='contained'
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '0px',
                    color: '#3E3E3E',
                  }}
                >
                  Back To Listing
                </Button>
                <Button
                  // disabled={check}
                  variant='contained'
                  className={classes_g.greenButton}
                  onClick={handleMessage}
                  style={{textDecoration:'none'}}
                >
                  <Link to="/dashboard/Messages">
                  Send message
                  </Link>
                </Button>
              </Box>
            </Box>
          </Box>
       
          ))} 
        {/* )} */}
      </Box>
    </>
  );
};

export default PostDetails;
