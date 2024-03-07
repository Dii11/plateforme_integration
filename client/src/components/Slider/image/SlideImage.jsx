// SlideImage.js
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography'

const SlideImage = ({ imageUrl, caption }) => {
  return (
    <div className="grid gap-5 justify-items-center">
      <img src={imageUrl} alt={caption} className='imageA'  />
     <Typography variant="subtitle2" color="initial">{caption}</Typography>
    </div>
  );
};

SlideImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default SlideImage;
