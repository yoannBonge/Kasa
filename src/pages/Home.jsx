import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import styles from "../styles/components/_home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner
          image='sea-rocks.png'
          alt='Image de bannière montrant des rochers et arbres en bord de mer'
          text='Chez vous, partout et ailleurs'
        />
        <div className={styles.cardsContainer}>
          <Card />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
