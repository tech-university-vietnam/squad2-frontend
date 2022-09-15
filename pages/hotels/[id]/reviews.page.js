import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import useHotel from "../../../src/services/useHotel";
import ReviewCard from "../../../src/components/ReviewCard";
import StarIcon from "@mui/icons-material/Star";
import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import StyledChip from "../../../src/components/StyledChip";

const options = ["All", "5", "4", "3", "2", "1"];

const HorizontalScroll = styled.div`
  overflow-x: scroll;
  flex-direction: row;
  display: flex;
  width: 89vw;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Gallery = () => {
  const [currentFilter, setCurrentFilter] = useState(options[0]);
  const router = useRouter();
  const { id } = router.query;
  const { data } = useHotel(+id);
  const hotel = data?.hotel;
  const reviews = hotel?.reviews;

  const filtered = useMemo(() => {
    if (currentFilter === options[0]) {
      return reviews;
    }
    return reviews?.filter((review) => review.rating === +currentFilter);
  }, [data, currentFilter]);

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
          zIndex: 999,
          bgcolor: "white",
        }}
      >
        <Box display="flex" alignItems="center">
          <IconButton aria-label="back" onClick={() => router.back()}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h5" ml={1}>
            Reviews
          </Typography>
        </Box>
      </Box>

      <Box m={2} pb={10} pt={10}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          flexWrap="wrap"
        ></Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          flexWrap="wrap"
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-start"
            flexWrap="wrap"
          >
            <HorizontalScroll>
              {options.map((item) => {
                return (
                  <div
                    key={`chip_${item}`}
                    style={{
                      paddingRight: "8px",
                      paddingBottom: "8px",
                    }}
                    onClick={() => setCurrentFilter(item)}
                  >
                    <StyledChip selected={item === currentFilter}>
                      <StarIcon fontSize="small" sx={{ marginRight: "8px" }} />
                      {item}
                    </StyledChip>
                  </div>
                );
              })}
            </HorizontalScroll>
          </Box>
          <Typography pb={2} pt={4}>
            <b>Rating</b>
          </Typography>

          {filtered &&
            filtered.map((review) => {
              return <ReviewCard key={`review_${review.id}`} {...review} />;
            })}
        </Box>
      </Box>
    </>
  );
};

export default Gallery;
