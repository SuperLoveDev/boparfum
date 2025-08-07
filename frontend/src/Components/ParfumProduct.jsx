import React, { useContext } from "react";
import { Minus, Plus } from "lucide-react";
import { ShopContext } from "../Context/ShopContext";

const ParfumProduct = ({ id, image, name, price }) => {
  const { addToCart, decreaseProduct, cart } = useContext(ShopContext);

  const productInCart = cart.find((item) => item.id === id);
  const quantity = productInCart ? productInCart.quantity : 0;

  return (
    <div className="flex flex-col gap-2 border p-3 rounded hover:shadow-md">
      <img
        src={image}
        alt={name}
        className="aspect-square object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <p className="font-medium text-sm">{name}</p>
      <p className="text-gray-500 text-xs">{price} CFA</p>
      <div className="flex justify-between items-center border border-gray-200 bg-transparent mt-5">
        <button
          onClick={() => decreaseProduct(id)}
          className="text-sm cursor-pointer"
        >
          <Minus />
        </button>
        <span>{quantity}</span>
        <button
          onClick={() => addToCart(id)}
          className="text-sm p-2  cursor-pointer"
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};

export default ParfumProduct;
