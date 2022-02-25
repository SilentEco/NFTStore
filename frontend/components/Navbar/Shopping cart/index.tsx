import { RootState } from "lib/redux/app/store";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { useSelector } from "react-redux";
import styles from "../navbar.module.scss";

const ShoppingCart = () => {
  const amount = useSelector((state: RootState) => state.amount.price);

  return (
    <div className={styles.shoppingcart}>
      <CgShoppingCart style={{ width: "30px", height: "30px" }} />
      <Link href="/shoppingcart" passHref>
        <p>
          Total: <span>$</span>
          {amount}
        </p>
      </Link>
    </div>
  );
};

export default ShoppingCart;
