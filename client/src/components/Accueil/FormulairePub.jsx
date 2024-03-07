import React from 'react'
import { BiCategory } from 'react-icons/bi';
import { FaCameraRetro } from 'react-icons/fa';
import { LuClipboardType } from "react-icons/lu";
import LoadingButton from '../button/ButtonLoading';
import MultilineInput from '../Input/MultilineInput';
import '../../Style/accueil.scss';
const img = 'https://imgv3.fotor.com/images/gallery/elegant-lady-with-flowers-in-headband-gray-hair-created-by-fotor-ai-image-generator.png';

function FormulairePub() {
    return (
        <div className='accueilContainer'>
            <div className='formPub'>
                <div className="title">Créer une publication</div>
                <div className="profil">
                    <img src={img} alt="pdp" />
                    <span>Username</span>
                </div>
                <div className="inputTextarea">
                    <MultilineInput />
                </div>
                <input type="file" id="buttonImg" style={{display:'none'}} />
                <label htmlFor="buttonImg">
                    <div className="button">
                        <div><FaCameraRetro size={22} /></div>
                        <span>Photos/Videos</span>
                    </div>
                </label>
                <div className="button">
                    <div><LuClipboardType size={22} /></div>
                    <span>Type publication</span>
                </div>
                <div className="button">
                    <div><BiCategory size={23} /></div>
                    <span>Catégorie publication</span>
                </div>
                <LoadingButton />
            </div>
        </div>
    )
}

export default FormulairePub