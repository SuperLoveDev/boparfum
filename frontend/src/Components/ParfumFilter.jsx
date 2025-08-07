import React, { useContext, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import ParfumProduct from "./ParfumProduct";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ParfumFilter = () => {
  const { parfum } = useContext(ShopContext);
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
        <div className="flex justify-between items-center gap-3 mt-15">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 gap-y-10">
        {filteredProducts.map((item) => (
          <div to={`/produit/${item.id}`} key={item.id} className="">
            <ParfumProduct
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParfumFilter;
