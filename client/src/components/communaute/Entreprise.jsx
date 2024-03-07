
import SlideClub from '../Slider/image/Index' 
import Image1 from '../../assets/axian.jpg'
import Image2 from '../../assets/2.jpg' 
import Image3 from '../../assets/3.jpg'
import Image6 from '../../assets/6.jpg'
import Image5 from '../../assets/5.jpg'
import Image7 from '../../assets/7.jpg'
import Image8 from '../../assets/8.jpg'

const Entreprise = () => {

    const slides = [
        {
          imageUrl:Image1,
          caption: "group axian",
        },
        {
          imageUrl: Image2,
          caption: 'DataStructure and Algorithm',
        },
        {
          imageUrl: Image3,
          caption: 'English Club for Practice',
        },
        
        {
            imageUrl: Image5,
            caption: 'CyberSecurity',
          },
        
          {
            imageUrl: Image6,
            caption: "Club Multimédia",
          },
        
          {
            imageUrl: Image7,
            caption: 'AS ENI',
          },
        
          {
            imageUrl: Image8,
            caption: 'ENI Volley Ball Club',
          },
          
        // Ajoutez autant de diapositives que nécessaire
      ];
  return (
    <div>
      <div className=''>

      </div>
      
      <div className='list'>
        <SlideClub slides={slides}/>
      </div>
    </div>
  )
}

export default Entreprise
