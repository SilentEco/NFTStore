import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { BasketProvider } from "context/BasketContext";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="globalWrapper">
      <BasketProvider>
        <Navbar />
        <Component {...pageProps} key={router.asPath} />
      </BasketProvider>
    </div>
  );
}

export default MyApp;
