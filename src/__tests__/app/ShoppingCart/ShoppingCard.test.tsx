import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingCart from "@/app/ShoppingCart/page";

beforeEach(() => {
  Storage.prototype.getItem = jest.fn(() => JSON.stringify([]));
  Storage.prototype.setItem = jest.fn();
  Storage.prototype.clear = jest.fn();
});

describe("ShoppingCart component", () => {
  test("renders the shopping cart with items", () => {
    render(<ShoppingCart />);

    expect(screen.getByText("Shopping Cart")).toBeInTheDocument();
  });

  test("displays no items message when cart is empty", () => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify([]));

    render(<ShoppingCart />);

    expect(screen.getByText("No items in cart")).toBeInTheDocument();
    expect(screen.getByText("0 Items")).toBeInTheDocument();
    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });

  test("clears the cart and shows payment successful message", () => {
    window.alert = jest.fn();

    render(<ShoppingCart />);

    fireEvent.click(screen.getByText("Pay Now"));

    expect(window.alert).toHaveBeenCalledWith("Payment Successful");
    expect(localStorage.clear).toHaveBeenCalled();
    expect(screen.getByText("No items in cart")).toBeInTheDocument();
    expect(screen.getByText("0 Items")).toBeInTheDocument();
    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });

  test("navigates back to home", () => {
    render(<ShoppingCart />);

    const goBackButton = screen.getByText("Go Back to Home");
    expect(goBackButton.closest("a")).toHaveAttribute("href", "/");
  });
});
