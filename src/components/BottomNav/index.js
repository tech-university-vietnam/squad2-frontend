import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import React from "react";
import { useRouter } from "next/router";
import routes from "../../config/routes";

const BottomNav = () => {
  const router = useRouter();
  const navList = [
    { label: "Home", route: routes.home, icon: <HomeIcon /> },
    { label: "Booking", route: routes.bookings, icon: <ArticleIcon /> },
    { label: "Profile", route: routes.account, icon: <PersonIcon /> },
  ];
  const selectedIndex = navList.findIndex((nav) => nav.route === router.asPath);
  const handleChange = (event, newIndex) =>
    router.push(navList[newIndex].route);

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        showLabels
        value={selectedIndex}
        onChange={handleChange}
      >
        {navList.map((nav) => (
          <BottomNavigationAction
            icon={nav.icon}
            label={nav.label}
            key={nav.route}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
