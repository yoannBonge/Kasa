import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/components/_card.module.scss";

const Card = () => {
  ////////////////////////////////////////////////// STATE
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  ////////////////////////////////////////////////// BEHAVIOR
  const handleClick = (housingId) => {
    navigate(`/housing/${housingId}`);
  };

  useEffect(() => {
    fetch("housings.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  ////////////////////////////////////////////////// RENDER
  const renderCards = () => {
    return data.map((housing) => (
      <div
        className={styles.card}
        key={housing.id}
        onClick={() => handleClick(housing.id)}
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
    ));
  };

  return <>{renderCards()}</>;
};

export default Card;
