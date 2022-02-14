import styles from "./navbar.module.scss";
import asd from "../../public/img/logocrop.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navBtns}>
          <Image src={asd} className={styles.logo} alt="ERROR" />
          <button>Home</button>
          <button>Shop</button>
          <button>About</button>
        </div>
        <footer>Legit Shizzle®</footer>
      </div>
    </>
  );
};

export default Navbar;
