import { Avatar, Box, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import routes from "../../src/config/routes";
import BookingCard from "../../src/components/BookingCard";
import useBookings from "../../src/services/useBookings";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import { ThemeColor } from "../../src/config/constants";
import withAuth from "../../src/hooks/withAuth";

const BookingPage = () => {
  const { data: user } = useBookings();
  const data = user?.currentUser;
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
            sx={{
              bgcolor: ThemeColor.primary,
              width: 40,
              height: 40,
              mr: 1.5,
            }}
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
      <Box p={2} pt={12} pb={8}>
        {!data || data.bookings.length == 0 ? (
          <>
            <div style={{ textAlign: "center", marginTop: 72 }}>
              <DescriptionRoundedIcon
                sx={{ width: 80, height: 80, color: "#e0e0e0" }}
              />
            </div>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ color: "#d0d0d0" }}
            >
              No data
            </Typography>
          </>
        ) : (
          data.bookings.map((booking) => (
            <BookingCard booking={booking} key={booking.id} />
          ))
        )}
      </Box>
    </>
  );
};

export default withAuth(BookingPage);
