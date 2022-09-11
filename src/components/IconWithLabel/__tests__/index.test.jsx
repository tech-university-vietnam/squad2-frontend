import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconWithLabel from "../index";

const label="Icon With Label"

describe("Icon With Label", () => {
  let iconWithLabel;

  beforeEach(() => {
    iconWithLabel = render(<IconWithLabel label={label} />);
  });

  it("Render label", () => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

});
