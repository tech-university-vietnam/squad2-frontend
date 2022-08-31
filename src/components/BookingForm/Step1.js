import { Button, Container, FormControl, Grid, TextField } from "@mui/material";
import styled from "@emotion/styled";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import ErrorField from "../ErrorField";
import { ThemeColor } from "../../config/constants";

const StyledDiv = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  .total {
    margin-top: 64px;
    align-self: center;
    font-size: 20px;
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

const Step1 = ({
  nextStep,
  watch,
  register,
  setValue,
  formState: { errors },
}) => {
  const guests = watch("guests");
  const check_in = watch("check_in");
  const check_out = watch("check_out");
  const disabled = !check_in || !check_out || guests === 0;
  const price = 29;

  const increase = () => {
    setValue("guests", guests + 1);
  };
  const decrease = () => {
    setValue("guests", guests - 1);
  };

  return (
    <>
      <StyledDiv>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <b>Check-in</b>
            <FormControl variant="filled">
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={watch("check_in")}
                renderInput={(params) => <CssTextField fullWidth {...params} />}
                {...register("check_in", {
                  required: "Please input",
                })}
                onChange={(value) => {
                  setValue("check_in", value);
                }}
              />
              <ErrorField attribute={errors?.check_in} />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <b>Check-out</b>
            <FormControl variant="filled">
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={watch("check_out")}
                renderInput={(params) => <CssTextField fullWidth {...params} />}
                {...register("check_out", {
                  required: "Please input",
                })}
                onChange={(value) => {
                  setValue("check_out", value);
                }}
              />
              <ErrorField attribute={errors?.check_in} />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={0.5}>
          <Grid item xs={6}>
            <b>Guests</b>
          </Grid>
        </Grid>
        <ChangeQuantityGroup>
          <div className="button" onClick={decrease}>
            -
          </div>
          <div className="quantity">{guests}</div>
          <div className="button" onClick={increase}>
            +
          </div>
        </ChangeQuantityGroup>
        <b className="total">Total: ${price * guests}</b>
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
      </StyledDiv>
    </>
  );
};

export default Step1;
