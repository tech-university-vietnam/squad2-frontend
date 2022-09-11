import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Step1 from "../Step1";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const props = {
  formState: { errors: {} },
  watch: jest.fn(),
  register: jest.fn(),
}

describe("Booking Step 1", () => {
  let step1;

  beforeEach(() => {
    step1 = render(<LocalizationProvider dateAdapter={AdapterDayjs}>
      <Step1 {...props} />
    </LocalizationProvider>);
  });

  it("Render check-in", () => {
    expect(screen.getByText(/check-in/i)).toBeInTheDocument();
  });

  it("Render check-out", () => {
    expect(screen.getByText(/check-out/i)).toBeInTheDocument();
  });

  it("Render rooms", () => {
    expect(screen.getByText(/rooms/i)).toBeInTheDocument();
  });

  it("Render total", () => {
    expect(screen.getByText(/total/i)).toBeInTheDocument();
  });

  it("Render continue", () => {
    expect(screen.getByText(/continue/i)).toBeInTheDocument();
  });

});
