import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingPage from "../index.page";
import { client } from "../../../src/services";
import { ApolloProvider } from "@apollo/client";
import { globalStore } from "../../../src/store/store";
import { Provider } from "react-redux";

describe("My Bookings Page", () => {
  let bookingPage;

  beforeEach(() => {
    bookingPage = render(
      <Provider store={globalStore}>
        <ApolloProvider client={client}>
          <BookingPage />
        </ApolloProvider>
      </Provider>
    );
  });

  it("Render booking page layout", () => {
    const heading = screen.getByText("My Booking");
    expect(heading).toBeInTheDocument();
  });
});
