import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/pages/_page404.module.scss";

const Page404 = () => {
  return (
    <>
      <Header />
      <main>
        <span className={styles.title404}>404</span>
        <span className={styles.description}>
          Oups ! La page que vous demandez n'existe pas.
        </span>
        <a href='/' className={styles.backHome}>
          Retourner sur la page d'accueil
        </a>
      </main>
      <Footer />
    </>
  );
};

export default Page404;
