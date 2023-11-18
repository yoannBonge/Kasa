import React from "react";
import Header from "../components/Header";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import styles from "../styles/pages/_housing.module.scss";
import Rating from "../components/Rating";
import { useLocation } from "react-router-dom";

const Housing = () => {
  const location = useLocation();
  const { housing } = location.state;
  const displayEquipments = (housing) => {
    return housing.equipments.map((equipment, index) => (
      <li key={index} className={styles.equipmentsElements}>
        {equipment}
      </li>
    ));
  };
  const displayTags = (housing) => {
    return housing.tags.map((tag, index) => (
      <div key={index} className={styles.tag}>
        {tag}
      </div>
    ));
  };

  return (
    <>
      <Header />
      <main>
        <section className={styles.slideShow}>
          <Slideshow pictures={housing.pictures} />
        </section>
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
                <img src={housing.host.picture} className={styles.hostImage} />
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
