import { basketContext, cartContext } from "context/BasketContext";
import { useContext, useEffect, useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import styles from "../navbar.module.scss";
import Modal from "./Modal";

const ShoppingCart = () => {
  const { amount } = useContext(basketContext);
  const { cart } = useContext(cartContext);
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div
      className={styles.shoppingcart}
      onClick={() => {
        modalOpen ? close() : open();
      }}
    >
      <CgShoppingCart style={{ width: "30px", height: "30px" }} />
      <p>
        Total: <span>$</span>
        {amount}
      </p>
      {modalOpen && <Modal handleClose={close} nft={cart!} />}
    </div>
  );
};

export default ShoppingCart;
