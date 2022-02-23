import { basketContext } from "context/BasketContext";
import { NftCard } from "generated/graphql";
import { useContext, useEffect, useReducer, useState } from "react";
import styles from "../Card/cardstyle.module.scss";

interface IProps {
  nft: NftCard;
}

const Button = ({ nft }: IProps) => {
  const [purchased, setPurchased] = useState(false);
  const { amount, setAmount } = useContext(basketContext);

  const ClickHandler = () => {
    setAmount(amount + nft.Price!);
    setPurchased(true);
  };

  if (purchased) {
    return (
      <button disabled className={styles.disabled}>
        Buy
      </button>
    );
  } else {
    return (
      <>
        <button onClick={() => ClickHandler()}>Buy</button>
      </>
    );
  }
};

export default Button;
