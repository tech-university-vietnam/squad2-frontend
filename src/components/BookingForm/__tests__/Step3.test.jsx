import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Step3 from "../Step3";

const props = {
  formState: { errors: {} },
  watch: jest.fn(),
  register: jest.fn(),
}

describe("Booking Step 3", () => {
  let step3;

  beforeEach(() => {
    step3 = render(<Step3 {...props} />);
  });

  it("Render payment by cash", () => {
    expect(screen.getByText(/Pay by Cash when arrive/i)).toBeInTheDocument();
  });

});
