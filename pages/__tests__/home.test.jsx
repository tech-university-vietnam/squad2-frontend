import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import HomeScreen from "../home";
import { AppLayoutContext} from "../../src/provider/AppLayout";

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

describe("Test Profile", () => {
  let homeScreen;

  beforeEach(() => {
    homeScreen = render(<MockedProvider mocks={[]}>
      <AppLayoutContext.Provider value={{ isLoggedIn: true, logout: () => { } }}>
        <HomeScreen />
      </AppLayoutContext.Provider>
    </MockedProvider>
    );
  });

  it("Render brand", () => {
    expect(screen.getByText(/Helia/i)).toBeInTheDocument();
  });

  it("Render greeting", () => {
    expect(screen.getByText(/Hello/i)).toBeInTheDocument();
  });
});