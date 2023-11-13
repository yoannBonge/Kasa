import React from "react";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

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
        <Cards />
      </main>
      <Footer />
    </>
  );
};

export default Home;
