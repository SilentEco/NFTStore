import NavIcon from "../../public/img/logocrop.png";
import Image from "next/image";
import ShoppingCart from "./Shoppingcart";
import { NavBtn } from "./NavBtn";
import {
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineInfoCircle,
} from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={"navbar"}>
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

export default Navbar;
