import { createContext } from "react";
import { collections, nouveaute, parfum, products } from "../assets/products";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const value = { collections, products, parfum, nouveaute };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
