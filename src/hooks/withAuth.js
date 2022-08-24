import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import routes from "../config/routes";
import { useAppLayout } from "../provider/AppLayout";

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const { isLoggedIn } = useAppLayout();
    const check = async () => {
      if (!isLoggedIn) {
        router.push(routes.login);
      } else {
        router.push(routes.home);
      }
    };
    useEffect(() => {
      check();
    }, []);

    return !!isLoggedIn ? <Component /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
