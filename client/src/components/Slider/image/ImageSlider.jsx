// ImageSlider.js
import  { useState } from 'react';
import PropTypes from 'prop-types';
import {Button, MobileStepper} from '@mui/material'
import { ChevronLeft,ChevronRight } from "@mui/icons-material";
import SlideImage from './SlideImage';

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handleBack = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="grid gap-5 justify-items-center">
      <div className="flex gap-5">
        <Button onClick={handleBack}>{<ChevronLeft />}</Button>
        <SlideImage imageUrl={slides[currentSlide].imageUrl} caption={slides[currentSlide].caption} />
        <Button onClick={handleNext}>{<ChevronRight />}</Button>
      </div>
      <MobileStepper
        variant="dots"
        steps={slides.length}
        position="static"
        activeStep={currentSlide}
   
      />
    </div>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageSlider;
