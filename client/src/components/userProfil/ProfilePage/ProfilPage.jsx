import styles from "./profile.module.scss";
import logo from "../../../assets/logo-crew-level.png";

const ProfilPage = () => {
  return (
    <div>
    <div className={styles.profileContainer}>
        <div className={styles.profileWrapperLeft}>
          <img src={logo} alt="Profile image" className={styles.profileImage} />
          <div className={styles.nameWrapper}>
            <p className={styles.firstTitle}>Username</p>
            <p className={styles.thirdTitle}>Niveau d'étude</p>
          </div>
        </div>
        <div className={styles.profileWrapperRight}></div>
      </div>
    </div>
  )
}

export default ProfilPage
