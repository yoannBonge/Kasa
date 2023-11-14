import React, { useEffect, useState } from "react";
import styles from "../styles/components/_card.module.scss";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("housings.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data.map((housing) => (
        <div key={housing.id} className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.cardOverlay}>
              <h2 className={styles.cardTitle}>{housing.title}</h2>
            </div>
            <img
              className={styles.cardImage}
              src={housing.cover}
              alt={
                "Photo de couverture de l'annonce intitulée : " + housing.title
              }
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
