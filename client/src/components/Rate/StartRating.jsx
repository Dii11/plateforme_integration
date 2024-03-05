import React, { useState } from 'react';
import { Star, StarBorder } from '@mui/icons-material';

const StarRating = ({ totalStars = 5, initialRating = 0, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (clickedIndex) => {
    setRating(clickedIndex + 1);

    if (onRatingChange) {
      onRatingChange(clickedIndex + 1);
    }
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          style={{ cursor: 'pointer', marginRight: '4px' }}
        >
          {index < rating ? <Star color='warning'/> : <StarBorder />}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
