import { Box, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRouter } from "next/router";
import useHotel from "../../../src/services/useHotel";
import { slice } from "lodash";
import ReviewCard from "../../../src/components/ReviewCard";

const Gallery = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useHotel(+id);
  const hotel = data?.hotel;
  const reviews = hotel?.reviews;

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
        >
          {reviews &&
            reviews.map((review) => {
              return <ReviewCard key={`review_${review.id}`} {...review} />;
            })}
        </Box>
      </Box>
    </>
  );
};

export default Gallery;
