import React from "react";

const ParfumProduct = ({ image, name, price }) => {
  return (
    <div className="flex flex-col gap-2 border p-3 rounded hover:shadow-md">
      <img
        src={image}
        alt={name}
        className="aspect-square object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <p className="font-medium text-sm">{name}</p>
      <p className="text-gray-500 text-xs">{price} CFA</p>
      <button className="text-sm border border-gray-400 p-2 bg-black text-white cursor-pointer">
        Ajouter au panier
      </button>
    </div>
  );
};

export default ParfumProduct;
