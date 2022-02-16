import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { CashContextProvider } from "context/CashContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="globalWrapper">
      <CashContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </CashContextProvider>
    </div>
  );
}

export default MyApp;
