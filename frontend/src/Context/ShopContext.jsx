import { createContext } from "react";
import { collections, nouveaute, parfum, products } from "../assets/products";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const allProducts = [...parfum, ...nouveaute];

  const value = { collections, products, parfum, nouveaute, allProducts };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
