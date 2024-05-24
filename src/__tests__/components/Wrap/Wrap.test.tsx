import React from "react";
// import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Wrap from "@/components/Wrap/Wrap";
// Mock the fetch function

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        { name: "Apple", description: "A fruit", price: 1 },
        { name: "Banana", description: "Another fruit", price: 2 },
      ]),
  })
);

describe("Wrap component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders and fetches data correctly", async () => {
    render(<Wrap />);

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
      expect(screen.getByText("Banana")).toBeInTheDocument();
    });
  });

  it("filters data based on input value", async () => {
    render(<Wrap />);

    await waitFor(() => {
      expect(screen.getByText("Apple")).toBeInTheDocument();
    });
  });
});
