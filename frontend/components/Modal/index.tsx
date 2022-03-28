import Backdrop from "./Backdrop";
import { motion } from "framer-motion";
import React, { useState } from "react";
import Button from "@components/Card/Button";
import { NftCard } from "generated/graphql";
import { toast } from "react-toastify";

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
  nft: NftCard;
}

const Modal = ({ handleClose, nft }: IProps) => {
  const oneNFT = nft!;

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
        className={"modal"}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className={"image"}>
          <img src={oneNFT.NFT?.data?.attributes?.url} />
        </div>
        <div className={"description"}>
          <h1>{oneNFT!.Title}</h1>
          <p>{oneNFT!.Description}</p>
          <br />
          <div className="description__subText">
            <h3>Created: {oneNFT!.Created}</h3>
            <h3>
              Price: <span>$</span>
              <span>{oneNFT!.Price!}</span>
            </h3>
          </div>
          <Button className="modalButton cardButton" nft={nft} />
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
