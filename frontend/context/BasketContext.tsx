import React, { createContext, useState } from "react";

interface iProps {
  children: React.ReactNode;
}

const basketDefaultContext = {
  amount: 0,
  setAmount: (_amount: number) => {},
};

const purchasedDefaultContext = {
  purchased: false,
  setPurchased: (_purchased: boolean) => {},
};

export const purchasedContext = createContext(purchasedDefaultContext);

export const basketContext = createContext(basketDefaultContext);

export const BasketProvider = ({ children }: iProps) => {
  const [amount, setAmount] = useState(basketDefaultContext.amount);
  const [purchased, setPurchased] = useState(purchasedDefaultContext.purchased);

  return (
    <basketContext.Provider value={{ amount, setAmount }}>
      <purchasedContext.Provider value={{ purchased, setPurchased }}>
        {children}
      </purchasedContext.Provider>
    </basketContext.Provider>
  );
};
