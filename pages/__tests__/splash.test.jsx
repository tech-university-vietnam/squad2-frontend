import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SplashScreen from "../splash";

describe("Home", () => {
  it("Render a logo", () => {
    render(<SplashScreen />);

    const heading = screen.getByRole("img");

    expect(heading).toBeInTheDocument();
  });
});
