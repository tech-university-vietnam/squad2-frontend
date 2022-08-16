import "../styles/globals.css";
import { Provider } from "react-redux";
import { globalStore } from "../src/store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={globalStore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
