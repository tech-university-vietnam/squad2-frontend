import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import WelcomeScreen from "../welcome.page";

describe("Test Welcome Screen", () => {
  it("Render welcome screen", () => {
    render(<WelcomeScreen />);
    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
  });
});
