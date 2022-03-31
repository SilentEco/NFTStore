import React from "react";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { NavBtn } from "../NavBtn";
import ShoppingCart from "../Shoppingcart";

const Sidepanel = () => {
  return (
    <div className={"navbar hideMobile"}>
      <div className={"navBtnContainer"}>
        {/* <NavBtn href="/">
    <Image src={NavIcon} className={"logo"} alt="ERROR" />
  </NavBtn> */}
        <NavBtn href="/">
          <p>Home</p> <AiOutlineHome />
        </NavBtn>
        <NavBtn href="/shop">
          <p>Shop</p> <AiOutlineShoppingCart />
        </NavBtn>
        <NavBtn href="/about">
          <p>About</p> <AiOutlineInfoCircle />
        </NavBtn>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default Sidepanel;
