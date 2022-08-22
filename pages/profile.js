import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Avatar,
  Box,
  Button,
  Container,
  Fab,
  FormControl,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
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
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import styled from "@emotion/styled";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import MuiPhoneNumber from "material-ui-phone-number";
import { ThemeColor } from "../src/config/constants";
import ErrorField from "../src/components/ErrorField";

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

const SelectInput = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 12,
    backgroundColor: ThemeColor.grey,
    padding: "16.5px 0px 16.5px 14px",
    "&:focus": {
      borderRadius: 12,
      borderColor: theme.palette.primary,
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
  const { family_name, given_name, picture, email } = router.query;
  const {
    getValues,
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    reset({
      lastname: family_name,
      firstname: given_name,
      email,
    });
  }, [router.query]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <ScrollableStack alignItems="center" width="100%">
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
            <Stack width="100%" spacing={2} mt={6}>
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
                  inputFormat="MM/dd/yyyy"
                  value={watch("date_of_birth")}
                  renderInput={(params) => (
                    <CssTextField fullWidth {...params} />
                  )}
                  {...register("date_of_birth", {
                    required: "Please input your date of birth",
                  })}
                />
                <ErrorField attribute={errors?.date_of_birth} />
              </FormControl>
              <FormControl variant="filled">
                <MuiPhoneNumber
                  defaultCountry="vn"
                  // disableDropdown
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      "& > fieldset": {
                        borderWidth: 0,
                      },
                    },
                  }}
                  onChange={(e) => {
                    setValue("phone_number", e.target.value);
                  }}
                  {...register("phone_number", {
                    required: "Please input your phone number",
                  })}
                />
                <ErrorField attribute={errors?.phone_number} />
              </FormControl>
              <FormControl variant="filled">
                <Select
                  placeholder="Gender"
                  fullWidth
                  id="gender"
                  input={<SelectInput />}
                  // value={value}
                  // onChange={handleChange}
                  {...register("gender", {
                    required: "Please input your gender",
                  })}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
                <ErrorField attribute={errors?.gender} />
              </FormControl>
            </Stack>
          </ScrollableStack>
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
              type="submit"
            >
              Continue
            </Button>
          </div>
        </Box>
      </Container>
    </form>
  );
};

export default ProfilePage;
