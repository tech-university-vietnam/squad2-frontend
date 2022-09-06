import { useRouter } from "next/router";
import useBooking from "../../src/services/useBooking";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { FiChevronLeft } from "react-icons/fi";
import styled from "@emotion/styled";
import QRCode from "react-qr-code";
import { format } from "date-fns";

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
    font-size: 24px;
  }

  .qr {
    align-self: center;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-top: 24px;
  }

  .text-left {
    text-align: left;
    font-weight: bold;
    margin-top: 4px;
  }

  .group-title {
    color: #7e7e7e;
  }

  .w-100 {
    width: 100%;
  }
`;

const BookingDetail = () => {
  const router = useRouter();
  const { id: bookingId } = router.query;
  const { data, loading } = useBooking(parseInt(bookingId));
  const booking = data?.booking;
  const hotel = booking?.hotel;
  const user = booking?.user;
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
            <div>
              <Grid
                container
                rowSpacing={1}
                mt={2}
                p={4}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="space-between"
              >
                <Grid item xs={6}>
                  <div className="w-100">
                    <div className="group-title">Name</div>
                    <div className="text-left">
                      {user?.lastName} {user?.firstName}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="w-100">
                    <div className="group-title">Phone number</div>
                    <div className="text-left">{user?.phone}</div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="w-100">
                    <div className="group-title">Check in</div>
                    <div className="text-left">
                      {booking?.checkIn &&
                        format(
                          new Date(parseInt(booking?.checkIn)),
                          "LLL dd, yyyy"
                        )}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="w-100">
                    <div className="group-title">Check out</div>
                    <div className="text-left">
                      {booking?.checkOut &&
                        format(
                          new Date(parseInt(booking?.checkOut)),
                          "LLL dd, yyyy"
                        )}
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="w-100">
                    <div className="group-title">Hotel</div>
                    <div className="text-left">{hotel?.name}</div>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="w-100">
                    <div className="group-title">Guest</div>
                    <div className="text-left">{booking?.guests}</div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Card>
        </>
      )}
    </Container>
  );
};

export default BookingDetail;
