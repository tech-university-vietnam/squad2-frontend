import { useEffect, useMemo, useState } from "react";
import Step1 from "../../../src/components/BookingForm/Step1";
import { useForm } from "react-hook-form";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import routes from "../../../src/config/routes";
import styled from "@emotion/styled";
import Step2 from "../../../src/components/BookingForm/Step2";
import useCurrentUser from "../../../src/services/userCurrentUser";
import Step3 from "../../../src/components/BookingForm/Step3";
import useCreateBooking from "../../../src/services/useCreateBooking";
import { omit } from "lodash";
import { useRouter } from "next/router";
import useHotel from "../../../src/services/useHotel";
import withAuth from "../../../src/hooks/withAuth";

const PageTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

const BookFormPage = () => {
  const router = useRouter();
  const { id: hotelId } = router.query;
  const { data: currentUser } = useCurrentUser();
  const [createBooking, { loading, data, error }] = useCreateBooking();
  const { data: hotelData } = useHotel(+hotelId);
  const formProps = useForm();

  const [step, setStep] = useState(0);

  const onSubmit = async (data) => {
    const booking = await createBooking({
      variables: {
        createBookingInput: {
          hotelId: parseInt(hotelId),
          userId: parseInt(currentUser?.currentUser?.id),
          ...omit(data, [
            "lastname",
            "firstname",
            "email",
            "phone",
            "dob",
            "pronoun",
            "payment_method",
            "price",
          ]),
        },
      },
    });
    router.replace(routes.booking_detail(booking.data.createBooking.id));
  };

  const nextStep = () => {
    setStep(step + 1);
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
      checkIn: null,
      checkOut: null,
      guests: 0,
      lastname: currentUser?.currentUser?.lastName,
      firstname: currentUser?.currentUser?.firstName,
      email: currentUser?.currentUser?.email,
      phone: currentUser?.currentUser?.phone,
      dob: currentUser?.currentUser?.dob,
      price: hotelData?.hotel?.price || 0,
    });
  }, [currentUser, hotelData]);

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
          {step === 2 && <Step3 {...formProps} nextStep={nextStep} />}
        </form>
      </Box>
    </Container>
  );
};

export default withAuth(BookFormPage);
