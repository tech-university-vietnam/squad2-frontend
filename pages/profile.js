import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Input,
  InputBase,
  InputLabel,
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

// const Profile = () => {
//   return (
//     <Container maxWidth="md">
//       {/* <Box
//         display="flex"
//         height="100vh"
//         justifyContent="space-between"
//         flexDirection="column"
//       > */}
//       <Box display="flex" alignItems="center" my={2}>
//         <IconButton aria-label="back">
//           <ArrowBackIcon />
//         </IconButton>
//         <Typography variant="h5">Fill Your Profile</Typography>
//       </Box>
//
//       <Box sx={{ position: "relative", margin: "auto", width: "fit-content" }}>
//         <Avatar
//           alt="Profile picture"
//           src="https://source.unsplash.com/random/320x320?person"
//           sx={{ width: 180, height: 180, margin: "auto", boxShadow: "none" }}
//         />
//         <Fab
//           color="primary"
//           aria-label="edit"
//           size="small"
//           sx={{
//             position: "absolute",
//             bottom: 0,
//             right: 0,
//             borderRadius: "12px",
//             boxShadow: "none",
//           }}
//         >
//           <EditIcon sx={{ color: "white" }} />
//         </Fab>
//       </Box>
//
//       <Stack mt={2} spacing={2}>
//         <CssTextField
//           fullWidth
//           id="first-name"
//           placeholder="First Name"
//           // value={value}
//           // onChange={handleChange}
//         />
//         <CssTextField
//           fullWidth
//           id="last-name"
//           placeholder="Last Name"
//           // value={value}
//           // onChange={handleChange}
//         />
//         <DesktopDatePicker
//           inputFormat="MM/dd/yyyy"
//           // value={value}
//           // onChange={handleChange}
//           renderInput={(params) => (
//             <CssTextField id="date-of-birth" fullWidth {...params} />
//           )}
//         />
//         <CssTextField
//           fullWidth
//           id="email"
//           placeholder="Email"
//           type="email"
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <EmailIcon />
//               </InputAdornment>
//             ),
//           }}
//         />
//         {/* TODO: Change style */}
//         <MuiPhoneNumber
//           defaultCountry="vn"
//           // disableDropdown
//           onChange={(value) => console.log(value)}
//           variant="outlined"
//           sx={{
//             "& .MuiInputBase-root": {
//               "& > fieldset": {
//                 borderWidth: 0,
//               },
//             },
//           }}
//         />
//         <Select
//           placeholder="Gender"
//           fullWidth
//           id="gender"
//           input={<SelectInput />}
//           // value={value}
//           // onChange={handleChange}
//         >
//           <MenuItem value="male">Male</MenuItem>
//           <MenuItem value="female">Female</MenuItem>
//         </Select>
//         <Button
//           sx={{ color: "white", height: 56 }}
//           size="large"
//           variant="contained"
//           // onClick={handleContinue}
//         >
//           Continue
//         </Button>
//       </Stack>
//       {/* </Box> */}
//     </Container>
//   );
// };

export default ProfilePage;
