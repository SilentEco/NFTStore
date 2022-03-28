import Image from "next/image";
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
    <div className={"card"}>
      <div
        className={"nftContainer"}
        onClick={() => {
          modalOpen ? close() : open();
        }}
      >
        <img src={props?.NFT?.data?.attributes?.url!} alt="ERROR" />
      </div>
      <div className="infoContainer">
        <div className="infoContainer__left">{props?.Title}</div>
        <div className="infoContainer__right">
          <p>
            Price: <span>$</span>
            <span>{props?.Price}</span>
          </p>
          <Button className="cardButton" nft={props!} />
        </div>
      </div>
      {modalOpen && <Modal handleClose={close} nft={props!} />}
    </div>
  );
};

export default Card;
