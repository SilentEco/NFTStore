import React, { createContext, useState } from "react";

interface iProps {
  children: React.ReactNode;
}

const basketDefaultContext = {
  amount: 0,
  setAmount: (_amount: number) => {},
};

export const basketContext = createContext(basketDefaultContext);

export const BasketProvider = ({ children }: iProps) => {
  const [amount, setAmount] = useState(basketDefaultContext.amount);

  return (
    <basketContext.Provider value={{ amount, setAmount }}>
      {children}
    </basketContext.Provider>
  );
};
