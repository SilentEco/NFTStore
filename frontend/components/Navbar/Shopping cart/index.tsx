import { useCash } from "context/CashContext";
import { CgShoppingCart } from "react-icons/cg";
import styles from "../navbar.module.scss";

const ShoppingCart = () => {
  const { cash } = useCash();
  return (
    <div className={styles.shoppingcart}>
      <CgShoppingCart style={{ width: "30px", height: "30px" }} />
      <p>
        Total: $<span>{cash}</span>
      </p>
    </div>
  );
};

export default ShoppingCart;
