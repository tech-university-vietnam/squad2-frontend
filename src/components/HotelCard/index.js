import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";
import routes from "../../config/routes";
import Link from "next/link";
import Image from "next/image";

const StyledCard = styled(Card)``;

const HotelCard = ({
  name,
  address,
  rating,
  review,
  price,
  bookmarked,
  image,
  id,
  ...rest
}) => {
  return (
    <Link style={{ cursor: "pointer" }} href={routes.hotel_detail(id)}>
      <Card
        className="hotel-card"
        sx={{
          display: "flex",
          borderRadius: 2,
          alignItems: "center",
          mb: 2,
        }}
        elevation={12}
        {...rest}
      >
        <div style={{ marginLeft: "8px" }}>
          <Image
            src={image}
            alt="Hotel image"
            width={90}
            height={86}
            style={{ borderRadius: 8, paddingLeft: "8px", marginLeft: "8px" }}
          />
        </div>

        <CardContent
          sx={{
            display: "flex",
            flex: 1,
            minWidth: 0,
            justifyContent: "space-between",
          }}
          className="hotel-content"
        >
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="h6"
              fontWeight={700}
              color="black"
              className="hotel-name"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {address}
            </Typography>
            <Stack spacing={0.5} direction="row" alignItems="flex-end">
              <StarIcon sx={{ color: "yellow" }} />
              <Typography color="primary" fontWeight={600}>
                {rating}
              </Typography>
              <Typography marginTop={12} variant="caption" color="gray">
                ({review > 1 ? `${review} reviews` : `${review} review`})
              </Typography>
            </Stack>
          </Box>
          <Box minWidth="max-content">
            <Typography variant="h6" color="primary">
              ${price}
            </Typography>
            <Typography color="gray" align="right" variant="caption">
              / night
            </Typography>
            {bookmarked ? (
              <BookmarkIcon color="primary" sx={{ display: "block" }} />
            ) : (
              <BookmarkBorderOutlinedIcon sx={{ display: "block" }} />
            )}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HotelCard;
