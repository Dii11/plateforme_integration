
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Accueil from '../../modules/page/Accueil';
import Compte from '../../modules/page/Profile/Index';
import MenuProfil from '../userProfil/MenuProfile'
import Logo from './Logo';

export default function NavBar() {
    return (
      <Router>
        <div>
        <nav  >
          <div className='flex justify-between' >

            <Logo/>
            <ul  className='flex justify-between gap-10'>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              
            </ul>
            <MenuProfil/>
            </div>
          </nav>
        

          <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/compte" element={<Compte />} />
   
      </Routes>
        </div>
      </Router>
    );
  }