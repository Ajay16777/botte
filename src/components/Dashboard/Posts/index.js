import React, { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Step1 from './AllPosts';
import Step2 from './ChoseAPost';
import Step3 from './CreatePost';
import { Box, Button } from '@material-ui/core';

const Posts = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [isDeliveryRequest, setIsDeliveryRequest] = useState(false);
  const [id, setID] = useState();

  useEffect(() => {
    setActiveStep(0);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validateStep1 = (request) => {
    if (request?._id) {
      setID(request?._id);
      handleNext();
      handleNext();
    } else {
      handleNext();
    }
  };

  const validateStep2 = (data) => {
    setIsDeliveryRequest(data);
    handleNext();
  };

  const validateStep3 = () => {
    handleNext();
  };

  const handleBack1 = () => {
    handleBack();
  };

  const backToDashboard = () => {
    handleBack();
    handleBack();
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Step1 validateStep={validateStep1} />;
      case 1:
        return (
          <Step2
            validateStep={validateStep2}
            handleBack={handleBack1}
          />
        );
      case 2:
        return (
          <Step3
            validateStep={validateStep3}
            handleBack={backToDashboard}
            isDeliveryRequest={isDeliveryRequest}
            id={id}
          />
        );

      default:
        return <div className='loader'></div>;
    }
  };

  return (
    <div>
      <Box mt={1}>
        {activeStep > 0 && activeStep < 3 && (
          <>
            <Box>
              <Button
                variant='standard'
                startIcon={<ArrowBackIosIcon />}
                onClick={handleBack}
                style={{ color: '#707070', fontWeight: 'normal' }}
              >
                Go Back
              </Button>
            </Box>
          </>
        )}
        {getStepContent(activeStep)}
      </Box>
    </div>
  );
};

export default Posts;
