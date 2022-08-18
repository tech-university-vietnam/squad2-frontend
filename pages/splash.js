import React, { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import routes from "../src/config/routes";

const SplashScreen = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace(routes.welcome);
    }, 1000);
  }, []);

  return (
    <Box
      p={6}
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box
        flex={1}
        overflow="auto"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="/logo.png" height={484} width={269} alt="Logo" />
      </Box>
      <CircularProgress color="success" />
    </Box>
  );
};

export default SplashScreen;
