import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import styles from "./Modal.module.scss";
import React, { useState } from "react";
import Card from "@components/Card";
import Button from "@components/Card/Button";

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

const Modal = ({ handleClose, nft }: any) => {
  console.log(nft);
  const oneNFT = nft!;
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
        <div className={styles.image}>
          <img src={"//localhost:1337" + oneNFT.NFT?.data?.attributes?.url} />
        </div>
        <div className={styles.description}>
          <h1>{oneNFT!.Title}</h1>
          <p>{oneNFT!.Description}</p>
          <br />
          <h3>Created: {oneNFT!.Created}</h3>
          <h2>
            Price: <span>$</span>
            <span>{oneNFT!.Price!}</span>
          </h2>
          <Button nft={nft} />
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
