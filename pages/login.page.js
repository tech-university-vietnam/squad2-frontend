import { Box, Button, Container, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import routes from "../src/config/routes";
import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { getUserProfileData } from "../src/config/utils";

const LoginPage = () => {
  const router = useRouter();
  const callLogin = (token) => {
    console.log(token);
    getUserProfileData(token).then((response) => {
      router.push({
        pathname: routes.profile,
        query: { ...response, access_token: token },
      });
    });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);
      callLogin(tokenResponse?.access_token);
    },
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.callLogin = callLogin;
    }
  }, [typeof window]);

  return (
    <Container>
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h3" gutterBottom>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's you in
        </Typography>
        <Button
          onClick={() => {
            login();
          }}
          buttonText="Login"
          variant="outlined"
          style={{
            color: "#212121",
            height: "48px",
            width: "100%",
            border: "1px solid rgba(17, 17, 17, 0.2)",
          }}
        >
          <FcGoogle size={32} style={{ marginRight: "8px" }} />
          Continue with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
