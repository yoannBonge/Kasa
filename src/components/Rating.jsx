import React from "react";
import styles from "../styles/components/_rating.module.scss";
/**
 * Creates a rating component.
 *
 * @param {string} rating - A rating from "1" to "5".
 *
 * @returns {React.ReactNode} - A rating component consisting of 5 stars, either red or grey, depending
 * on the passed rating prop (ex: 2 red stars and 3 grey stars if the rating is "2").
 */
const Rating = ({ rating }) => {
  const numberOfStars = parseInt(rating, 10);

  const starsArray = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      src={index < numberOfStars ? "/red-star.svg" : "/gray-star.svg"}
      alt='étoile'
      className={styles.star}
    />
  ));

  return <div className={styles.ratingContainer}>{starsArray}</div>;
};

export default Rating;
