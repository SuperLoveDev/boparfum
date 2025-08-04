import React, { useContext } from "react";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";

const Populaire = () => {
  const { products } = useContext(ShopContext);
  return (
    <div className="">
      <Title
        className="text-base sm:text-2xl"
        text={"Collection privée intense 100ml"}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 gap-y-5">
        {products.slice(0, 6).map((item) => (
          <div key={item.id} className="flex flex-col gap-1">
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="aspect-square border border-gray-200 bg-gray-400 cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="flex flex-col gap-1">
              <p className="text-gray-500 text-xl">{item.name}</p>
              <p className="text-sm">{item.description}</p>
              <p className="text-red-500 text-2xl">{item.newPrice} CFA</p>
              <p className="line-through">{item.oldPrice} CFA</p>
            </div>

            <div className="max-w-[200px] border p-3 flex items-center justify-center rounded-sm bg bg-black text-white hover:bg-black/80 cursor-pointer">
              <button className="cursor-pointer">Ajouter au panier</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Populaire;
