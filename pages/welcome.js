import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import routes from "../src/config/routes";
import { useRouter } from "next/router";

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace(routes.onboard);
    }, 3000);
  }, []);
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      px={1}
      py={4}
      justifyContent="flex-end"
      sx={{
        backgroundSize: "cover",
        backgroundImage:
          "url('https://source.unsplash.com/random/1280x720?travel')",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" style={{ color: "#ffffff" }}>
          Welcome to 👋
        </Typography>
        <Typography variant="h1" style={{ color: "#00adb5" }}>
          Helia
        </Typography>
        <Typography variant="subtitle1" style={{ color: "#ffffff" }}>
          The best hotel booking in this century to accompany your vacation
        </Typography>
      </Container>
    </Box>
  );
};

export default SplashScreen;
