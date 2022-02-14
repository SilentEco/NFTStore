import Image from "next/image";
import styles from "./cardstyle.module.scss";
import { NftCard, NftCardEntity } from "generated/graphql";

interface CardTypes {
  props: NftCardEntity["attributes"];
}

const Card = ({ props }: CardTypes) => {
  console.log(props?.NFT?.data?.attributes?.url!);
  console.log(props);
  return (
    <div className={styles.card}>
      <h1>{props?.Title}</h1>
      <div className={styles.nftContainer}>
        <img
          src={"//localhost:1337" + props?.NFT?.data?.attributes?.url!}
          alt="ERROR"
        />
      </div>
      <button>Buy</button>
      <p>
        Price: <span>$</span>
        <span>{props?.Price}</span>
      </p>
      <article>Created: {props?.Created}</article>
    </div>
  );
};

export default Card;
