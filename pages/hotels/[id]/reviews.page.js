import { Box, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRouter } from "next/router";
import useHotel from "../../../src/services/useHotel";
import { slice } from "lodash";
import ReviewCard from "../../../src/components/ReviewCard";
import StarIcon from "@mui/icons-material/Star";
import React, { useMemo, useState } from "react";
import styled from "@emotion/styled";
import { ThemeColor } from "../../../src/config/constants";

const options = ["All", "5", "4", "3", "2", "1"];

const Chip = styled.div`
  padding: 8px 12px;
  border-radius: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 14px;
  width: 80px;

  color: ${ThemeColor.primary};
  border: 1px solid ${ThemeColor.primary};
  transition: 0.3s;

  ${(props) =>
    props.selected &&
    `
    color: white;
    background-color: ${ThemeColor.primary};
    svg {
      color: white;
    }
  `}

  svg {
    color: 1px solid ${ThemeColor.primary};
  }

  &:hover {
    color: white;
    background-color: ${ThemeColor.primary};
    svg {
      color: white;
    }
  }
`;

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
                    <Chip selected={item === currentFilter}>
                      <StarIcon fontSize="small" sx={{ marginRight: "8px" }} />
                      {item}
                    </Chip>
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
