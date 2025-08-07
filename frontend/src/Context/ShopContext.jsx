import { createContext, useState } from "react";
import { collections, nouveaute, parfum, products } from "../assets/products";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const allProducts = [...parfum, ...nouveaute];

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { id: productId, quantity: 1 }];
      }
    });
  };

  const decreaseProduct = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === productId);

      if (!existingProduct) return prevCart;

      if (existingProduct.quantity === 1) {
        return prevCart.filter((item) => item.id !== productId);
      } else {
        return prevCart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const deleteProduct = (productId) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  };

  const value = {
    collections,
    products,
    parfum,
    nouveaute,
    allProducts,
    cart,
    addToCart,
    decreaseProduct,
    deleteProduct,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopProvider;
