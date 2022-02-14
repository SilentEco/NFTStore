import type { NextPage, GetStaticProps } from "next";
import { initializeApollo } from "../lib/apollo";
import Card from "../components/Card";
import QUERY_GETNFTS from "@queries/NFTS.graphql";
import styles from "../styles/Home.module.scss";
import { NftCardEntity, GetNftsQuery } from "generated/graphql";
import { fieldNameFromStoreName } from "@apollo/client/cache";

interface NFTTypes {
  nft: NftCardEntity[];
}

const Home = ({ nft }: NFTTypes) => {
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

export default Home;
