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
          <Box
            sx={{ position: "relative", margin: "auto", width: "fit-content" }}
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
                {...register("lastname", { required: true })}
              />
            </FormControl>
            <FormControl variant="filled">
              <CssTextField
                fullWidth
                {...register("firstname", { required: true })}
              />
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
                {...register("email", { required: true })}
              />
            </FormControl>
            <FormControl variant="filled">
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={watch("date_of_birth")}
                renderInput={(params) => <CssTextField fullWidth {...params} />}
                onChange={(params) => {
                  setValue("date_of_birth", params);
                }}
              />
            </FormControl>
            <FormControl variant="filled">
              <MuiPhoneNumber
                defaultCountry="vn"
                // disableDropdown
                onChange={(value) => console.log(value)}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": {
                    "& > fieldset": {
                      borderWidth: 0,
                    },
                  },
                }}
              />
            </FormControl>
            <FormControl variant="filled">
              <Select
                placeholder="Gender"
                fullWidth
                id="gender"
                input={<SelectInput />}
                // value={value}
                // onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
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
