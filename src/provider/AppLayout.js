import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import { Container } from "@mui/material";
import { COOKIES } from "../config/constants";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import routes from "../config/routes";
const AppLayoutContext = React.createContext();

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const router = useRouter();

  const checkAuth = () => {
    const accessToken = getCookie(COOKIES.ACCESS_TOKEN);
    if (!accessToken || accessToken === "") {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    deleteCookie(COOKIES.ACCESS_TOKEN);
    router.push(routes.login);
  };

  useEffect(() => {
    checkAuth();

    const handleRouteChange = (url) => {
      checkAuth();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <AppLayoutContext.Provider value={{ isLoggedIn, logout }}>
      <Container maxWidth="md" sx={{ height: "100vh", p: 0 }}>
        {children}
        {isLoggedIn && router.asPath == routes.home && <BottomNav />}
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
