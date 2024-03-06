import Image from '../../assets/Image2.png'
import Typography from '@mui/material/Typography'
const ProfilContent = () => {
  return (
    <div className=''>
      <div className='flex justify-center pt-10'>
          <div>
            <img src={Image} alt="profil utilisateur"  className='rounded-full w-40 h-40'/>
            
            <Typography variant="subtitle1" color="secondary">Diamondra Mandimbiarisata</Typography>
          </div>
      </div>
    </div>
  )
}

export default ProfilContent
