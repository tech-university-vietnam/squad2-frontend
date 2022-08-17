import "../styles/globals.css";
import { Provider } from "react-redux";
import { globalStore } from "../src/store/store";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1AB65C",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={globalStore}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
