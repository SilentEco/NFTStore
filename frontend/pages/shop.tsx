import QUERY_GETNFTS from "@queries/NFTS.graphql";
import { GetNftsQuery, NftCardEntity } from "generated/graphql";
import type { GetStaticProps } from "next";
import { useContext } from "react";
import Card from "../components/Card";
import { initializeApollo } from "../lib/apollo";
import styles from "../styles/Shop.module.scss";

interface NFTTypes {
  nft: NftCardEntity[];
}

const Shop = ({ nft }: NFTTypes) => {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.cardContainer}>
        {nft!.map((nfts, index) => {
          return <Card props={nfts.attributes} key={index} />;
        })}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();
  const { data }: { data: GetNftsQuery } = await client.query({
    query: QUERY_GETNFTS,
  });

  return {
    props: {
      nft: data.nftCards?.data,
    },
  };
};

export default Shop;
