import { Box, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useRouter } from "next/router";
import useHotel from "../../../src/services/useHotel";

const Gallery = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useHotel(+id);
  const hotel = data?.hotel;
  console.log("data", data);

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
            Gallery Hotel Photos
          </Typography>
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

      <Grid container spacing={2} mt={9} px={2}>
        {hotel?.images.map((image) => (
          <Grid item xs={6} key={image}>
            <Box
              component="img"
              width="100%"
              height="160px"
              sx={{ objectFit: "cover" }}
              borderRadius={4}
              src={image}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Gallery;
