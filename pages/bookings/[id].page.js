import { useRouter } from "next/router";
import useBooking from "../../src/services/useBooking";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import styled from "@emotion/styled";
import BookingDetailCard from "../../src/components/BookingDetail";

const PageTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

const BookingDetail = () => {
  const router = useRouter();
  const { id: bookingId } = router.query;
  const { data } = useBooking(parseInt(bookingId));

  return (
    <Container>
      <Stack direction="row" pt={2} alignItems="center" spacing={0}>
        <FiChevronLeft
          size={24}
          onClick={() => {
            router.back();
          }}
        />
        <PageTitle>Ticket</PageTitle>
      </Stack>
      {data && <BookingDetailCard {...data} />}
    </Container>
  );
};

export default BookingDetail;
