import React from 'react';
import Publication from '../../../components/Accueil/Publication';
import '../../../Style/accueil.scss';
import { datas } from '../../../service/api/datas';
import GoogleMap from '../../../components/Map/GoogleMap';

const Accueil = () => {
  
  return (
    <div className='accueilContainer'>
      {/* <GoogleMap /> */}
      {datas.map(item=><Publication data={item} key={item.id} commentaire={[1]} />)}
    </div>
  )
}

export default Accueil
