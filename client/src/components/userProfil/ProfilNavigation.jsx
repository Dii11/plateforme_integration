import { Person, Settings } from "@mui/icons-material";
import { Icon } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProfilNavigation = () => {
  return (
    <div>
      <nav>
        <div className="flex justify-between">
          <ul className="flex-cols justify-between gap-10">
            <li>
              <Link to="/compte_profil">
              <div className="flex gap-3 items-">
                  <Icon>
                    <Person />
                  </Icon>
                  <span>Profil</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/compte_setting">
               
                <div>
                  <Icon>
                    <Settings />
                  </Icon>
                  <span>Paramètres</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ProfilNavigation;
