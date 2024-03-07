import React, { useState } from "react";
import styles from "./user-setting.module.scss";
import logo from "../../../assets/logo-crew-level.png";
import TextField from "@mui/material/TextField";
import { Button, MenuItem, Select } from "@mui/material";

const UserSetting = () =>
  // {
  // matriculeNumber,
  // firstName,
  // lastName,
  // adress,
  // phoneNumber,
  // email,
  // parcours,
  // niveau,
  // }
  {
    const [matriculeNumber, setMatriculeNumber] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [adress, setAdress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [parcours, setParcours] = useState("gid");
    const [niveau, setNiveau] = useState("l1");

    return (
      <div className={styles.userSettingContainer}>
        <div className={styles.imageContainer}>
          <img src={logo} alt="Profile image" className={styles.profileImage} />
        </div>
        <div className={styles.informationWrapper}>
          <div className={styles.personnalInformation}>
            <div className={styles.subtitleWrapper}>
              <p>Informations personnelles</p>
              <div className={styles.titleLine} />
            </div>

            <div className={styles.fieldsContainer}>
              <div className={styles.fieldsColumn}>
                <div className={styles.fieldElement}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="N° Matricule"
                    type="number"
                    value={matriculeNumber}
                    onChange={(e) => setMatriculeNumber(e.target.value)}
                  />
                </div>
                <div className={styles.fieldElement}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Nom"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className={styles.fieldElement}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Prénom"
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fieldsColumn}>
                <div className={styles.fieldElement}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Adresse"
                    type="text"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </div>
                <div className={styles.fieldElement}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="Numéro de téléphone"
                    type="number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className={styles.fieldElement}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    label="E-mail"
                    type="mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.educationInformation}>
            <div className={styles.subtitleWrapper}>
              <p>Informations universitaire</p>
              <div className={styles.titleLine} />
            </div>
            <div className={styles.fieldsContainer}>
              <div className={styles.fieldsColumn}>
                <div className={styles.fieldElement}>
                  <Select
                    labelId="parcours-simple-select-label"
                    id="parcours-select"
                    value={parcours}
                    label="Parcours-select"
                    onChange={(e) => setParcours(e.target.value)}
                  >
                    <MenuItem value={"gid"}>
                      Gouvernance et Ingénierie des Données
                    </MenuItem>
                    <MenuItem value={"occ"}>
                      Objets Connectés et Cybersécurité
                    </MenuItem>
                    <MenuItem value={"gb"}>
                      Génie Logiciel et Base de Données
                    </MenuItem>
                    <MenuItem value={"sr"}>Système et réseaux</MenuItem>
                    <MenuItem value={"ig"}>Informatique Générale</MenuItem>
                  </Select>
                </div>
              </div>
              <div className={styles.fieldsColumn}>
                <div className={styles.fieldElement}>
                  <Select
                    labelId="niveauSelect"
                    id="niveau-select"
                    value={niveau}
                    label="Niveau"
                    onChange={(e) => setNiveau(e.target.value)}
                  >
                    <MenuItem value={"l1"}>L1</MenuItem>
                    <MenuItem value={"l2"}>L2</MenuItem>
                    <MenuItem value={"l3"}>L3</MenuItem>
                    <MenuItem value={"m1"}>M1</MenuItem>
                    <MenuItem value={"mé"}>M2</MenuItem>
                    <MenuItem value={"sr"}>Système et réseaux</MenuItem>
                    <MenuItem value={"ig"}>Informatique Générale</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant="contained">Enregistrer</Button>
        </div>
      </div>
    );
  };

export default UserSetting;
