import {
  Avatar,
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ThemeColor } from "../src/config/constants";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import HotelCard from "../src/components/HotelCard";
import ChipGroup from "../src/components/ChipGroup";
import withAuth from "../src/hooks/withAuth";
import useHotels from "../src/services/useHotels";
import useCurrentUser from "../src/services/userCurrentUser";

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
  const filters = ["Price"];
  const [isTop, setIsTop] = useState(true);
  const [filter, setFilter] = useState(undefined);
  const [page, setPage] = useState(1);
  // TODO: Handle when limit is small such that component is not overflow (not scrollable)
  const limit = 6;
  const orderBy = filter === 0 ? "price" : "";
  const { loading, data, fetchMore, refetch } = useHotels({
    paging: {
      limit,
      page,
    },
    orderBy,
  });
  const { data: currentUserData } = useCurrentUser();
  const name = currentUserData?.currentUser?.firstName;

  const hotels = data?.hotels.items || [];
  const totalPages = data?.hotels.meta.totalPages || 1;

  const handleScroll = (event) => {
    const _isTop = event.target.scrollTop == 0;
    const _istBottom =
      event.target.scrollHeight - event.target.scrollTop ==
      event.target.clientHeight;

    setIsTop(_isTop);

    if (_istBottom && page < totalPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    if (page > 1) fetchMore({});
  }, [page, fetchMore]);

  useEffect(() => {
    refetch();
  }, [filter]);

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
          boxShadow: isTop ? 0 : 12,
        }}
        onScroll={handleScroll}
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

      <Box
        p={2}
        pt={10}
        onScroll={handleScroll}
        sx={{ overflow: "scroll", height: "100vh" }}
      >
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
              key={hotel.id}
              name={hotel.name}
              address={hotel.address}
              rating={4.6}
              review={1234}
              price={hotel.price}
              bookmarked={false}
              image={hotel?.images?.[0]}
              id={hotel.id}
            />
          ))}
        </Box>
      </Box>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            bottom: 60,
            right: 0,
            left: 0,
            zIndex: 999,
            textAlign: "center",
          }}
        >
          <CircularProgress color="primary" size={20} />
        </Box>
      )}
    </>
  );
};

export default withAuth(Home);
