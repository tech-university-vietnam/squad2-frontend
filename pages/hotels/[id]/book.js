import { useMemo, useState } from "react";
import Step1 from "../../../src/components/BookingForm/Step1";
import { useForm } from "react-hook-form";
import { Box, Container, Stack, Typography } from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import routes from "../../../src/config/routes";
import styled from "@emotion/styled";

const PageTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

const BookFormPage = () => {
  const formProps = useForm({
    defaultValues: {
      check_in: null,
      check_out: null,
      guests: 0,
    },
  });
  const [step, setStep] = useState(0);

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
        alignItems="center"
        justifyContent="center"
        height="60vh"
      >
        <form onSubmit={formProps.handleSubmit(onSubmit)}>
          {step === 0 && <Step1 {...formProps} nextStep={nextStep} />}
        </form>
      </Box>
    </Container>
  );
};

export default BookFormPage;
