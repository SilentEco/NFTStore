import { NftCard } from "generated/graphql";
import { addAmountDispatch, addNFTDispatch } from "lib/redux/dispatch";
import { addNFT } from "lib/redux/features/nftSlice";
import { useContext, useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../Card/cardstyle.module.scss";

interface IProps {
  nft: NFT;
}

type NFT = NftCard & { isDisabled?: boolean };

const Button = ({ nft }: IProps) => {
  const [check, setCheck] = useState(Boolean);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(`${nft!.Title}`) !== null) {
      setCheck(true);
    }
  }, [check, nft]);

  const ClickHandler = () => {
    addNFTDispatch(
      nft.Title!,
      nft.Price!,
      nft.NFT?.data?.attributes?.url!,
      dispatch
    );
    addAmountDispatch(nft.Price!, dispatch);
  };
  return (
    <>
      <button onClick={() => ClickHandler()}>Buy</button>
      {/* {check ? (
        <button disabled={true} onClick={() => ClickHandler()}>
          In cart
        </button>
      ) : (
        <button disabled={nft.isDisabled} onClick={() => ClickHandler()}>
          Buy
        </button>
      )} */}
    </>
  );
};

export default Button;
