import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import Accueil from "../../modules/page/Connected/Accueil";
import Profile from "../../modules/page/Connected/Profile";
import Communaute from "../../modules/page/Connected/Communaute";
import Apprentissage from "../../modules/page/Connected/Apprentissage";
import { IconButton } from "@mui/material";
import { Group, Home, Person, School } from "@mui/icons-material";
export default function NavBar() {
  return (
    <Router>
      <div class="grid grid-cols-5 ">
        <div class="col-span-1 border-r-2 border-gray-500 ... h-dvh">
          <nav>
            <div className=" flex-cols p-4">
              <Logo />
              <ul className="mt-5 flex-col  ">
                <li>
                  <Link to="/" >
                    <div className="flex gap-5 items-center"></div>
                    <IconButton>
                      <Home />
                    </IconButton>
                    <span> Accueil</span>
                  </Link>
                </li>

                <li>
                  <Link to="/profil">
                    <div className="flex gap-5 items-center"></div>
                    <IconButton>
                      <Person />
                    </IconButton>
                    <span> Profil</span>
                  </Link>
                </li>
                <li>
                  <Link to="/apprentissage">
                    <div className="flex gap-5 items-center"></div>
                    <IconButton>
                      <School />
                    </IconButton>
                    <span> Apprentissage</span>
                  </Link>
                </li>
                <li>
                  <Link to="/communaute">
                    <div className="flex gap-5 items-center"></div>
                    <IconButton>
                      <Group />
                    </IconButton>
                    <span> Communauté</span>
                  </Link>
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}
