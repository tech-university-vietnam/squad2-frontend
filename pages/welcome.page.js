import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import routes from "../src/config/routes";
import { useRouter } from "next/router";

const Welcome = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace(routes.onboard);
    }, 3000);

    return () => clearTimeout(timeout);
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
          "url('https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=1287')",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ color: "white" }}>
          Welcome to 👋
        </Typography>
        <Typography variant="h1" color="primary">
          Helia
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "white" }}>
          The best hotel booking in this century to accompany your vacation
        </Typography>
      </Container>
    </Box>
  );
};

export default Welcome;
