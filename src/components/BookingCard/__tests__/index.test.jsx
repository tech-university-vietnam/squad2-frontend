import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingCard from "../index";

const booking = {
  __typename: "Booking",
  id: 1,
  checkIn: "1662483600000",
  checkOut: "1662742800000",
  hotel: {
    __typename: "Hotel",
    name: "sfdsdfsdf",
    address: "sdfsfd",
    images: ["https://source.unsplash.com/random"],
  },
  user: { __typename: "User", id: 1 },
};

describe("Booking Card", () => {
  let bookingCard;

  beforeEach(() => {
    bookingCard = render(<BookingCard booking={booking} />);
  });

  it("Render booking card title", () => {
    const cardTitle = screen.getByText(booking.hotel.name);
    expect(cardTitle).toBeInTheDocument();
  });

  it("Render booking card address", () => {
    const address = screen.getByText(booking.hotel.address);
    expect(address).toBeInTheDocument();
  });

  it("Render booking card image", () => {
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
  it("Render view ticket button", () => {
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
