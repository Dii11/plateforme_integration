import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Logo from './Logo'
import Accueil from '../../modules/page/Accueil'
import Compte from '../../modules/page/Profile/Index'

function SideBar() {
    return (
        <Router>
        <div>
        <nav  >
          <div className='flex-col justify-between' >

            <Logo/>
            <ul  className='flex justify-between gap-10'>
              <li>
                <Link to="/" >Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              
            </ul>
            </div>
          </nav>
        

          <Routes>
        <Route path="/" exact element={<Accueil />} />
        <Route path="/compte" element={<Compte />} />
   
      </Routes>
        </div>
      </Router>
    )
}

export default SideBar
