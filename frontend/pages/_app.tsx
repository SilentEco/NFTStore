import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { Provider } from "react-redux";
import { store } from "lib/redux/app/store";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <div className="globalWrapper">
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} key={router.asPath} />
      </Provider>
    </div>
  );
}

export default MyApp;
