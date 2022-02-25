import { RootState } from "lib/redux/app/store";
import { removeAmountDispatch, removeNFTDispatch } from "lib/redux/dispatch";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Shoppingcart.module.scss";

const Shoppingcart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.nft.value);
  const handleDelete = (name: string, price: number) => {
    removeNFTDispatch(name, dispatch);
    removeAmountDispatch(price, dispatch);
  };
  return (
    <div className={styles.wrapper}>
      <ul className={styles.listWrapper}>
        {cart.map(({ name, image, price }, index) => (
          <>
            <li className={styles.content} key={index}>
              <div className={[styles.col, styles.col1].join(" ")}>
                <h1>{name}</h1>
              </div>
              <div className={[styles.col, styles.col2].join(" ")}>
                <img src={"//localhost:1337" + image} alt="ERROR" />
              </div>
              <div className={[styles.col, styles.col3].join(" ")}>
                <h2>
                  <span>$</span>
                  {price}
                </h2>
              </div>
              <div className={[styles.col, styles.col4].join(" ")}>
                <div onClick={() => handleDelete(name, price)}>Remove</div>
              </div>
            </li>
            <hr />
          </>
        ))}
        <div className={styles.checkout}>CHECK OUT!</div>
      </ul>
    </div>
  );
};
export default Shoppingcart;
