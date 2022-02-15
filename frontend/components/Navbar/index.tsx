import styles from "./navbar.module.scss";
import asd from "../../public/img/logocrop.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navBtns}>
          <Image src={asd} className={styles.logo} alt="ERROR" />
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
        <footer>Legit Shizzle®</footer>
      </div>
    </>
  );
};

export default Navbar;
