import { useState } from 'react';
import {FcGoogle} from 'react-icons/fc'
import { FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa'
import '../../Style/login.scss'
import InputText from '../Input/InputText';
import UploadImage from '../Input/UploadImage';
// import { GoogleLogin } from 'react-google-login';

const Register = ({
    setLogin = () => { },
    login,
}) => {
    const [hidePwd, setHidePwd] = useState(false);
    const [hidePwd1, setHidePwd1] = useState(false);
    // const responseGoogle = (response) => {
    //     if (response.error === "popup_closed_by_user") {
    //         alert("La fenêtre d'authentification a été fermée par l'utilisateur. Veuillez réessayer.");
    //     } else {
    //         // Gérer d'autres réponses ou succès de l'authentification.
    //     }
    // }
    return (
        <>
            <div className='loginLeft'>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '72%',
                    gap: 10,
                }}>
                    <span style={{
                        fontSize: 55,
                        marginTop: '20%',
                        fontWeight: '400'
                    }}>Crew level</span>
                    <span style={{ lineHeight: 1.8, fontWeight: '600', fontSize: 13 }}>Optimisez votre expérience en créant un compte dès aujourd'hui.
                    Des salles virtuelles personalisées et des fonctionnalités exclusives vous attendent.</span>
                </div>
            </div>
            <div className='loginRight' style={{backgroundColor: '#EEEEEE'}}>
                <div style={{
                    width: '85%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 20
                }}>
                    <span className='rightTitle'>Inscription</span>
                    <div className='inputGroup'>
                        <div style={{width: '49%'}}>
                            <InputText
                                placeholder='Numéro matricule'
                            />
                        </div>
                        <div style={{ width: '49%'}} >
                            <InputText
                                placeholder='Nom'
                            />
                        </div>
                    </div>
                    <div className='inputGroup'>
                        <div style={{width: '49%'}}>
                            <InputText
                                placeholder='Prénom'
                            />
                        </div>
                        <div style={{ width: '49%'}} >
                            <InputText
                                placeholder='Adresse'
                            />
                        </div>
                    </div>
                    <div className='inputGroup'>
                        <div style={{width: '49%'}}>
                            <InputText
                                placeholder='Numéro tel'
                                type='number'
                            />
                        </div>
                        <div style={{ width: '49%'}} >
                            <InputText
                                placeholder='Adresse mail'
                            />
                        </div>
                    </div>
                    <div className='inputGroup'>
                        <div style={{width: '49%'}}>
                            <InputText
                                placeholder='Parcours'
                            />
                        </div>
                        <div style={{ width: '49%'}} >
                            <InputText
                                placeholder='Niveau'
                            />
                        </div>
                    </div>
                    <div className='inputGroup'>
                        <div style={{width: '49%'}}>
                            <UploadImage />
                        </div>
                        <div style={{ width: '49%'}} >
                            <InputText
                                placeholder='Mot de passe ...'
                                password
                            />
                        </div>
                    </div>
                    <div style={{width:'80%'}}>
                        <button className='button'>Créer un compte</button>
                    </div>
                    <div>Vous avez déjà un compte?
                        <span onClick={() => setLogin(!login)}
                        className='lien'>Se connecter</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;