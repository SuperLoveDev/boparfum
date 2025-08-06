import React, { useContext } from "react";
import ParfumProduct from "./ParfumProduct";
import { ShopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const NouveauteProduct = () => {
  const { nouveaute } = useContext(ShopContext);
  return (
    <div className="my-15">
      <div className="flex flex-col gap-1 mb-15">
        <h1 className="font-bold text-4xl mb-5">Nouveauté</h1>
        <p className="font-extralight text-black/60">
          Découvrez les nouveautés chez BOPARFUM.
        </p>
        <p className="font-light text-black/60">
          Du contenu exclusif chaque semaine !
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 gap-y-10">
        {nouveaute.map((item) => (
          <Link to={`/produit/${item.id}`} key={item.id} className="">
            <ParfumProduct
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NouveauteProduct;
