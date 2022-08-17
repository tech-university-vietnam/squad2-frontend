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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import Head from "next/head";
import { Box } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={globalStore}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Box style={{ height: "100vh" }}>
          <Component {...pageProps} />
        </Box>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
