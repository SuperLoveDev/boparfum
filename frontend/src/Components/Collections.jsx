import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const Collections = () => {
  const { collections } = useContext(ShopContext);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
      {collections.map((item) => (
        <div key={item.id} className="flex flex-col gap-2">
          <img
            src={item.image}
            loading="lazy"
            alt={item.name}
            className="aspect-square border border-gray-200 hover:scale-105 hover:shadow-md cursor-pointer duration-75"
          />
          <div className="text-xl sm:text-2xl md:text-base">
            <h1>{item.name}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collections;
