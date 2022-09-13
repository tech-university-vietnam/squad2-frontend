import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChipGroup from "../index";

const labels = ["price", "common", "near me"];
const value = 0;
const setValue = jest.fn();

describe("Test ChipGroup Component", () => {
  let chipGroup;

  beforeEach(() => {
    chipGroup = render(
      <ChipGroup labels={labels} value={value} setValue={setValue} />
    );
  });

  it("Render labels", () => {
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("Change value to undefined", () => {
    fireEvent.click(screen.getByText(labels[value]));
    expect(setValue).toHaveBeenCalled();
  });

  it("Change value", () => {
    fireEvent.click(screen.getByText(labels[1]));
    expect(setValue).toHaveBeenCalled();
  });
});
