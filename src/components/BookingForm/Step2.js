import {
  Button,
  Chip,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import styled from "@emotion/styled";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import ErrorField from "../ErrorField";
import { ThemeColor } from "../../config/constants";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import MuiPhoneNumber from "material-ui-phone-number-2";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  .total {
    margin-top: 64px;
    align-self: center;
    font-size: 20px;
  }
`;

const StyledMuiPhoneNumber = styled(MuiPhoneNumber)`
  input {
    padding-left: 8px !important;
  }
`;

const CssTextField = styled(TextField)({
  // background: "#fafafa",
  // borderRadius: 12,
  // borderWidth: 0,
  "& .MuiOutlinedInput-root": {
    marginTop: "6px",
    "& fieldset": {
      borderWidth: 0,
    },
    "&.Mui-focused fieldset": {
      borderRadius: 12,
    },
  },
});

const ChangeQuantityGroup = styled.div`
  margin-top: 12px;
  width: 100%;
  border: 1px solid rgba(211, 211, 211, 0.44);
  border-radius: 12px;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  .button {
    width: 64px;
    height: 64px;
    background-color: rgba(26, 182, 92, 0.1);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    border-radius: 18px;
    color: ${ThemeColor.primary};
    cursor: pointer;
    &:hover {
      background-color: rgba(26, 182, 92, 0.2);
    }
  }

  .quantity {
    margin: 0px 32px;
    font-size: 22px;
    font-weight: 700;
  }
`;

const pronouns = ["Mr.", "Mrs.", "Ms."];

const Step2 = ({
  nextStep,
  watch,
  register,
  setValue,
  formState: { errors },
}) => {
  const pronoun = watch("pronoun");

  const disabled =
    !pronoun ||
    !watch("lastname") ||
    !watch("firstname") ||
    !watch("email") ||
    !watch("phone") ||
    !watch("date_of_birth");

  return (
    <div>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          width: "100%",
          overflow: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        my={2}
      >
        {pronouns.map((label, idx) => (
          <Chip
            key={`chip_${label}`}
            label={label}
            variant={label === pronoun ? "filled" : "outlined"}
            onClick={() => {
              setValue("pronoun", label);
            }}
            color="primary"
            sx={{
              width: "100%",
              color: label === pronoun ? "white" : "primary",
            }}
          />
        ))}
      </Stack>
      <Stack width="100%" spacing={2}>
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
          <DesktopDatePicker
            inputFormat="MM/dd/yyyy"
            value={watch("date_of_birth")}
            renderInput={(params) => <CssTextField fullWidth {...params} />}
            {...register("date_of_birth", {
              required: "Please input your date of birth",
            })}
            onChange={(value) => {
              setValue("date_of_birth", value);
            }}
          />
          <ErrorField attribute={errors?.date_of_birth} />
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
            {...register("phone", {
              required: "Please input your phone number",
            })}
            onChange={(value) => {
              setValue("phone", value);
            }}
          />
          <ErrorField attribute={errors?.phone} />
        </FormControl>
      </Stack>
      <Container
        maxWidth="md"
        sx={{
          position: "absolute",
          width: "100%",
          bottom: 64,
          left: 0,
          right: 0,
          padding: 2,
        }}
      >
        <Button
          disabled={disabled}
          style={{
            width: "100%",
            ...(!disabled
              ? { boxShadow: "2px 3px 8px 6px rgba(26,182,92,0.34)" }
              : {}),
            color: "white",
          }}
          size="large"
          variant="contained"
          type="button"
          onClick={nextStep}
        >
          Continue
        </Button>
      </Container>
    </div>
  );
};

export default Step2;
