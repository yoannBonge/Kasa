import React from "react";
import styles from "../styles/components/_collapse.module.scss";

const Collapse = ({ title, content }) => {
  return (
    <>
      <div className={styles.collapseContainer}>
        <div className={styles.cover}>
          {title && <h3 className={styles.category}>{title}</h3>}
          <img
            className={styles.arrow}
            src='arrow.svg'
            alt='Flèche pour ouvrir/fermer le contenu'
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>{content}</p>
      </div>
    </>
  );
};

export default Collapse;
