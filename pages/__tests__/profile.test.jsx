import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import ProfileScreen from "../profile.page";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/profile",
            pathname: "/profile",
            query: {
              family_name: 'Smith',
              given_name: 'David',
              picture: "",
              email: "",
              access_token: "",
              sub: "",
            },
            asPath: "/profile",
        };
    },
}));

describe("Test Profile", () => {
  let profileScreen;

  beforeEach(() => {
    profileScreen = render(<MockedProvider mocks={[]}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ProfileScreen />
      </LocalizationProvider>
    </MockedProvider>
    );
  });

  it("Render email field", () => {
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("Render gender field", () => {
    expect(screen.getByLabelText(/gender/i)).toBeInTheDocument();
  });

  it("Render dob field", () => {
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  });

  it("Render phone field", () => {
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
  });

  it("Render continue button", () => {
    expect(screen.getByText("Continue")).toBeInTheDocument();
  });

  it("Change phone number", () => {
    const phoneInput = screen.getByLabelText(/country/i);
    const value = '+8412345678';
    fireEvent.change(phoneInput, { target: { value } });
    expect(phoneInput.value).toBe(value);
  });
    
});