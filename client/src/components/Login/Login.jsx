import { useState } from 'react';
import {FcGoogle} from 'react-icons/fc'
import { FaChevronLeft, FaChevronRight, FaEye, FaEyeSlash, FaFacebook } from 'react-icons/fa'
import '../../Style/login.scss'
import InputText from '../Input/InputText';

const Login = ({
    setLogin = () => { },
    login,
}) => {
    let [active, setActive] = useState(1);
    const Slide1 = () => (
        <>
            <span style={{fontSize: 25, marginBottom: 25}}>Bienvenue à bord !</span>
            <span style={{ lineHeight: 1.8, fontWeight: '600', fontSize: 13 }}>
                Découvrez une expérience de réunion en ligne qui va au-delà de vos attents.
                Libérez la puissance de la connectivité virtuelle et experimentez des réunions qui transcendent l'ordinaire et redéfinissent la collaboration en ligne.
                Rejoignez-nous dés maintenant pour une nouvelle ère de collaboration en ligne !
            </span>
        </>
    )
    const Slide2 = () => (
        <>
            <span style={{fontSize: 25, marginBottom: 25}}>lorem ipsum !</span>
            <span style={{ lineHeight: 1.8, fontWeight: '600', fontSize: 13 }}>
                Découvrez une expérience de réunion en ligne qui va au-delà de vos attents.
                Libérez la puissance de la connectivité virtuelle et experimentez des réunions qui transcendent l'ordinaire et redéfinissent la collaboration en ligne.
                Rejoignez-nous dés maintenant pour une nouvelle ère de collaboration en ligne !
            </span>
        </>
    )
    const Slide3 = () => (
        <>
            <span style={{ lineHeight: 1.8, fontWeight: '600', fontSize: 13 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur eveniet iusto facere tempora consequuntur atque ratione natus quibusdam repudiandae eius a repellat similique, voluptate labore quidem possimus culpa dolorum commodi.
            </span>
        </>
    )
    const sliders = [
        { id: 1, component: <Slide1 /> },
        { id: 2, component: <Slide2 /> },
        { id: 3, component: <Slide3 /> },
    ]
    return (
        <>
            <div className='loginRight'>
                <div style={{
                    width: '70%',
                    height: '60%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    position: 'relative',
                }}>
                    <div
                        className='btnSlide'
                        style={{ left: -70, }}
                        onClick={() => setActive(active > 1 ? active - 1 : sliders.length)} 
                    >
                        <FaChevronLeft color='#00000058' size={30} />
                    </div>
                    <div
                        className='btnSlide'
                        style={{ right: -70, }}
                        onClick={() => setActive(active < sliders.length ? active + 1: 1)} 
                    >
                        <FaChevronRight color='#00000058' size={30} />
                    </div>
                    {sliders.map(item => (item.id===active && item.component))}
                </div>
                <div style={{width: '40%'}}>
                    <button className='button'>Joindre un évènement</button>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                    position: 'absolute',
                    bottom: 20,
                }}>
                    {sliders.map(item => (<div
                        key={item.id}
                        style={{
                            width: item.id === active ? 20:8,
                            height: 8,
                            borderRadius: 50,
                            backgroundColor: item.id === active ? 'grey' : '#ccc',
                        }}
                    />))}
                </div>
            </div>
            <div
                className='loginLeft'
                style={{ backgroundColor: '#EEEEEE', alignItems: 'center' }}
            >
                <div style={{
                    width: '75%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 18
                }}>
                    <span className='rightTitle'>User Login</span>
                    <InputText
                        placeholder='Nom utilisateur ... '
                        error=''
                    />
                    <InputText
                        password
                        placeholder='Mot de passe ...'
                    />
                    <span style={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                    }}>Mot de passe oublier?</span>
                    <div>
                        <button className='button'>Se connecter</button>
                        <span>Vous n'avez pas de compte?<span 
                            onClick={() => setLogin(!login)}
                            className='lien'>S'inscrire</span></span>
                    </div>
                    
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <div className='divider' style={{width: '45%'}} />
                        <span style={{color:'grey'}}>ou</span>
                        <div className='divider' style={{width: '45%'}} />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        width: '100%',
                    }}>
                        {[{ icon: FcGoogle, title: 'Gmail' }, { icon: FaFacebook, title: 'Facebook' }].map(item => <div
                            key={item.title}
                            className='buttonBottom'
                        >
                            <item.icon size={18} style={{color: item.title==='Facebook' && '#1877f2'}} />
                            <span style={{fontSize:10}}>{item.title}</span>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;