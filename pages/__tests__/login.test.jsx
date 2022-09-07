import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SplashScreen from "../splash";
import Login from "../login";
import { GOOGLE_APP_ID } from "../../src/config/constants";
import { GoogleOAuthProvider } from "@react-oauth/google";
import userEvent from "@testing-library/user-event";

describe("Login", () => {
  it("Render login button", () => {
    render(
      <GoogleOAuthProvider clientId={GOOGLE_APP_ID}>
        <Login />
      </GoogleOAuthProvider>
    );

    const button = screen.getByText("Continue with Google");
    userEvent.click(button);
    console.log(button);
    expect(button).toBeInTheDocument();
  });
});
