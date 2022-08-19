import React, { useState } from "react";
import { Pagination, A11y } from "swiper";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import styles from "../styles/Onboard.module.css";
import { useRouter } from "next/router";
import routes from "../src/config/routes";
import { ThemeColor } from "../src/config/constants";

const images = [
  {
    img: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6",
    title: "Travel safely, comfortably, & easily",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eu ipsum sed facilisis. Donec enim lorem, ultricies ac vestibulum tempus, posuere ac metus.",
  },
  {
    img: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
    title: "Find the best hotels for your vacation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eu ipsum sed facilisis. Donec enim lorem, ultricies ac vestibulum tempus, posuere ac metus.",
  },
  {
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Let's discover the world with us",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eu ipsum sed facilisis. Donec enim lorem, ultricies ac vestibulum tempus, posuere ac metus.",
  },
];

const OnboardPage = () => {
  const [swiper, setSwiper] = useState();
  const router = useRouter();

  const handleNext = () => {
    if (swiper) {
      if (swiper.activeIndex === images.length - 1) {
        router.push("/login");
      } else {
        swiper.slideNext();
      }
    }
  };
  return (
      <Box
        display="flex"
        height="100vh"
        justifyContent="space-between"
        flexDirection="column"
      >
        <div style={{ width: "100%" }}>
          <Swiper
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletActiveClass: styles.squadBulletActive,
            }}
            onSwiper={(_swiper) => {
              setSwiper(_swiper);
            }}
            autoHeight
          >
            {images.map((image) => {
              return (
                <SwiperSlide key={`image_${image.img}`}>
                  <Box mb={6}>
                    <Box
                      component="img"
                      width="100%"
                      height="400px"
                      sx={{ objectFit: "cover" }}
                      src={image.img}
                      alt={image.title}
                    />
                    <Container maxWidth="md">
                      <Typography variant="h5" align="center" mt={4} mb={2}>
                        {image.title}
                      </Typography>
                      <Typography align="center" style={{ color: "grey" }}>
                        {image.desc}
                      </Typography>
                    </Container>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <Container maxWidth="md">
          <Stack spacing={2} my={4}>
            <Button
              sx={{ color: "white" }}
              size="large"
              variant="contained"
              onClick={handleNext}
            >
              Next
            </Button>
            <Link href={routes.login}>
              <Button
                size="large"
                variant="contained"
                style={{
                  backgroundColor: ThemeColor.light,
                  color: ThemeColor.primary,
                }}
              >
                Skip
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>
  );
};

export default OnboardPage;
