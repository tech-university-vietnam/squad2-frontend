import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBar from "../index";

describe("Search Bar", () => {
  let searchBar;

  beforeEach(() => {
    searchBar = render(<SearchBar />);
  });

  it("Should display placeholder", () => {
    expect(screen.getByPlaceholderText("Search by Name, Address,...")).toBeInTheDocument();
  });
});
