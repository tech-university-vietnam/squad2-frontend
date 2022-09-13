import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "../login.page";
import { GOOGLE_APP_ID } from "../../src/config/constants";
import { GoogleOAuthProvider } from "@react-oauth/google";
import userEvent from "@testing-library/user-event";

describe("Test Login", () => {
  let loginButton;

  beforeEach(() => {
    loginButton = render(
      <GoogleOAuthProvider clientId={GOOGLE_APP_ID}>
        <Login />
      </GoogleOAuthProvider>
    );
  });

  it("Render login button", () => {
    const button = screen.getByText("Continue with Google");
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });
});
