import Image from "next/image";
import styles from "./cardstyle.module.scss";
import { NftCard, NftCardEntity } from "generated/graphql";
import { useState } from "react";
import Modal from "../Modal/index";
import Button from "./Button";

interface CardTypes {
  props: NftCardEntity["attributes"];
}

const Card = ({ props }: CardTypes) => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className={styles.card}>
      <h1>{props?.Title}</h1>
      <div
        className={styles.nftContainer}
        onClick={() => {
          modalOpen ? close() : open();
        }}
      >
        <img
          src={"//localhost:1337" + props?.NFT?.data?.attributes?.url!}
          alt="ERROR"
        />
      </div>
      <p>
        Price: <span>$</span>
        <span>{props?.Price}</span>
      </p>
      <Button nft={props} />
      {modalOpen && <Modal handleClose={close} nft={props} />}
    </div>
  );
};

export default Card;
