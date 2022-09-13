import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileScreen from "../index.page";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { globalStore } from "../../../src/store/store";
import { client } from "../../../src/services";
import { AppLayoutContext} from "../../../src/provider/AppLayout";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
            events: {
              on: jest.fn(),
              off: jest.fn(),
            }
        };
    },
}));

describe("Test Edit Profile", () => {
  let accountScreen;

  beforeEach(() => {
    accountScreen = render(
    <Provider store={globalStore}>
        <ApolloProvider client={client}>
          <AppLayoutContext.Provider value={{ isLoggedIn: true, logout: () => {} }}>
            <ProfileScreen />
          </AppLayoutContext.Provider>
      </ApolloProvider>
    </Provider>
    );
  });

  it("Render edit profile layout", () => {
    expect(screen.getByText("Edit Profile")).toBeInTheDocument();
  });
    
  it("Logout", () => {
    expect(screen.getByText("Logout")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Logout"));
  });
});