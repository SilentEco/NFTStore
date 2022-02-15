import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider, useSelector } from "react-redux";
import { RootState, store } from "lib/redux/app/store";

let persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="globalWrapper">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp;
