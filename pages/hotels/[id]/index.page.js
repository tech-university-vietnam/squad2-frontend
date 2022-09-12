import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";
import useHotel from "../../../src/services/useHotel";
import styles from "../../../styles/Onboard.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";
import routes from "../../../src/config/routes";
import IconWithLabel from "../../../src/components/IconWithLabel";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import HotelIcon from "@mui/icons-material/Hotel";
import BathtubIcon from "@mui/icons-material/Bathtub";
// import WidthFullIcon from "@mui/icons-material/WidthFull";
import SquareIcon from "@mui/icons-material/Square";
import PoolIcon from "@mui/icons-material/Pool";
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ElevatorIcon from "@mui/icons-material/Elevator";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalConvenienceStoreIcon from "@mui/icons-material/LocalConvenienceStore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { ThemeColor } from "../../../src/config/constants";
import { useState } from "react";
import ReviewCard from "../../../src/components/ReviewCard";
import { slice } from "lodash";

const icons = {
  hotel: {
    icon: <MapsHomeWorkIcon color="primary" />,
    name: "Hotels",
  },
  bedroom: {
    icon: <HotelIcon color="primary" />,
    name: "Bedroom",
  },
  bathroom: {
    icon: <BathtubIcon color="primary" />,
    name: "Bathroom",
  },
  area: {
    icon: <SquareIcon color="primary" />,
    name: "sqft",
  },
  pool: {
    icon: <PoolIcon color="primary" />,
    name: "Swimming Pool",
  },
  wifi: {
    icon: <WifiIcon color="primary" />,
    name: "Wifi",
  },
  restaurant: {
    icon: <RestaurantIcon color="primary" />,
    name: "Restaurant",
  },
  parking: {
    icon: <LocalParkingIcon color="primary" />,
    name: "Parking",
  },
  meeting: {
    icon: <MeetingRoomIcon color="primary" />,
    name: "Meeting Room",
  },
  elevator: {
    icon: <ElevatorIcon color="primary" />,
    name: "Elevator",
  },
  fitness: {
    icon: <FitnessCenterIcon color="primary" />,
    name: "Fitness Center",
  },
  open: {
    icon: <LocalConvenienceStoreIcon color="primary" />,
    name: "24-hours-open",
  },
};

const HotelDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useHotel(+id);
  const hotel = data?.hotel;
  const reviews = hotel?.reviews;
  const [isTop, setIsTop] = useState(true);

  const handleScroll = (event) => {
    const _isTop = event.target.scrollTop <= 240;
    const _istBottom =
      event.target.scrollHeight - event.target.scrollTop ==
      event.target.clientHeight;
    setIsTop(_isTop);
  };

  return (
    <>
      {/* TODO: Update title when scrolling */}
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
          zIndex: 999,
          background: isTop ? "inherit" : "white",
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton aria-label="back" onClick={() => router.back()}>
            <ArrowBackIcon />
          </IconButton>
          {/* <Typography variant="h5" ml={1}>
            Gallery Hotel Photos
          </Typography> */}
        </Box>
        <Box display="flex">
          <IconButton aria-label="bookmark">
            <BookmarkBorderOutlinedIcon />
          </IconButton>
          <IconButton aria-label="notification">
            <MoreHorizIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        maxHeight="100%"
        sx={{ overflowY: "scroll" }}
        onScroll={handleScroll}
      >
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletActiveClass: styles.squadBulletActive,
          }}
          // onSwiper={(_swiper) => {
          //   setSwiper(_swiper);
          // }}
          autoHeight
        >
          {hotel &&
            hotel.images.map((image) => {
              return (
                <SwiperSlide key={image}>
                  <Box
                    component="img"
                    width="100%"
                    height="300px"
                    sx={{ objectFit: "cover" }}
                    src={image}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>

        <Box pb={16}>
          <Box m={2}>
            <Typography variant="h4" mb={1}>
              {hotel?.name}
            </Typography>
            <Box display="flex">
              <LocationOnIcon color="primary" />
              <Typography>{hotel?.address}</Typography>
            </Box>
          </Box>

          <Divider />

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            mx={2}
            mt={2}
            mb={1}
          >
            <Typography variant="h6">Gallery Photos</Typography>
            <Link style={{ cursor: "pointer" }} href={routes.hotel_gallery(id)}>
              <Typography color="primary">See All</Typography>
            </Link>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            ml={2}
            sx={{
              maxWidth: "100%",
              overflow: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {hotel &&
              hotel.images.map((image) => {
                return (
                  <SwiperSlide key={image}>
                    <Box
                      component="img"
                      width="100%"
                      height="300px"
                      sx={{ objectFit: "cover" }}
                      src={image}
                    />
                  </SwiperSlide>
                );
              })}
          </Stack>

          <Box m={2}>
            <Typography variant="h6" mb={1}>
              Details
            </Typography>
            <Box display="flex" justifyContent="space-around">
              {/* TODO: Intergrate with backend API */}
              {[
                { key: "hotel", value: "Hotel" },
                { key: "bedroom", value: "4 Bedrooms" },
                { key: "bathroom", value: "1 Bathroom" },
                { key: "area", value: "4000 sqft" },
              ].map(({ key, value }) => (
                <IconWithLabel
                  key={key}
                  icon={icons?.[key]?.icon}
                  label={value}
                />
              ))}
            </Box>
          </Box>

          <Box m={2}>
            <Typography variant="h6" mb={1}>
              Description
            </Typography>
            <Typography>{hotel?.description}</Typography>
          </Box>

          <Box m={2}>
            <Typography variant="h6" mb={1}>
              Facilities
            </Typography>
            <Box display="flex" justifyContent="space-around" flexWrap="wrap">
              {/* TODO: Intergrate with backend API */}
              {/* Object.keys(icons)
              .filter(
                (key) => !["hotel", "bedroom", "bathroom", "area"].includes(key)
              ) */}
              {hotel &&
                hotel.facilities.map((key) => (
                  <IconWithLabel
                    key={key}
                    icon={icons[key]?.icon}
                    label={icons[key]?.name}
                    fontSize={12}
                    m={0.5}
                    minWidth={60}
                  />
                ))}
            </Box>
          </Box>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="baseline"
            mx={2}
            mt={2}
            mb={1}
          >
            <Typography variant="h6">Reviews</Typography>
            <Link style={{ cursor: "pointer" }} href={routes.hotel_reviews(id)}>
              <a>
                <Typography color="primary">See All</Typography>
              </a>
            </Link>
          </Box>
          <Box m={2}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-around"
              flexWrap="wrap"
            >
              {reviews &&
                slice(reviews, 0, 3).map((review) => {
                  return <ReviewCard key={`review_${review.id}`} {...review} />;
                })}
            </Box>
          </Box>
        </Box>
      </Box>

      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          alignItems: "center",
          bgcolor: "white",
          py: 3,
          borderRadius: 6,
          borderTop: 1,
          borderColor: "#f0f0f0",
        }}
      >
        <Box display="flex" alignItems="baseline" mr={2}>
          <Typography color="primary" variant="h5">
            ${hotel?.price || 0}
          </Typography>
          <Typography>/night</Typography>
        </Box>
        <Link href={routes.hotel_book(id)} style={{ flex: 1 }}>
          <Button
            sx={{ color: "white" }}
            size="large"
            variant="contained"
            fullWidth
          >
            Book Now!
          </Button>
        </Link>
      </Container>
    </>
  );
};

export default HotelDetail;
