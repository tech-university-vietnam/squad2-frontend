import { useRouter } from "next/router";
import { useEffect } from "react";
import routes from "../src/config/routes";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(routes.splash);
  }, []);

  return <div />;
};

export default Index;
