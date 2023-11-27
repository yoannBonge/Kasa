// Banner.jsx
import React from "react";
import styles from "../styles/components/_banner.module.scss";
/**
 * Creates a banner component.
 *
 * @param {string} image - The source of the image.
 * @param {string} altImage - The alt of the image.
 * @param {boolean} showChildren - A boolean indicating whether to conditionally apply children.
 * @param {React.ReactNode} children - Content displayed overlay on the image (a sentence on page Home).
 *
 * @returns {React.ReactNode} - A banner component with the specified image source with alt, and children overlay
 * on the image.
 */
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
