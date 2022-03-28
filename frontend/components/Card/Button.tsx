import { NftCard } from "generated/graphql";
import {
  addAmountDispatch,
  addNFTDispatch,
  addToCartDispatch,
} from "lib/redux/dispatch";
import { addNFT } from "lib/redux/features/nftSlice";
import {
  HTMLAttributes,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

interface IProps {
  nft: NFT;
  className: string;
}

type NFT = NftCard & { isDisabled?: boolean };

const Button = ({ nft, className, ...props }: IProps) => {
  const [check, setCheck] = useState(Boolean);
  const dispatch = useDispatch();

  const notify = () =>
    toast.success("Added to cart!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });

  useEffect(() => {
    if (localStorage.getItem(`${nft!.Title}`) !== null) {
      setCheck(true);
    }
  }, [check, nft]);

  const ClickHandler = () => {
    notify();
    addToCartDispatch(dispatch);
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
      <div {...props} className={className} onClick={() => ClickHandler()}>
        Buy
      </div>
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
