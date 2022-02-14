import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import styles from "./Modal.module.scss";
import React, { useState } from "react";
import Card from "@components/Card";

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
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
            minima eum nobis accusantium hic autem accusamus, sed iusto, nostrum
            quod totam! Amet laboriosam soluta unde quisquam quis blanditiis hic
            inventore! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Amet natus excepturi dolorem suscipit laudantium delectus nisi!
            Distinctio quae doloremque aut blanditiis dignissimos vitae quaerat
            voluptates provident, dolorum quisquam odit praesentium! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Asperiores odit
            dolores incidunt sapiente explicabo architecto at ex consequuntur,
            cumque unde officia inventore libero ab modi laborum! Nemo alias
            necessitatibus ipsa?
          </p>
          <br />
          <h3>Created: {oneNFT!.Created}</h3>
          <h2>
            Price: <span>$</span>
            <span>{oneNFT!.Price!}</span>
          </h2>
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
