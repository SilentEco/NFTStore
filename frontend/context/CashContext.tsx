import { createContext, useContext, useState } from "react";
import Cash from "./cash";

type CashContextProviderProps = {
  children: React.ReactNode;
};

type cashContextType = {
  cash: number;
  setCash: (c: number) => void;
};

const cashDefaultState: cashContextType = {
  cash: 0,
  setCash: () => {},
};

export const CashContext = createContext<cashContextType>(cashDefaultState);
export const useCash = () => {
  return useContext(CashContext);
};

export const CashContextProvider = ({ children }: CashContextProviderProps) => {
  const [cash, setCash] = useState(0);

  const value = { cash, setCash };

  return <CashContext.Provider value={value}>{children}</CashContext.Provider>;
};
