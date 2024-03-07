import styles from "./profile.module.scss";
import Publication from "./Publication";
import logo from "../../../assets/logo-crew-level.png";
import FloatingButton from "./FloatingButton";

const ProfilContentPage = () => {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <div className={styles.profileWrapperLeft}>
          <img src={logo} alt="Profile image" className={styles.profileImage} />
          <div className={styles.nameWrapper}>
            <p className={styles.firstTitle}>Username</p>
            <p className={styles.thirdTitle}>Niveau d'étude</p>
          </div>
        </div>
        <div className={styles.profileWrapperRight}></div>
      </div>

      <div className={styles.groupWrapper}>
        <p>Membre dans :</p>
        <div className={styles.groupWrapperContent}>
          <p className={styles.groupElement}>Groupe 1</p>
          <p className={styles.groupElement}>Groupe 2</p>
          <p className={styles.groupElement}>Groupe 3</p>
        </div>
      </div>

      <div className={styles.publicationWrapper}>
        <p className={styles.secondTitle}>Publication récent</p>

        {/* publication Element */}
        {/* <Publication />
        <Publication /> */}
      </div>

      <div className={styles.publicationWrapper}>
        <p className={styles.secondTitle}>Publication enregistré</p>

        {/* publication enregistré */}

        <Publication />
      </div>
      <div className={styles.floatingButton}>
        <FloatingButton />
      </div>
    </div>
  );
};

export default ProfilContentPage;
