import {
  Button,
  Chip,
  Container,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import ErrorField from "../ErrorField";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";

const Step3 = ({
  nextStep,
  watch,
  register,
  setValue,
  formState: { errors },
}) => {
  const disabled = !watch("payment_method");
  return (
    <div>
      <h4>Payment methods</h4>
      <FormControl>
        <RadioGroup {...register("payment_method")}>
          <FormControlLabel
            value="payment_method"
            control={<Radio />}
            label="Pay by Cash when arrive"
          />
        </RadioGroup>
      </FormControl>
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
          type="submit"
        >
          Continue
        </Button>
      </Container>
    </div>
  );
};

export default Step3;
