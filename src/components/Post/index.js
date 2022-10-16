/* eslint-disable no-unused-vars */
import React, { useState} from 'react';
// import { useManyInputs } from 'hooks';
import globalStyles from 'styles/commonStyles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@material-ui/core';
import Step1 from './PostDetails';
import Step2 from './Message';
import Step3 from './Confirmation';
import simple from 'assets/orangebg.png';
import box from 'assets/box.png';
import bag from 'assets/bag.png';
import { Button, Typography } from '@material-ui/core';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const { makeStyles } = require('@material-ui/core');

const styles = makeStyles((theme) => ({
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
const Post = () => {
  const classes = styles();
  const classes_g = globalStyles();
  const [activeStep, setActiveStep] = useState(-1);
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));

  // const { id } = useParams();

  // const getRequest = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     let response = await axios.get(`${API_BASE_URL}/posts/${id}`);
  //     setRequest(response.data.post);
  //   } catch (error) {
  //     handleCatch(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [id]); // if userId changes, useEffect will run again

  // useEffect(() => {
  //   getRequest();
  // }, [getRequest]);

  // console.log('ID', id);

  // useEffect(() => {
  //   setActiveStep(0);
  // }, []);

  const handleNext = () => {
    alert('Next');
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    alert('Back');
    // setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateStep1 = (request) => {
    // console.log('validated step 1');
    // * If user if NOT Logged in , move him to Login page
    // if (!user) history.push('/auth/login?redirect=/store/cart');
    // else handleNext();
    // setRequest(request);
    handleNext();
  };
  const validateStep2 = () => {
    // console.log('validated step 1');
    handleNext();
  };
  const validateStep3 = () => {
    // console.log('validated step 2');
    handleNext();
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Step1 validateStep={validateStep1} post='post 1' />;
      case 1:
        return (
          <Step2
            validateStep={validateStep2}
            // request={request}
            // changeDeliveryMethod={(val) =>
            //   setState((st) => ({ ...st, deliveryMethod: val }))
            // }
          />
        );
      case 2:
        return <Step3 validateStep={validateStep3} post='post 3' />;

      default:
        return <div className='loader'></div>;
    }
  };

  // console.log('REQUEST', request);
  return (
    <div style={{ backgroundColor: '#FDF7F2', minHeight: '100vh' }}>
      {/* <img src={simple} alt='orange' className={classes.orange} /> */}
      <div className={classes.root}>
        {/* {loading || !request ? ( */}
          <Typography variant='body1'>.................</Typography>
        {/* ) : ( */}
          <Box className={classes.content}>
            {/* {request?.isDeliveryRequest ? ( */}
              {/* <> */}
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
              {/* </> */}
            {/* ) : ( */}
              {/* <> */}
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
              {/* </> */}
            {/* )} */}
          </Box>
        {/* )} */}
      </div>
      <div>
       {activeStep > 0 && activeStep < 3 && (
          <> 
            <Box
              style={
                xs ? { marginLeft: '1rem' } : { marginLeft: '2rem' }
              }
            >
              <Button
                variant='standard'
                startIcon={<ArrowBackIcon />}
                onClick={handleBack}
                style={{ color: '#3E3E3E', fontWeight: 100 }}
              >
                Back
              </Button>
               {activeStep > 0 && ( 
              <Typography
                variant='h6'
                style={{
                  marginLeft: '2rem',
                }}
              >
                Need Prompt delivery betwen London-UK
              </Typography>
               )} 
            </Box>
          </>
        )}

        {getStepContent(activeStep)}
      </div>
    </div>
  );
};

export default Post;
