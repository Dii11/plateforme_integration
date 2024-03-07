import React from "react";
import styles from "./profile.module.scss";
import logo from "../../../assets/logo-crew-level.png";

const Publication = () =>
  // PROPS

  //   {
  //     //   image,
  //     //   publicationTitle,
  //     //   groupName,
  //     //   publicationText,
  //   }
  {
    // const image = "image";
    const publicationTitle = "title";
    const groupName = "Public";
    const publicationText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore architecto natus consequuntur, similique esse eum enim provident incidunt aspernatur repellat mollitia, earum ducimus, ratione asperiores porro non nostrum placeat magni?";
    return (
      <div className={styles.publicationElement}>
        <div className={styles.publicationTitleWrapper}>
          <div className={styles.textImageTitle}>
            <img src={logo} alt="Profile image" className={styles.groupImage} />
            <div className={styles.publicationTitleText}>
              <p className={styles.thirdTitle}>{publicationTitle}</p>
              <p>{groupName}</p>
            </div>
          </div>
          <div>{publicationText}</div>
        </div>
      </div>
    );
  };

export default Publication;
