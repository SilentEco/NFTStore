import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navBtns}>
          <h1 className={styles.logo}>Logo</h1>
          <button>Home</button>
          <button>Shop</button>
          <button>New</button>
        </div>
        <footer>Legit Shizzle®</footer>
      </div>
    </>
  );
};

export default Navbar;
