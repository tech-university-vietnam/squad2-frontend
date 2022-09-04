const routes = {
  home: "/home",
  search: "/search",
  bookings: "/bookings",
  booking_detail: (id) => `/bookings/${id}`,
  onboard: "/onboard",
  login: "/login",
  splash: "/splash",
  welcome: "/welcome",
  profile: "/profile",
  account: "/account",
  hotel_detail: (id) => `/hotels/${id}`,
};

export default routes;
