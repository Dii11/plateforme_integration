import React from "react";
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";
import Logo from "./Logo";
import Accueil from "../../modules/page/Connected/Accueil";
import Profile from "../../modules/page/Connected/Profile";
import Communaute from "../../modules/page/Connected/Communaute";
import Apprentissage from "../../modules/page/Connected/Apprentissage";
import PubOne from "../Accueil/PubOne";
import FormulairePub from "../Accueil/FormulairePub";
import LoginPage from '../../modules/page/LoginPage';
import { IconButton } from "@mui/material";
import { CalendarMonth, Group, Home, Person, School } from "@mui/icons-material";
import '../../Style/sideBar.scss';
import MonCalendrier from "../../modules/page/Connected/Calendar";

export default function NavBar() {
  return (
    <Router>
      <div className="grid grid-cols-5">
        <div className="col-span-1 border-r-2 border-gray-200 h-dvh">
          <nav>
            <div className="flex-cols p-4">
              <Logo />
              <ul className="mt-5 flex-col">
                <li>
                  <NavLink to="/"  >
                    <div className="flex gap-5 items-center">
                      <IconButton>
                        <Home />
                      </IconButton>
                      <span>Accueil</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/profil" >
                    <div className="flex gap-5 items-center">
                      <IconButton>
                        <Person />
                      </IconButton>
                      <span>Profil</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/apprentissage" >
                    <div className="flex gap-5 items-center">
                      <IconButton>
                        <School />
                      </IconButton>
                      <span>Apprentissage</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/communaute" >
                    <div className="flex gap-5 items-center">
                      <IconButton>
                        <Group />
                      </IconButton>
                      <span>Communauté</span>
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/calendrier" >
                    <div className="flex gap-5 items-center">
                      <IconButton>
                        <CalendarMonth />
                      </IconButton>
                      <span>Calendrier</span>
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="col-span-4 px-5">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/profil" element={<Profile />} />
            <Route path="/apprentissage" element={<Apprentissage />} />
            <Route path="/communaute" element={<Communaute />} />
            <Route path="/publication/:id" element={<PubOne />} />
            <Route path="/publication" element={<FormulairePub />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/calendrier" element={<MonCalendrier />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
