import { RootState } from "lib/redux/app/store";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { BsBasket3 } from "react-icons/bs";
import { useSelector } from "react-redux";

const ShoppingCart = () => {
  const amount = useSelector(
    (state: RootState) => state.cart.cartReducer.value
  );

  return (
    <Link href="/shoppingcart" passHref>
      <div className={"basket"}>
        <BsBasket3 />
        <p className="itemAmount">{amount}</p>
      </div>
    </Link>
  );
};

export default ShoppingCart;
