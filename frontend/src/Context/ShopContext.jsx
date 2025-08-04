import { createContext } from "react";
import { collections, products } from "../assets/products";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const value = { collections, products };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
