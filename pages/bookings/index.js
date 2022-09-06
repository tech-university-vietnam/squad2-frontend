import { Avatar, Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import routes from "../../src/config/routes";
import { ThemeColor } from "../../src/config/constants";
import BookingCard from "../../src/components/BookingCard";
import useBookings from "../../src/services/useBookings";

const BookingPage = () => {
  const { data } = useBookings();
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        pb={2}
        pt={3}
        px={2}
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bgcolor: "white",
          zIndex: 999,
        }}
      >
        <Box display="flex">
          <Avatar
            sx={{ bgcolor: ThemeColor.primary, width: 40, height: 40, mr: 1.5 }}
            variant="rounded"
            src="/logo.png"
          />
          <Typography variant="h5">My Booking</Typography>
        </Box>
        <Link href={routes.search}>
          <IconButton aria-label="search">
            <SearchIcon />
          </IconButton>
        </Link>
      </Box>
      <Box p={2} pt={10} pb={8}>
        {data &&
          data.bookings.map((booking) => (
            <BookingCard booking={booking} key={booking.id} />
          ))}
      </Box>
    </>
  );
};

export default BookingPage;
