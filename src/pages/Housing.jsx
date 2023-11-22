import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import styles from "../styles/pages/_housing.module.scss";

const Housing = () => {
  ////////////////////////////////////////////////// STATE
  const location = useLocation();
  const { housing } = location.state;

  ////////////////////////////////////////////////// BEHAVIOR
  const displayTags = (housing) => {
    return housing.tags.map((tag) => (
      <div key={tag} className={styles.tag}>
        {tag}
      </div>
    ));
  };
  const displayEquipments = (housing) => {
    return housing.equipments.map((equipment) => (
      <li key={equipment} className={styles.equipmentsElements}>
        {equipment}
      </li>
    ));
  };

  ////////////////////////////////////////////////// RENDER
  return (
    <>
      <Header />
      <main>
        <Slideshow pictures={housing.pictures} title={housing.title} />
        <section className={styles.housingInfos}>
          <div className={styles.mainInfos}>
            <div className={styles.titleInfos}>
              <h2 className={styles.title}>{housing.title}</h2>
              <h3 className={styles.location}>{housing.location}</h3>
              <div className={styles.tagsContainer}>{displayTags(housing)}</div>
            </div>
            <div className={styles.host}>
              <div className={styles.hostInfos}>
                <h3 className={styles.hostName}>{housing.host.name}</h3>
                <img className={styles.hostImage} src={housing.host.picture} />
              </div>
              <div className={styles.hostRating}>
                <Rating rating={housing.rating} />
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.description}>
              <Collapse housingStyle title='Description'>
                <p>{housing.description}</p>
              </Collapse>
            </div>
            <div className={styles.equipment}>
              <Collapse housingStyle title='Équipements'>
                <ul>{displayEquipments(housing)}</ul>
              </Collapse>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Housing;
