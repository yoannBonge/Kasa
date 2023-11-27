import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/components/_slideshow.module.scss";
/**
 * Creates a slideshow component.
 *
 * @param {string} title - The housing title for which the component displays pictures.
 * @param {string[]} pictures - An array of picture URLs displayed in the slideshow.
 *
 * @returns {React.ReactNode} - A slideshow component that sequentially presents a collection of pictures,
 * allowing navigation with arrows. It also features an automatic timer that advances to the next image every 5 seconds.
 */
const Slideshow = ({ title, pictures }) => {
  ////////////////////////////////////////////////// STATE
  const length = pictures.length;
  const ifOneOnlyPicture = length == 1 && styles.hidden;
  const [index, setIndex] = useState(0);

  ////////////////////////////////////////////////// BEHAVIOR
  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  ////////////////////////////////////////////////// RENDER
  return (
    <section className={styles.slideShow}>
      <div className={styles.slideshowContainer}>
        <img
          className={styles.picture}
          src={pictures[index]}
          alt={`Photo ${index + 1}/${length} du logement intitulé : ${title}`}
        />
        <img
          className={`${styles.arrowPrev} ${ifOneOnlyPicture}`}
          src='carrousel-arrow-left.svg'
          alt='Flèche image précédente'
          onClick={handlePrevious}
        />
        <img
          className={`${styles.arrowNext} ${ifOneOnlyPicture}`}
          src='carrousel-arrow-right.svg'
          alt='Flèche image suivante'
          onClick={handleNext}
        />
        <span className={`${styles.indexPicture} ${ifOneOnlyPicture}`}>
          {index + 1}/{length}
        </span>
      </div>
    </section>
  );
};

export default Slideshow;
