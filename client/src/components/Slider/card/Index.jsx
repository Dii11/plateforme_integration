import React from 'react'
import CardSlider from './CardSlider';

const Index = () => {
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
      
  return (
    <div>
      <CardSlider slides={slides}/>
    </div>
  )
}

export default Index
