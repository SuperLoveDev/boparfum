import React from "react";
import Hero from "../Components/hero";
import Title from "../Components/Title";
import Collections from "../Components/Collections";
import Populaire from "../Components/Populaire";

const Accueil = () => {
  return (
    <>
      <Hero />
      <Title text={"Nos collections"} />
      <Collections />
      <Populaire />
    </>
  );
};

export default Accueil;
