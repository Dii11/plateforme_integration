// SlideShow.js
import React, { useState } from 'react';
import { Button, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import CardComponent from './CardComponent';


const CardSlider = ({slides}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <CardComponent {...slides[activeStep]} />
      <MobileStepper
        variant="dots"
        steps={slides.length}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === slides.length - 1}>
            
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            
          </Button>
        }
      />
    </div>
  );
};

CardSlider.propTypes = {};

export default CardSlider;
