import { useRouter } from "next/router";
import useBooking from "../../src/services/useBooking";
import { Container, Stack, Typography } from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import styled from "@emotion/styled";
import QRCode from "react-qr-code";

const PageTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 700;
`;

const Card = styled.div`
  margin-top: 12px;
  border: 1px solid rgba(213, 213, 213, 0.68);
  border-radius: 8px;
  display: flex;
  padding: 8px;
  flex-direction: column;
  align-items: center;

  .hotel-name {
    font-weight: bold;
    text-align: center;
    width: 100%;
  }

  .qr {
    align-self: center;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }
`;

const BookingDetail = () => {
  const router = useRouter();
  const { id: bookingId } = router.query;
  const { data, loading } = useBooking(parseInt(bookingId));
  const booking = data?.booking;
  const hotel = booking?.hotel;
  console.log(booking);

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
      {booking && (
        <>
          <Card>
            <div className="hotel-name">{hotel?.name}</div>
            <div className="qr">
              <QRCode value={JSON.stringify(booking || "{}")} />
            </div>
          </Card>
        </>
      )}
    </Container>
  );
};

export default BookingDetail;
