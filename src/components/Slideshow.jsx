import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/components/_slideshow.module.scss";

const Slideshow = ({ title, pictures }) => {
  ////////////////////////////////////////////////// STATE
  const length = pictures.length;
  const ifOneOnlyPicture = length == 1 && styles.hidden;
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

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
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      {
        handleNext();
      }
    }, 5000);
    return () => clearTimeout(timerRef.current);
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
