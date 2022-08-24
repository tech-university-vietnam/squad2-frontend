import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";

const HotelCard = ({
  name,
  address,
  rating,
  review,
  price,
  bookmarked,
  ...rest
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        borderRadius: 2,
        alignItems: "center",
        mb: 2,
      }}
      {...rest}
    >
      <CardMedia
        component="img"
        image="/logo.png"
        alt="Hotel image"
        sx={{ width: 86, height: 86, my: 2, ml: 2, borderRadius: 2 }}
      />

      <CardContent
        sx={{ display: "flex", justifyContent: "space-between", flex: 1 }}
      >
        <Box display="flex" flexDirection="column">
          <Typography variant="h6" color="primary">
            {name}
          </Typography>
          <Typography variant="body1">{address}</Typography>
          <Stack spacing={0.5} direction="row">
            <StarIcon sx={{ color: "yellow" }} />
            <Typography>{rating}</Typography>
            <Typography>
              ({review > 1 ? `${review} reviews` : `${review} review`})
            </Typography>
          </Stack>
        </Box>

        <Box display="flex" flexDirection="column">
          <Typography variant="h6" color="primary">
            {price}
          </Typography>
          <Typography variant="body1">/night</Typography>
          {bookmarked ? (
            <BookmarkIcon color="primary" />
          ) : (
            <BookmarkBorderOutlinedIcon />
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default HotelCard;
