// ImageSlider.js
import  { useState } from 'react';
import PropTypes from 'prop-types';
import {Button} from '@mui/material'
import { ChevronLeft,ChevronRight } from "@mui/icons-material";
import SlideImage from './SlideImage';

const ImageSlider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex gap-5">
      <Button onClick={goToPrevSlide}>{<ChevronLeft/>}</Button>
      <SlideImage imageUrl={slides[currentSlide].imageUrl} caption={slides[currentSlide].caption} />
      <Button onClick={goToNextSlide}>{<ChevronRight/>}</Button>
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
