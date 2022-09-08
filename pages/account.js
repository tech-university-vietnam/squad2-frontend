import { useAppLayout } from "../src/provider/AppLayout";
import withAuth from "../src/hooks/withAuth";
import {
  Avatar,
  Box,
  Divider,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PersonIcon from "@mui/icons-material/Person";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import NotificationsIcon from "@mui/icons-material/Notifications";
import InfoIcon from "@mui/icons-material/Info";
import GppGoodIcon from "@mui/icons-material/GppGood";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LogoutIcon from "@mui/icons-material/Logout";
import { ThemeColor } from "../src/config/constants";
import EditIcon from "@mui/icons-material/Edit";
import useCurrentUser from "../src/services/userCurrentUser";
import routes from "../src/config/routes";
import Link from "next/link";

const AccountPage = () => {
  const { logout } = useAppLayout();
  const { data } = useCurrentUser();
  const currentUser = data?.currentUser;

  const listItems = [
    {
      icon: <PersonIcon />,
      link: routes.profile,
      text: "Edit Profile",
    },
    {
      icon: <CreditCardIcon />,
      text: "Payment",
    },
    {
      icon: <NotificationsIcon />,
      text: "Notifications",
    },
    {
      icon: <GppGoodIcon />,
      text: "Security",
    },
    {
      icon: <InfoIcon />,
      text: "Help",
    },
  ];

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
        }}
      >
        <Box display="flex">
          <Avatar
            sx={{ bgcolor: ThemeColor.primary, width: 40, height: 40, mr: 1.5 }}
            variant="rounded"
            src="/logo.png"
          />
          <Typography variant="h5">Profile</Typography>
        </Box>
        <IconButton aria-label="more">
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Box p={2} pt={10} pb={8}>
        <Box
          sx={{
            position: "relative",
            margin: "auto",
            width: "fit-content",
          }}
        >
          <Avatar
            alt="Profile picture"
            src={currentUser?.avatar}
            sx={{
              width: 128,
              height: 128,
              margin: "auto",
              boxShadow: "none",
            }}
          />
          <Fab
            color="primary"
            aria-label="edit"
            size="small"
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              borderRadius: "12px",
              boxShadow: "none",
            }}
          >
            <EditIcon sx={{ color: "white" }} />
          </Fab>
        </Box>
        <Typography variant="h5" textAlign="center" mt={2}>
          {currentUser?.firstName} {currentUser?.lastName}
        </Typography>
        <Typography textAlign="center" mb={2}>
          {currentUser?.email}
        </Typography>
        <Divider variant="middle" />

        <nav aria-label="main mailbox folders">
          <List>
            {listItems.map((list) => (
              <ListItem disablePadding key={list.text}>
                <Link href={list.link || "#"}>
                  <ListItemButton>
                    <ListItemIcon>{list.icon}</ListItemIcon>
                    <ListItemText primary={list.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
            <ListItem
              disablePadding
              secondaryAction={
                <Switch
                  // checked={checked}
                  // onChange={handleChange}
                  inputProps={{ "aria-label": "toggle dark theme" }}
                />
              }
            >
              <ListItemButton>
                <ListItemIcon>
                  <VisibilityIcon />
                </ListItemIcon>
                <ListItemText primary="Dark Theme" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ color: ThemeColor.danger }}>
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                  <LogoutIcon sx={{ color: ThemeColor.danger }} />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </>
  );
};

export default withAuth(AccountPage);
