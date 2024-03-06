import React from "react";
import styles from "./user-setting.module.scss";
import logo from "../../../assets/logo-crew-level.png";
import TextField from "@mui/material/TextField";

const UserSetting = () => {
  //   const parcours = [
  //     {
  //       value: "gid",
  //       label: "GID",
  //     },
  //     {
  //       value: "occ",
  //       label: "OCC",
  //     },
  //     {
  //       value: "gb",
  //       label: "GB",
  //     },
  //     {
  //       value: "sr",
  //       label: "Système et Réseau",
  //     },
  //     {
  //       value: "ig",
  //       label: "Informatique Générale",
  //     },
  //   ];
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
                  id="outlined-password-input"
                  label="N° Matricule"
                  type="number"
                />
              </div>
              <div className={styles.fieldElement}>
                <TextField
                  id="outlined-password-input"
                  label="Nom"
                  type="text"
                />
              </div>
              <div className={styles.fieldElement}>
                <TextField
                  id="outlined-password-input"
                  label="Prénom"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.fieldsColumn}>
              <div className={styles.fieldElement}>
                <TextField
                  id="outlined-password-input"
                  label="Adresse"
                  type="text"
                />
              </div>
              <div className={styles.fieldElement}>
                <TextField
                  id="outlined-password-input"
                  label="Numéro de téléphone"
                  type="number"
                />
              </div>
              <div className={styles.fieldElement}>
                <TextField
                  id="outlined-password-input"
                  label="Adresse"
                  type="mail"
                />
              </div>
            </div>
          </div>

          <div className={styles.fieldsContainer}>
            <div className={styles.fieldsColumn}>
              <div className={styles.fieldElement}>
                <TextField
                  id="outlined-password-input"
                  label="Parcours"
                  type="number"
                />
              </div>
            </div>
            <div className={styles.fieldsColumn}>
              <div className={styles.fieldElement}>
                <TextField
                  id="outlined-password-input"
                  label="Niveau"
                  type="number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
