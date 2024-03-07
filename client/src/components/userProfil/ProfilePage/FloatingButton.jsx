import React from "react";
import styles from "./profile.module.scss";
import addIcon from "../../../assets/add-icon.png";

const FloatingButton = () => {
  return (
    <div className={styles.buttonElement}>
      <img src={addIcon} alt="Add icon" className={styles.addIcon} />
    </div>
  );
};

export default FloatingButton;
