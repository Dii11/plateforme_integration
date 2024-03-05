
import ImageSlider from './ImageSlider';
import Image1 from '../../assets/Image1.png';
import Image2 from '../../assets/Image2.png';

const slides = [
  {
    imageUrl:Image1,
    caption: 'Légende de l\'image 1',
  },
  {
    imageUrl: Image2,
    caption: 'Légende de l\'image 2',
  },
  {
    imageUrl: Image2,
    caption: 'Légende de l\'image 2',
  },
  
  // Ajoutez autant de diapositives que nécessaire
];

const SliderIndex = () => {
  return (
    <div>
      <h1>Diaporama d'Images</h1>
      <ImageSlider slides={slides} />
    </div>
  );
};

export default SliderIndex;
