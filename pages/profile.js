import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import routes from "../src/config/routes";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

const ProfilePage = () => {
  const router = useRouter();
  const { family_name, given_name, picture, email } = router.query;
  const {
    getValues,
    register,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(getValues());
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    reset({
      lastname: family_name,
      firstname: given_name,
      email,
    });
  }, [router.query]);
  return (
    <Container>
      <Box
        height="100vh"
        display="flex"
        alignItems="flex-start"
        justifyContent="start"
        flexDirection="column"
      >
        <Stack direction="row" pt={2} alignItems="center" spacing={0}>
          <FiChevronLeft
            size={24}
            onClick={() => {
              router.replace(routes.login);
            }}
          />
          <Typography variant="h6">Fill your profile</Typography>
        </Stack>
        <Stack alignItems="center" width="100%">
          <Avatar sx={{ width: 128, height: 128 }} src={picture} />
          <Stack width="100%" spacing={4} mt={6}>
            <FormControl variant="filled">
              <Input {...register("lastname", { required: true })} />
            </FormControl>
            <FormControl variant="filled">
              <Input {...register("firstname", { required: true })} />
            </FormControl>
            <FormControl variant="filled">
              <Input {...register("email", { required: true })} />
            </FormControl>
          </Stack>
        </Stack>
        <div
          style={{
            position: "absolute",
            width: "100%",
            bottom: 32,
            left: 0,
            padding: "0 8px",
          }}
        >
          <Button
            style={{
              width: "100%",

              color: "white",
            }}
            size="large"
            variant="contained"
          >
            Continue
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default ProfilePage;
