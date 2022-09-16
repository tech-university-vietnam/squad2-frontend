import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Fab,
  FormControl,
  InputAdornment,
  InputBase,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import { useRouter } from "next/router";
import routes from "../src/config/routes";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { COOKIES, ThemeColor } from "../src/config/constants";
import ErrorField from "../src/components/ErrorField";
import MuiPhoneNumber from "material-ui-phone-number-2";
import { deleteCookie, setCookie } from "cookies-next";
import useCreateUser from "../src/services/useRegister";
import useCurrentUser from "../src/services/userCurrentUser";
import { format } from "date-fns";

const CssTextField = styled(TextField)({
  // background: "#fafafa",
  // borderRadius: 12,
  // borderWidth: 0,
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: 0,
    },
    "&.Mui-focused fieldset": {
      borderRadius: 12,
    },
  },
});

const StyledMuiPhoneNumber = styled(MuiPhoneNumber)`
  input {
    padding-left: 8px !important;
  }
`;

const SelectInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 12,
    backgroundColor: ThemeColor.grey,
    padding: "16.5px 0px 16.5px 14px",
    "&:focus": {
      borderRadius: 12,
      borderColor: theme.palette?.primary,
    },
  },
}));

const ScrollableStack = styled(Stack)`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ProfilePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    family_name,
    given_name,
    picture,
    email,
    access_token,
    sub: gid,
  } = router.query;

  const {
    getValues,
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      gender: "",
    },
  });

  const [createUser, { loading, data, error }] = useCreateUser();
  const { data: currentUser, refetch } = useCurrentUser();
  const onSubmit = async (data) => {
    setCookie(COOKIES.ACCESS_TOKEN, access_token, { maxAge: 3600 });
    const { lastname, firstname, gender, email, phone_number, dob } = data;
    const formatedDob = format(new Date(dob), "yyyy-MM-dd");
    await createUser({
      variables: {
        createUserInput: {
          firstName: firstname,
          lastName: lastname,
          gender: gender.toLocaleUpperCase(),
          email,
          phone: phone_number,
          userId: gid,
          avatar: picture,
          dob: formatedDob,
        },
      },
    });
    if (!error) router.push(routes.home);
  };

  useEffect(() => {
    setIsLoading(true);
    setCookie(COOKIES.ACCESS_TOKEN, access_token, { maxAge: 3600 });
    setTimeout(() => {
      refetch()
        .then(async () => {
          await refetch();
          setIsLoading(false);
          await router.replace(routes.home);
        })
        .catch(() => {
          setIsLoading(false);

          deleteCookie(COOKIES.ACCESS_TOKEN);
        });
    }, 300);
    reset({
      lastname: family_name,
      firstname: given_name,
      email,
      gender: "",
    });
  }, [router.query]);

  if (isLoading) {
    return (
      <Box
        height="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress color="success" />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Stack direction="row" py={2} alignItems="center" spacing={0}>
          <FiChevronLeft
            size={24}
            onClick={() => {
              router.replace(routes.login);
            }}
          />
          <Typography variant="h6">Fill your profile</Typography>
        </Stack>
        <Box
          sx={{
            position: "relative",
            margin: "auto",
            width: "fit-content",
          }}
        >
          <Avatar
            alt="Profile picture"
            src={picture}
            sx={{
              width: 128,
              height: 128,
              margin: "auto",
              boxShadow: "none",
            }}
          />
          <Fab
            color="primary"
            aria-label="edit"
            size="small"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              borderRadius: "12px",
              boxShadow: "none",
            }}
          >
            <EditIcon sx={{ color: "white" }} />
          </Fab>
        </Box>
        <Stack width="100%" spacing={2} mt={4} pb={4}>
          <FormControl variant="filled">
            <CssTextField
              fullWidth
              {...register("lastname", {
                required: "Please input your last name",
              })}
            />
            <ErrorField attribute={errors?.lastname} />
          </FormControl>
          <FormControl variant="filled">
            <CssTextField
              fullWidth
              {...register("firstname", {
                required: "Please input your first name",
              })}
            />
            <ErrorField attribute={errors?.firstname} />
          </FormControl>
          <FormControl variant="filled">
            <CssTextField
              fullWidth
              id="email"
              placeholder="Email"
              type="email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              {...register("email", {
                required: "Please input your email",
              })}
            />
            <ErrorField attribute={errors?.email} />
          </FormControl>
          <FormControl variant="filled">
            <DesktopDatePicker
              inputFormat="yyyy-MM-dd"
              value={watch("dob")}
              maxDate={new Date()}
              renderInput={(params) => <CssTextField fullWidth {...params} />}
              {...register("dob", {
                required: "Please input your date of birth",
              })}
              onChange={(value) => {
                setValue("dob", value);
              }}
            />
            <ErrorField attribute={errors?.dob} />
          </FormControl>
          <FormControl variant="filled">
            <StyledMuiPhoneNumber
              defaultCountry="vn"
              disableAreaCodes
              countryCodeEditable={false}
              variant="outlined"
              sx={{
                "& .MuiInputBase-root": {
                  "& > fieldset": {
                    borderWidth: 0,
                  },
                },
              }}
              {...register("phone_number", {
                required: "Please input your phone number",
                validate: (value) => {
                  return (
                    !value.startsWith("+84") ||
                    value.length == 12 ||
                    "Invalid phone number"
                  );
                },
              })}
              onChange={(value) => {
                if (value.startsWith("+84"))
                  setValue("phone_number", value, {
                    shouldValidate: true,
                  });
              }}
              id="mui-component-phone-number"
            />
            <ErrorField attribute={errors?.phone_number} />
          </FormControl>
          <FormControl variant="filled">
            <Select
              placeholder="Gender"
              displayEmpty
              fullWidth
              {...register("gender", {
                required: "Please input your gender",
                validate: (value) => {
                  console.log(value);
                },
              })}
              value={watch("gender")}
              input={<SelectInput />}
            >
              <MenuItem value="">
                <span style={{ opacity: 0.7 }}>Select your gender</span>
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
            <ErrorField attribute={errors?.gender} />
          </FormControl>

          <Button
            style={{
              width: "100%",
              color: "white",
            }}
            size="large"
            variant="contained"
            type="submit"
          >
            Continue
          </Button>
        </Stack>
      </Container>
    </form>
  );
};

export default ProfilePage;
