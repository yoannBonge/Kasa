// Banner.jsx
import React from "react";
import styles from "../styles/components/_banner.module.scss";

const Banner = ({ image, altImage, showChildren, children }) => {
  return (
    <section className={styles.banner}>
      <div className={styles.bannerContainer}>
        <img className={styles.bannerImage} src={image} alt={altImage} />
        {showChildren && children}
      </div>
    </section>
  );
};

export default Banner;
