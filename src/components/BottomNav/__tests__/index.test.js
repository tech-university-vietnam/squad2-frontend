import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BottomNav from "../index";
import routes from "../../../config/routes";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: routes.home,
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("Test BottomNav Component", () => {
  let bottomNav;

  beforeEach(() => {
    bottomNav = render(<BottomNav />);
  });

  it("Render labels", () => {
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/booking/i)).toBeInTheDocument();
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });
});
