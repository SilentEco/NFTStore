import React, { createContext, useState } from "react";

interface iProps {
  children: React.ReactNode;
}

const basketDefaultContext = {
  amount: 0,
  setAmount: (_amount: number) => {},
};

const cartDefaultContext = {
  cart: [{ name: "", price: 0, image: "" }],
  setCart: (_cart: { name: string; price: number; image: string }[]) => {},
};

export const cartContext = createContext(cartDefaultContext);

export const basketContext = createContext(basketDefaultContext);

export const BasketProvider = ({ children }: iProps) => {
  const [amount, setAmount] = useState(basketDefaultContext.amount);
  const [cart, setCart] = useState(cartDefaultContext.cart);

  return (
    <basketContext.Provider value={{ amount, setAmount }}>
      <cartContext.Provider value={{ cart, setCart }}>
        {children}
      </cartContext.Provider>
    </basketContext.Provider>
  );
};
