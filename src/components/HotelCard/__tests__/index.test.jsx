import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HotelCard from "../index";

const hotel = {
  name: "Hotel",
  address: "HCM city",
  rating: 5,
  review: 1234,
  price: 9,
  bookmarked: true,
  image: "https://source.unsplash.com/random",
  id: 1,
};

describe("Hotel Card", () => {
  let hotelCard;

  beforeEach(() => {
    hotelCard = render(<HotelCard {...hotel} />);
  });

  it("Render hotel name", () => {
    expect(screen.getByText(hotel.name)).toBeInTheDocument();
  });

  it("Render hotel address", () => {
    expect(screen.getByText(hotel.address)).toBeInTheDocument();
  });

  it("Render hotel rating", () => {
    expect(screen.getByText(hotel.rating.toString())).toBeInTheDocument();
  });

  // it("Render hotel review", () => {
  //   expect(screen.getByText(`${hotel.review} review`)).toBeInTheDocument();
  // });

  // it("Render hotel price", () => {
  //   expect(screen.getByText(`$${hotel.price}`)).toBeInTheDocument();
  // });

  it("Render hotel image", () => {
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

});
