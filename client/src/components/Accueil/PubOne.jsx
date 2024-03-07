import React from 'react';
import Publication from './Publication';
import { datas } from '../../service/api/datas';
import moment from 'moment';
import '../../Style/accueil.scss';
import { useParams } from 'react-router-dom';

function PubOne() {
    const { id } = useParams();
    const publication = datas.find(element => element.id === parseInt(id));

    const duration = moment(publication.date).fromNow();

    return (
        <div className='accueilContainer'>
            <Publication data={publication} commentaire={[1, 2, 3, 5, 4]} />
        </div>
    );
}

export default PubOne;
