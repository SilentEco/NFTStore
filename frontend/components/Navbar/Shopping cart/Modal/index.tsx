import Card from "@components/Card";
import { cartContext } from "context/BasketContext";
import { motion } from "framer-motion";
import React, { useContext } from "react";
import Backdrop from "./Backdrop";
import styles from "./Modal.module.scss";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 30,
      stiffness: 600,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
interface IProps {
  handleClose: () => void;
  nft?: { name: string; price: number; image: string }[];
}

export const Modal = ({ handleClose }: IProps) => {
  const { cart } = useContext(cartContext);
  const handleDelete = (name: string) => {
    const index = cart.findIndex((i) => {
      return i.name === name;
    });
    cart.splice(index, 1);
    localStorage.removeItem(`${name}`);
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className={styles.modal}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ul>
          {cart
            .map(({ image, name, price }, index) => (
              <>
                <li className={styles.content} key={index}>
                  <div className={[styles.col, styles.col1].join(" ")}>
                    <h1>{name}</h1>
                  </div>
                  <div className={[styles.col, styles.col2].join(" ")}>
                    <img src={"//localhost:1337" + image} alt="ERROR" />
                  </div>
                  <div className={[styles.col, styles.col3].join(" ")}>
                    <h2>
                      <span>$</span>
                      {price}
                    </h2>
                  </div>
                  <div className={[styles.col, styles.col4].join(" ")}>
                    <p onClick={() => handleDelete(name)}>Remove</p>
                  </div>
                </li>
                <hr />
              </>
            ))
            .splice(1)}
        </ul>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
