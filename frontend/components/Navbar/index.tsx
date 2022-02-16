import styles from "./navbar.module.scss";
import NavIcon from "../../public/img/logocrop.png";
import Image from "next/image";
import Link from "next/link";
import ShoppingCart from "./Shopping cart";

const Navbar = () => {
  return (
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
        <ShoppingCart />
      </footer>
    </div>
  );
};

export default Navbar;
