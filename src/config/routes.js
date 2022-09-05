const routes = {
  home: "/home",
  search: "/search",
  booking: "/booking",
  onboard: "/onboard",
  login: "/login",
  splash: "/splash",
  welcome: "/welcome",
  profile: "/profile",
  account: "/account",
  hotel_detail: (id) => `/hotels/${id}`,
  hotel_gallery: (id) => `/hotels/${id}/gallery`,
  hotel_book: (id) => `/hotels/${id}/book`,
  is_hotel_path: (path) => path.startsWith("/hotels"),
};

export default routes;
