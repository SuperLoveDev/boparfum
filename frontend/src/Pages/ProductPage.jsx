import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const ProductPage = () => {
  const { id } = useParams();
  const { allProducts } = useContext(ShopContext);

  const product = allProducts.find((item) => item.id === id);
  return (
    <div className="my-20">
      <div className="flex justify-center items-center gap-15">
        <div className="">
          <img
            className="border border-gray-200 w-full max-w-[400px] "
            src={product.image}
            loading="lazy"
            alt={product.name}
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl sm:text-6xl">{product.name}</h1>
            <p className="">PRIX: {product.price} CFA</p>
          </div>
          <button className="border text-center text-sm p-4 max-w-[330px] hover:bg-black hover:text-white transition duration-300 ease-in-out cursor-pointer">
            Ajouter Au Panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
