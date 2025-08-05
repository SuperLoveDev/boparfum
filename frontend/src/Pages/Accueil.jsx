import React from "react";
import Hero from "../Components/hero";
import Title from "../Components/Title";
import Collections from "../Components/Collections";
import Populaire from "../Components/Populaire";
import Policy from "../Components/Policy";
import Footer from "../Components/Footer";

const Accueil = () => {
  return (
    <>
      <Hero />
      <Title text={"Nos collections"} />
      <Collections />
      <Populaire />
      <Policy />
      <Footer />
    </>
  );
};

export default Accueil;
