import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import styles from "../styles/pages/_home.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner
          image='sea-rocks.png'
          altImage='Image de bannière montrant des rochers et arbres en bord de mer'
          showChildren
        >
          <span className={styles.bannerText}>
            Chez vous, <br className={styles.mobileLineBreak} />
            partout et ailleurs
          </span>
        </Banner>
        <section className={styles.cardsContainer}>
          <Card />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
