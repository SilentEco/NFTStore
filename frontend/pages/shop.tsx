import QUERY_GETNFTS from "@queries/NFTS.graphql";
// import { BasketContext } from "context/BasketContext";
import { GetNftsQuery, NftCard, NftCardEntity } from "generated/graphql";
import type { GetStaticProps } from "next";
import { createContext, useContext, useReducer } from "react";
import Card from "../components/Card";
import { initializeApollo } from "../lib/apollo";
import styles from "../styles/Shop.module.scss";

interface NFTTypes {
  nft: NftCardEntity[];
}

const Shop = ({ nft }: NFTTypes) => {
  const reducer = (state: any, item: any) => {
    return [...state, item];
  };
  const [basket, setBasket] = useReducer(reducer, []);
  // @ts-ignore (2554)
  const BasketContext = createContext();
  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <div className={styles.wrapperContainer}>
        <div className={styles.cardContainer}>
          {nft!.map((nfts, index) => {
            return <Card props={nfts.attributes} key={index} />;
          })}
        </div>
      </div>
    </BasketContext.Provider>
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
