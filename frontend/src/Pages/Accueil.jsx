import React from "react";
import Hero from "../Components/hero";
import Title from "../Components/Title";
import Collections from "../Components/Collections";

const Accueil = () => {
  return (
    <>
      <Hero />
      <Title text={"Nos collections"} />
      <Collections />
    </>
  );
};

export default Accueil;
