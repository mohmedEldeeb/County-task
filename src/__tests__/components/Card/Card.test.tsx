import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "@/components/Card/Card";

describe("Card component", () => {
  const testData = {
    name: "Test Item",
    description: "This is a test item",
    price: 19.99,
  };

  it("renders card with correct data", () => {
    render(<Card data={testData} />);

    // Assert that the card renders the correct data
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("This is a test item")).toBeInTheDocument();
    expect(screen.getByText("$19.99")).toBeInTheDocument();
  });
});
