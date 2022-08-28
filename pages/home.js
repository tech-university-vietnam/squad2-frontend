import {
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { ThemeColor } from "../src/config/constants";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import HotelCard from "../src/components/HotelCard";
import ChipGroup from "../src/components/ChipGroup";
import withAuth from "../src/hooks/withAuth";
import useHotels from "../src/services/useHotels";

const CssTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderWidth: 0,
    },
    "&.Mui-focused fieldset": {
      borderRadius: 12,
    },
  },
});

const Home = () => {
  const name = "Daniel";
  const filters = ["Recommended", "Popular", "Trending"];
  const [filter, setFilter] = useState(0);
  const { loading, data } = useHotels();
  const hotels = data?.hotels || [];
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
          <Typography variant="h5">Helia</Typography>
        </Box>
        <Box display="flex">
          <IconButton aria-label="notification">
            <NotificationsNoneOutlinedIcon />
          </IconButton>
          <IconButton aria-label="bookmark">
            <BookmarkBorderOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      <Box p={2} pt={10}>
        <Typography variant="h5" fontWeight={700} mb={2}>
          Hello, {name} 👋!
        </Typography>

        <CssTextField
          fullWidth
          id="email"
          placeholder="Email"
          type="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ color: ThemeColor.primary }}>
                <FilterListIcon />
              </InputAdornment>
            ),
          }}
        />

        <ChipGroup value={filter} labels={filters} setValue={setFilter} />

        <Box pb={8}>
          {hotels.map((hotel) => (
            <HotelCard
              name={hotel.name}
              address={hotel.address}
              rating={4.6}
              review={1234}
              price={hotel.price}
              bookmarked={false}
              image={hotel?.images?.[0]}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default withAuth(Home);
