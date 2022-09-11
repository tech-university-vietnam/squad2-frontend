import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChipGroup from "../index";

const labels = ["price", "common", "near me"];

describe("Test ChipGroup Component", () => {
  let chipGroup;

  beforeEach(() => {
    chipGroup = render(<ChipGroup labels={labels}/>);
  });

  it("Render labels", () => {
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });
});
