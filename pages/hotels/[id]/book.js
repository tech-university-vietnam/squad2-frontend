import { useState } from "react";
import Step1 from "../../../src/components/BookingForm/Step1";
import { useForm } from "react-hook-form";
import { Box, Container, Stack, Typography } from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import routes from "../../../src/config/routes";

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

  return (
    <Container>
      <Stack direction="row" pt={2} alignItems="center" spacing={0}>
        <FiChevronLeft
          size={24}
          onClick={() => {
            router.back();
          }}
        />
      </Stack>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="60vh"
      >
        <form onSubmit={formProps.handleSubmit(onSubmit)}>
          {step === 0 && <Step1 {...formProps} />}
        </form>
      </Box>
    </Container>
  );
};

export default BookFormPage;
