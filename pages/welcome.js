import React from 'react';
import { Box, Container, Typography } from "@mui/material";

const SplashScreen = () => {
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
          "url('https://images.unsplash.com/photo-1506953823976-52e1fdc0149a')",
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
