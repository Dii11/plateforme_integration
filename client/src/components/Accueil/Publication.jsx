import React from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import { BiMessageRounded } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Comment from './Comment';
import img from '../../assets/Image1.png';
import '../../Style/pub.scss';

function Publication({
    data,
    commentaire,
}) {
    const duration = moment(data.date).fromNow();

    return (
        <div className='cardPublication'>
            <div className="pubHeader">
                <div className="photoprofil">
                    <img src={data.pdp ? data.pdp : img} alt="pdp" className='img' />
                </div>
                <div className='userprofil'>
                    <span className='username'>{data.username}</span>
                    <span className='datepub'>Il y a {duration}</span>
                </div>
            </div>
            <div className="pubDesc">
                {data.desc}
            </div>
            <img src={data.img ? data.img : img} alt='pubimg' />
            <div className="pubFooter">
                <div className="pubFooterIcon">
                    <div><FaHeart size={22} /><span>{data.countLike}</span></div>
                    <div><BiMessageRounded size={24} /><span>{data.countComment}</span></div>
                </div>
                <Link to={`/publication/${data.id}`} className='pubCommentaire'>
                    Votre commentaire ...
                </Link>
            </div>
            <div>
                {commentaire.map((_, i) =>
                    <Comment
                        key={i}
                        profil={img}
                        username={"Kennyh Sedera"}
                        contenu={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maiores rerum nemo hic! Porro adipisci cum soluta vitae similique,"}
                    />
                )}
            </div>
        </div>
    )
}

export default Publication;
