import { useCash } from "context/CashContext";
import { useState } from "react";
import styles from "../Card/cardstyle.module.scss";

const Button = ({ nft }: any) => {
  const [purchased, setPurchased] = useState(false);

  const { cash, setCash } = useCash();

  const handlePurchase = (price: number) => {
    setPurchased(true);
    let newPrice = cash + price;
    setCash(newPrice);
  };
  if (purchased) {
    return (
      <button disabled className={styles.disabled}>
        Buy
      </button>
    );
  } else {
    return (
      <button
        onClick={() => {
          handlePurchase(nft.Price);
        }}
      >
        Buy
      </button>
    );
  }
};

export default Button;
