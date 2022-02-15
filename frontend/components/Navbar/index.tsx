import styles from "./navbar.module.scss";
import NavIcon from "../../public/img/logocrop.png";
import Image from "next/image";
import Link from "next/link";
import { CgShoppingCart } from "react-icons/cg";
import { useState } from "react";

const Navbar = () => {
  const [cash, setCash] = useState(0);
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navBtns}>
          <Link href="/" passHref>
            <Image src={NavIcon} className={styles.logo} alt="ERROR" />
          </Link>
          <Link href="/" passHref>
            <button>Home</button>
          </Link>
          <Link href="/shop" passHref>
            <button>Shop</button>
          </Link>
          <Link href="/about" passHref>
            <button>About</button>
          </Link>
        </div>
        <footer>
          <div className={styles.shoppingcart}>
            <CgShoppingCart style={{ width: "30px", height: "30px" }} />
            <p>
              Total: $<span>{cash}</span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Navbar;
