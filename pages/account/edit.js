import EmailIcon from "@mui/icons-material/Email";
import {
  Box,
  Button,
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
import routes from "../../src/config/routes";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import styled from "@emotion/styled";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { ThemeColor } from "../../src/config/constants";
import ErrorField from "../../src/components/ErrorField";
import MuiPhoneNumber from "material-ui-phone-number-2";
import useCurrentUser from "../../src/services/userCurrentUser";
import useUpdateUser from "../../src/services/useUpdateUser";
import { format } from "date-fns";

const CssTextField = styled(TextField)({
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
  const { data } = useCurrentUser();
  const currentUser = data?.currentUser;

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
      firstname: currentUser?.firstName,
      lastname: currentUser?.lastName,
      gender: currentUser?.gender?.toLocaleLowerCase() || "",
      email: currentUser?.email,
      phone_number: currentUser?.phone,
      dob: currentUser?.dob,
    },
  });

  const [updateUser, { loading, error }] = useUpdateUser();

  const onSubmit = async (data) => {
    const { lastname, firstname, gender, email, phone_number, dob } = data;
    const formatedDob = format(new Date(dob), "yyyy-MM-dd");
    await updateUser({
      variables: {
        updateUserInput: {
          firstName: firstname,
          lastName: lastname,
          gender: gender.toLocaleUpperCase(),
          email,
          phone: phone_number,
          dob: formatedDob,
          id: currentUser?.id,
        },
      },
    });
    if (!error) router.replace(routes.account);
  };

  useEffect(() => {
    if (data) {
      setValue("firstname", currentUser?.firstName);
      setValue("lastname", currentUser?.lastName);
      setValue("gender", currentUser?.gender?.toLocaleLowerCase() || "");
      setValue("email", currentUser?.email);
      setValue("phone_number", currentUser?.phone);
      setValue("dob", currentUser?.dob);
    }
  }, [data]);

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
                router.replace(routes.account);
              }}
            />
            <Typography variant="h6">Edit Profile</Typography>
          </Stack>
          <ScrollableStack alignItems="center" width="100%">
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
                  inputFormat="yyyy-MM-dd"
                  value={watch("dob")}
                  renderInput={(params) => (
                    <CssTextField fullWidth {...params} />
                  )}
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
                  })}
                  value={watch("phone_number")}
                  onChange={(value) => {
                    setValue("phone_number", value);
                  }}
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
                    validate: (value) => {},
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
            </Stack>
          </ScrollableStack>
          <Container
            maxWidth="md"
            sx={{
              position: "absolute",
              width: "100%",
              bottom: 60,
              left: 0,
              right: 0,
              padding: 2,
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
              Update
            </Button>
          </Container>
        </Box>
      </Container>
    </form>
  );
};

export default ProfilePage;
