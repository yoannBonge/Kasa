import React, { useEffect, useState } from "react";
import styles from "../styles/components/_card.module.scss";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const handleClick = (housing) => {
    navigate("/housing", { state: { housing } });
  };

  useEffect(() => {
    fetch("housings.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data.map((housing) => (
        <div
          className={styles.card}
          key={housing.id}
          onClick={() => handleClick(housing)}
        >
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
