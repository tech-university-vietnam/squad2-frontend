import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import routes from "../config/routes";
import { useAppLayout } from "../provider/AppLayout";

const withAuth = (Component) => {
  const AuthenticatedComponent = () => {
    const { isLoggedIn } = useAppLayout();
    const router = useRouter();

    useEffect(() => {
      if (isLoggedIn === undefined) {
        return;
      }

      if (!isLoggedIn) {
        router.push(routes.login);
      } else {
        // router.push(routes.home);
      }
      1;
    }, [isLoggedIn]);

    return !!isLoggedIn ? <Component /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
