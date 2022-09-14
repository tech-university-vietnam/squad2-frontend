import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import React from "react";
import routes from "../../config/routes";
import Link from "next/link";
import { ThemeColor } from "../../config/constants";

const BookingCard = ({ booking, ...rest }) => {
  return (
    <Card
      sx={{
        // display: "flex",
        borderRadius: 2,
        alignItems: "center",
        mb: 2,
      }}
      elevation={12}
      {...rest}
    >
      <Box display="flex">
        <CardMedia
          component="img"
          image={booking.hotel.images[0]}
          alt="Hotel image"
          sx={{ width: 86, height: 86, my: 2, ml: 2, borderRadius: 2 }}
        />

        <CardContent className="booking-card">
          <Typography variant="h6" fontWeight={700} color="black">
            {booking.hotel.name}
          </Typography>
          <Typography variant="body1">{booking.hotel.address}</Typography>
          <Chip
            label="Created"
            size="small"
            sx={{
              bgcolor: "#e6f5ec",
              color: ThemeColor.primary,
              borderRadius: 2,
              fontSize: 10,
            }}
          />
        </CardContent>
      </Box>
      <Link href={routes.booking_detail(booking.id)}>
        <Button
          sx={{
            color: "white",
            height: 36,
            width: "50%",
            float: "right",
            mb: 1.5,
            mr: 1.5,
          }}
          size="small"
          variant="contained"
        >
          View Ticket
        </Button>
      </Link>
    </Card>
  );
};

export default BookingCard;
