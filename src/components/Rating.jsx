import React from "react";
import styles from "../styles/components/_rating.module.scss";

const Rating = ({ rating }) => {
  const numberOfStars = parseInt(rating, 10);

  const starsArray = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < numberOfStars ? "red-star.svg" : "gray-star.svg"}
      alt='étoile'
      className={styles.star}
    />
  ));

  return <div className={styles.ratingContainer}>{starsArray}</div>;
};

export default Rating;
