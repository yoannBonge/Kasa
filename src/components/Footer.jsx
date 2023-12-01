import React from "react";
import styles from "../styles/components/_footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerElements}>
        <img
          className={styles.logoFooter}
          src='/logo-footer.svg'
          alt='logo Kasa'
        />
        <span className={styles.rightsReserved}>
          © 2020 Kasa. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
