// SlideShow.js
import React, { useState } from 'react';
import { Button, MobileStepper } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import CardComponent from './CardComponent';

const slides = [
  {
    title: 'Slide 1',
    subtitle: 'Subtitle 1',
    content: 'Content of slide 1...',
  },
  {
    title: 'Slide 2',
    subtitle: 'Subtitle 2',
    content: 'Content of slide 2...',
  },
  // Add more slides as needed
];

const CardSlider = () => {
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
