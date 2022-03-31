import { RootState } from "lib/redux/app/store";
import {
  removeAmountDispatch,
  removeFromCartDispatch,
  removeNFTDispatch,
} from "lib/redux/dispatch";
import { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";

const Shoppingcart = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.nft.nftReducer.value);
  const handleDelete = (name: string, price: number) => {
    removeFromCartDispatch(dispatch);
    removeNFTDispatch(name, dispatch);
    removeAmountDispatch(price, dispatch);
  };

  useEffect(() => {
    const total = cart.map((price) => price.price).reduce((a, b) => a + b, 0);
    setTotalPrice(total);
  }, [cart]);

  if (cart.length > 0) {
    return (
      <>
        <h1 className="title">SHOPPING CART</h1>
        <ul className={"listWrapper"}>
          {cart.map(({ name, image, price }, index) => (
            <>
              <li className={"content"} key={index}>
                <div className={"col col1"}>
                  <h1>{name}</h1>
                </div>
                <div className={"col col2"}>
                  <img src={image} alt="ERROR" />
                </div>
                <div className={"col col3"}>
                  <h2>
                    <span>$</span>
                    {price}
                  </h2>
                </div>
                <div className={"col col4"}>
                  <div onClick={() => handleDelete(name, price)}>
                    <BsTrash />
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
        <div className="checkout">
          <div className={"checkout__amount"}>
            Total: <span>$</span>
            {totalPrice}
          </div>
          <div className={"checkout__button"}>Buy now!</div>
        </div>
      </>
    );
  } else {
    return <h1 className="title">SHOPPING CART EMPTY</h1>;
  }
};
export default Shoppingcart;
