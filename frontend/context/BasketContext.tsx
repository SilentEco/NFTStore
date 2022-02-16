import { createContext, useContext, useState } from "react";

type basketContextProviderProps = {
  children: React.ReactNode;
};

type BasketContextType = {
  basket: number;
  setbasket: (c: number) => void;
};

const basketDefaultState: BasketContextType = {
  basket: 0,
  setbasket: () => {},
};

export const basketContext =
  createContext<BasketContextType>(basketDefaultState);
export const useBasket = () => {
  return useContext(basketContext);
};

export const basketContextProvider = ({
  children,
}: basketContextProviderProps) => {
  const [basket, setbasket] = useState(0);

  const value = { basket, setbasket };

  return (
    <basketContext.Provider value={value}>{children}</basketContext.Provider>
  );
};
