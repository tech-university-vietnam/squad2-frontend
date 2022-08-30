import React, { useEffect, useState } from "react";
import BottomNav from "../components/BottomNav";
import { Container } from "@mui/material";
import { COOKIES } from "../config/constants";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";
import routes from "../config/routes";
import useCurrentUser from "../services/userCurrentUser";
const AppLayoutContext = React.createContext();

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(undefined);
  const router = useRouter();
  const { data: currentUser, refetch } = useCurrentUser();

  const checkAuth = async () => {
    try {
      const _currentUser = await refetch();
      const accessToken = getCookie(COOKIES.ACCESS_TOKEN);
      if (!accessToken || accessToken === "") {
      } else {
        if (_currentUser?.data?.currentUser?.id) {
          setIsLoggedIn(true);
          return;
        }
      }
      setIsLoggedIn(false);
    } catch (e) {
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    deleteCookie(COOKIES.ACCESS_TOKEN);
    window.location.href = routes.login;
  };

  const noDisplay =
    router.asPath === routes.splash ||
    router.asPath === routes.welcome ||
    router.asPath === routes.onboard ||
    router.asPath.startsWith(routes.profile);

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

  useEffect(() => {
    if (currentUser?.currentUser?.id) {
      setIsLoggedIn(true);
      console.log(router.asPath, routes.home);
      if (noDisplay && router.asPath !== routes.home) {
        router.push(routes.home);
      }
    }
  }, [currentUser?.currentUser?.id]);

  return (
    <AppLayoutContext.Provider value={{ isLoggedIn, logout }}>
      <Container maxWidth="md" sx={{ height: "100vh", p: 0 }}>
        {children}
        {isLoggedIn && !noDisplay && <BottomNav />}
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
