import { basketContext } from "context/BasketContext";
import { useContext, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import styles from "../navbar.module.scss";

const ShoppingCart = () => {
  const { amount } = useContext(basketContext);

  return (
    <div className={styles.shoppingcart}>
      <CgShoppingCart style={{ width: "30px", height: "30px" }} />
      <p>
        Total: <span>$</span>
        {amount}
      </p>
    </div>
  );
};

export default ShoppingCart;
