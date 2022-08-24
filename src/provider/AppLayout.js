import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import { Container } from "@mui/material";
const AppLayoutContext = React.createContext();

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <AppLayoutContext.Provider value={{ isLoggedIn }}>
      <Container maxWidth="md" sx={{ height: "100vh", pt: 2, pb: 16 }}>
        {children}
        {isLoggedIn && <BottomNav />}
      </Container>
    </AppLayoutContext.Provider>
  );
};

export function useAppLayout() {
  const context = React.useContext(AppLayoutContext);

  if (!context) {
  }
  return context;
}

export default AppLayout;
