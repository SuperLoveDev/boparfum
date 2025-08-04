import { createContext } from "react";
import collections from "../assets/products";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const value = { collections };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
