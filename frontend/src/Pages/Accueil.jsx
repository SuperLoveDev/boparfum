import React from "react";
import Hero from "../Components/hero";
import Title from "../Components/Title";
import Collections from "../Components/Collections";
import Populaire from "../Components/Populaire";
import Policy from "../Components/Policy";

const Accueil = () => {
  return (
    <>
      <Hero />
      <Title text={"Nos collections"} />
      <Collections />
      <Populaire />
      <Policy />
    </>
  );
};

export default Accueil;
