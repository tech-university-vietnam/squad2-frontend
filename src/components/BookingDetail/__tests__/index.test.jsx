import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingDetailCard from "../index";
import { format } from "date-fns";
import QRCode from "react-qr-code";

const bookingData = {
  booking: {
    __typename: "Booking",
    id: 1,
    checkIn: "1662483600000",
    checkOut: "1662742800000",
    guests: 3,
    hotel: {
      __typename: "Hotel",
      id: 1,
      name: "sfdsdfsdf",
      price: 322,
      address: "sdfsfd",
      images: [],
    },
    user: {
      __typename: "User",
      id: 1,
      lastName: "Hoàng Sơn",
      firstName: "Tùng",
      phone: null,
    },
    createdAt: "1662496589392",
    totalPrice: 966,
  },
};

describe("Booking Detail Card", () => {
  let bookingDetailCard;
  const booking = bookingData?.booking;
  const hotel = booking?.hotel;
  const user = booking?.user;

  const checkIn = format(
    new Date(parseInt(bookingData.booking.checkIn)),
    "LLL dd, yyyy"
  );

  const checkOut = format(
    new Date(parseInt(bookingData.booking.checkOut)),
    "LLL dd, yyyy"
  );

  beforeEach(() => {
    bookingDetailCard = render(<BookingDetailCard {...bookingData} />);
  });

  it("Should display hotel name", () => {
    const heading = screen.getByText(booking.hotel.name);
    expect(heading).toBeInTheDocument();
  });

  it("Should display user name", () => {
    const name = screen.getByText(`${user.lastName} ${user.firstName}`);
    expect(name).toBeInTheDocument();
  });

  it("Should display hotel price", () => {
    const totalPrice = screen.getByText(`$${bookingData.booking.totalPrice}`);
    expect(totalPrice).toBeInTheDocument();
  });

  it("Should display checkin", () => {
    const text = screen.getByText(checkIn);
    expect(text).toBeInTheDocument();
  });

  it("Should display checkout", () => {
    const text = screen.getByText(checkOut);
    expect(text).toBeInTheDocument();
  });

  it("Should display qr code", () => {
    const QRCodeContent = `${user?.firstName}_${user?.lastName}_${
      user?.phone || "NO_PHONE"
    }_${hotel?.name}_${checkIn}_${checkOut}_${booking?.guests}`;
    const qr = render(<QRCode value={QRCodeContent} />);
    const text = screen.getByText(qr.getByRole("svg"));
    expect(text).toBeInTheDocument();
  });
});
