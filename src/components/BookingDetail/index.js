import QRCode from "react-qr-code";
import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import { format } from "date-fns";

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

const BookingDetailCard = (data) => {
  const booking = data?.booking;
  const hotel = booking?.hotel;
  const user = booking?.user;
  const totalPrice = booking?.totalPrice;
  const checkIn = booking?.checkIn
    ? format(new Date(parseInt(booking?.checkIn)), "LLL dd, yyyy")
    : undefined;
  const checkOut = booking?.checkIn
    ? format(new Date(parseInt(booking?.checkOut)), "LLL dd, yyyy")
    : undefined;

  const QRCodeContent = `${user?.firstName}_${user?.lastName}_${
    user?.phone || "NO_PHONE"
  }_${hotel?.name}_${checkIn}_${checkOut}_${booking?.guests}`;

  return (
    <>
      <Card>
        <div className="hotel-name">{hotel?.name}</div>
        <div className="qr">
          <QRCode value={QRCodeContent} />
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
                <div className="text-left">{checkIn}</div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="w-100">
                <div className="group-title">Check out</div>
                <div className="text-left">{checkOut}</div>
              </div>
            </Grid>

            <Grid item xs={6}>
              <div className="w-100">
                <div className="group-title">Room</div>
                <div className="text-left">{booking?.guests}</div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="w-100">
                <div className="group-title">Price</div>
                <div className="text-left">${totalPrice}</div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Card>
    </>
  );
};

export default BookingDetailCard;
