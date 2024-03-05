import React from 'react';
import StarRating from './StartRating';

const Rating = () => {
  const handleRatingChange = (newRating) => {
    console.log(`New rating: ${newRating}`);
  };

  return (
    <div>
      <h1>Star Rating Example</h1>
      <StarRating totalStars={5} initialRating={3} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default Rating;
