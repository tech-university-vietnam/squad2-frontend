import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MockedProvider } from "@apollo/client/testing";
import ProfileScreen from "../edit.page";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

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

describe("Test Edit Profile", () => {
  let editProfileScreen;

  beforeEach(() => {
    editProfileScreen = render(<MockedProvider mocks={[]}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <ProfileScreen />
      </LocalizationProvider>
    </MockedProvider>
    );
  });

  it("Render edit profile layout", () => {
    expect(screen.getByText(/Edit profile/i)).toBeInTheDocument();
  });
    
});