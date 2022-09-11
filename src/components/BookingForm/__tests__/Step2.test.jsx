import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Step2 from "../Step2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const props = {
  formState: { errors: {} },
  watch: jest.fn(),
  register: jest.fn(),
}

describe("Booking Step 2", () => {
  let step2;

  beforeEach(() => {
    step2 = render(<LocalizationProvider dateAdapter={AdapterDayjs}>
      <Step2 {...props} />
    </LocalizationProvider>);
  });

  it("Render titles", () => {
    ["Mr.", "Mrs.", "Ms."].forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    })
  });

});
