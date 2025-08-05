import React, { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { parfum } from "../assets/products";

const ParfumFilter = () => {
  const categories = ["Tous", "Homme", "Femme", "Unisexe"];
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [visible, setVisible] = useState(false);

  const filteredProducts =
    selectedCategory === "Tous"
      ? parfum
      : parfum.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col gap-6">
      {/* SECTION FILTRES */}
      <div className="flex flex-col ">
        <div className="flex justify-between items-center gap-3">
          <div className="flex justify-between items-center gap-3 mb-4">
            <h1 className="font-bold text-base text-gray-500">Catégorie</h1>
            {visible ? (
              <X
                onClick={() => setVisible(false)}
                className="cursor-pointer"
                size={20}
              />
            ) : (
              <ChevronDown
                onClick={() => setVisible(true)}
                className="cursor-pointer"
                size={20}
              />
            )}
          </div>
        </div>
        {visible && (
          <div className="flex flex-col gap-1 shadow-2xl border border-gray-300 max-w-[300px] p-4">
            {categories.map((cat) => (
              <p
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisible(false);
                }}
                className={`text-sm cursor-pointer p-2 rounded ${
                  selectedCategory === cat
                    ? "bg-black text-white"
                    : "text-gray-400 hover:bg-black hover:text-white"
                }`}
              >
                {cat}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* SECTION PRODUITS */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {filteredProducts.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <img
              src={item.image}
              alt={item.name}
              className="aspect-square border border-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-black text-base">{item.name}</p>
              <p className="text-gray-400 text-sm">{item.price} cfa</p>
              <button className="text-sm border border-gray-400 p-2 bg-black text-white cursor-pointer">
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParfumFilter;
