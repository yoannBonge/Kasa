// Banner.jsx
import React from "react";
import styles from "../styles/components/_banner.module.scss";

const Banner = ({ image, alt, text }) => {
  return (
    <div className={styles.bannerContainer}>
      {text && <span className={styles.bannerText}>{text}</span>}
      {image && <img className={styles.bannerImage} src={image} alt={alt} />}
    </div>
  );
};

export default Banner;
