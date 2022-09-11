import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookScreen from "../book";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { globalStore } from "../../../../src/store/store";
import { client } from "../../../../src/services";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
        };
    },
}));

describe("Test Book Screen", () => {
  let bookScreen;

  beforeEach(() => {
    bookScreen = render(
    <Provider store={globalStore}>
        <ApolloProvider client={client}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <BookScreen /> 
          </LocalizationProvider>
      </ApolloProvider>
    </Provider>
    );

  });

  it("Render book layout", () => {
    expect(screen.getByText("Select date")).toBeInTheDocument();
    expect(screen.getByText("Check-in")).toBeInTheDocument();
    expect(screen.getByText("Check-out")).toBeInTheDocument();
    expect(screen.getByText("Rooms")).toBeInTheDocument();
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });
    
});