import { useEffect, useMemo, useState } from "react";
import Step1 from "../../../src/components/BookingForm/Step1";
import { useForm } from "react-hook-form";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import routes from "../../../src/config/routes";
import styled from "@emotion/styled";
import Step2 from "../../../src/components/BookingForm/Step2";
import useCurrentUser from "../../../src/services/userCurrentUser";

const PageTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

const BookFormPage = () => {
  const { data: currentUser } = useCurrentUser();

  const formProps = useForm();

  const [step, setStep] = useState(1);

  const onSubmit = (data) => {
    console.log(data);
  };

  const nextStep = () => {
    setStep(step + 1);
    console.log(formProps.getValues());
  };

  const pageTitle = useMemo(() => {
    if (step === 0) {
      return "Select date";
    }
    if (step === 1) {
      return "Name of Reservation";
    }
    if (step === 2) {
      return "Payment";
    }
  }, [step]);

  useEffect(() => {
    formProps.reset({
      check_in: null,
      check_out: null,
      guests: 0,
      lastname: currentUser?.currentUser?.lastName,
      firstname: currentUser?.currentUser?.firstName,
      email: currentUser?.currentUser?.email,
    });
  }, [currentUser]);

  return (
    <Container>
      <Stack direction="row" pt={2} alignItems="center" spacing={0}>
        <FiChevronLeft
          size={24}
          onClick={() => {
            if (step > 0) {
              setStep(step - 1);
              return;
            }
            router.back();
          }}
        />
        <PageTitle>{pageTitle}</PageTitle>
      </Stack>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        height="60vh"
      >
        <form
          onSubmit={formProps.handleSubmit(onSubmit)}
          style={{ width: "100%" }}
        >
          {step === 0 && <Step1 {...formProps} nextStep={nextStep} />}
          {step === 1 && <Step2 {...formProps} nextStep={nextStep} />}
        </form>
      </Box>
    </Container>
  );
};

export default BookFormPage;
