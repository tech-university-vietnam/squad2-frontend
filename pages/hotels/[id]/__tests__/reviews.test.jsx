import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReviewScreen from "../reviews";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { globalStore } from "../../../../src/store/store";
import { client } from "../../../../src/services";

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

describe("Test Reviews Screen", () => {
  let reviewScreen;

  beforeEach(() => {
    reviewScreen = render(
    <Provider store={globalStore}>
        <ApolloProvider client={client}>
          <ReviewScreen />
      </ApolloProvider>
    </Provider>
    );
  });

  it("Render review layout", () => {
    expect(screen.getByText("Reviews")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
  });
    
});