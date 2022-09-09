import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { format } from "date-fns";

const ReviewCard = (props) => {
  const { id, user, createdAt, content } = props;
  const avatar = `https://i.pravatar.cc/150?u=review_${id}`;
  return (
    <div>
      <Card style={{ marginBottom: "8px" }}>
        <CardHeader
          avatar={
            <Avatar src={avatar} aria-label="recipe">
              R
            </Avatar>
          }
          title={<b>{`${user?.lastName} ${user?.firstName}`}</b>}
          subheader={format(new Date(parseInt(createdAt)), "LLL dd, yyyy")}
        />
        <CardContent
          sx={{
            paddingBottom: 0,
            padding: 0,
            paddingLeft: "16px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewCard;
