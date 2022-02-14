import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={styles.globalWrapper}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
