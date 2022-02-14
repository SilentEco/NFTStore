import type { NextPage, GetStaticProps } from "next";
import { initializeApollo } from "../lib/apollo";
import Card from "../components/Card";

import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.wrapperContainer}>
      <div className={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = initializeApollo();
  const { data: pageData } = await client.query({
    query: QUERY_PAGE,
    variables: { locale, path: "pdf" },
  });

  return {
    props: {
      page: pageData,
    },
  };
};

export default Home;
