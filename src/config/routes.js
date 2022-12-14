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
  edit_profile: "/account/edit",
  hotel_detail: (id) => `/hotels/${id}`,
  hotel_gallery: (id) => `/hotels/${id}/gallery`,
  hotel_reviews: (id) => `/hotels/${id}/reviews`,
  hotel_book: (id) => `/hotels/${id}/book`,
  is_hotel_path: (path) => path.startsWith("/hotels"),
};

export default routes;
