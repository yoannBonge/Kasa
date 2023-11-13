import React from "react";
import styles from "../styles/components/_footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerElements}>
        <img
          className={styles.logoFooter}
          src='logo-footer.svg'
          alt='logo Kasa'
        />
        <img
          className={styles.rightsReserved}
          src='rights-reserved.svg'
          alt='Mention : Tous droits réservés'
        />
      </div>
    </footer>
  );
};

export default Footer;
