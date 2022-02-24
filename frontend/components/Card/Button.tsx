import { basketContext, cartContext } from "context/BasketContext";
import { NftCard } from "generated/graphql";
import { useContext, useEffect, useReducer, useState } from "react";
import styles from "../Card/cardstyle.module.scss";

interface IProps {
  nft: NFT;
}

type NFT = NftCard & { isDisabled?: boolean };

const Button = ({ nft }: IProps) => {
  const { amount, setAmount } = useContext(basketContext);
  const { cart, setCart } = useContext(cartContext);
  const [check, setCheck] = useState(Boolean);

  useEffect(() => {
    if (localStorage.getItem(`${nft!.Title}`) !== null) {
      setCheck(true);
    }
  }, [check, nft]);

  const ClickHandler = () => {
    setAmount(amount + nft.Price!);
    const object = {
      name: nft.Title!,
      price: nft.Price!,
      image: nft.NFT?.data?.attributes?.url!,
    };
    setCart([...cart, object]);
    localStorage.setItem(`${nft.Title}`, `${nft.Price}`);
    nft.isDisabled = true;
  };

  return (
    <>
      {check ? (
        <button disabled={true} onClick={() => ClickHandler()}>
          Buy
        </button>
      ) : (
        <button disabled={nft.isDisabled} onClick={() => ClickHandler()}>
          Buy
        </button>
      )}
    </>
  );
};

export default Button;
