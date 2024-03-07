import { Dataset, LightbulbCircle } from '@mui/icons-material';
import SliderCard from '../Slider/card/CardSlider'
const Parcours = () => {
  const slides = [
    {
      title: 'Mention IA',
      subtitle: '2 parcours',
      content: ['GID','OCC'],
      icon:<Dataset/>
    },
    {
      title: 'Mention Informatique',
      subtitle: '3 parcours',
      content: ['GB','SR','IG'],
      icon:<LightbulbCircle/>    },
    // Add more slides as needed
  ];
  
  return (
    <div>
      <SliderCard slides={slides}/>
    </div>
  )
}

export default Parcours
