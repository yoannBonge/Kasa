import React, { useState } from "react";
import styles from "../styles/components/_slideshow.module.scss";

const Slideshow = ({ pictures }) => {
  return (
    <>
      <div className={styles.slideshowContainer}>
        <img
          className={styles.arrowLeft}
          src='carrousel-arrow-left.svg'
          alt='Flèche image précédente'
          // onClick={handlePrevious}
        />
        <img
          className={styles.arrowRight}
          src='carrousel-arrow-right.svg'
          alt='Flèche image suivante'
          // onClick={handleNext}
        />
        <span className={styles.indexPicture}>1/4</span>
      </div>
    </>
  );
};

export default Slideshow;
