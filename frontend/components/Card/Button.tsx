import { basketContext, purchasedContext } from "context/BasketContext";
import { NftCard } from "generated/graphql";
import { useContext, useEffect, useReducer, useState } from "react";
import styles from "../Card/cardstyle.module.scss";

interface IProps {
  nft: NFT;
}

type NFT = NftCard & { isDisabled: boolean };

const Button = ({ nft }: IProps) => {
  const { amount, setAmount } = useContext(basketContext);

  const ClickHandler = () => {
    setAmount(amount + nft.Price!);
    nft.isDisabled = true;
  };
  return (
    <button disabled={nft.isDisabled} onClick={() => ClickHandler()}>
      Buy
    </button>
  );
};

export default Button;
