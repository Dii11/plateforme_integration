import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import Accueil from "../../modules/page/Connected/Accueil";
import Profile from "../../modules/page/Connected/Profile";
import Communaute from "../../modules/page/Connected/Communaute";
import Apprentissage from "../../modules/page/Connected/Apprentissage";
import PubOne from "../Accueil/PubOne";
import FormulairePub from "../Accueil/FormulairePub";
import LoginPage from '../../modules/page/LoginPage';
export default function NavBar() {
  return (
    <Router>
      <div class="grid grid-cols-5 " >
        <div class="col-span-1 border-r-4 border-gray-500 ... h-dvh">
          <nav>
            <div className=" flex-cols ">
              <Logo />
              <ul className="mt-5 flex-col right-5 p-4 ">
                <li>
                  <Link to="/">Accueil</Link>
                </li>
                <li>
                  <Link to="/profil">Profil</Link>
                </li>
                <li>
                  <Link to="/apprentissage">Apprentissage</Link>
                </li>
                <li>
                  <Link to="/communaute">Communauté</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div class="col-span-4">
        
          <Routes>
            <Route path="/" exact element={<Accueil />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/apprentissage" element={<Apprentissage />} />
            <Route path="/communaute" element={<Communaute />} />
            <Route path="/publication/:id" element={<PubOne />} />
            <Route path="/publication" element={<FormulairePub />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
