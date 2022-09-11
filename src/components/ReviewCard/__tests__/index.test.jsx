import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewCard from "../index";
import { format } from "date-fns";

const reviewData = {
  id: 1,
  createdAt: "1662483600000",
  user: {
    __typename: "User",
    id: 1,
    lastName: "Hoàng Sơn",
    firstName: "Tùng",
    phone: null,
  },
};

describe("Review Card", () => {
  let reviewCard;
  const user = reviewData?.user;

  const createdAt = format(
    new Date(parseInt(reviewData.createdAt)),
    "LLL dd, yyyy"
  );

  beforeEach(() => {
    reviewCard = render(<ReviewCard {...reviewData} />);
  });

  it("Should display user name", () => {
    const name = screen.getByText(`${user.lastName} ${user.firstName}`);
    expect(name).toBeInTheDocument();
  });

  it("Should display date", () => {
    const text = screen.getByText(createdAt);
    expect(text).toBeInTheDocument();
  });

});
