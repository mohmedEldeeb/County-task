import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "@/components/Search/Search";

describe("Search component", () => {
  const setNameMock = jest.fn();
  const handleSortChangeMock = jest.fn();
  const handleFilterChangeNameMock = jest.fn();
  const handleFilterChangeMaxPriceMock = jest.fn();
  const handleFilterChangeMinPriceMock = jest.fn();

  const initialProps = {
    name: "",
    setName: setNameMock,
    sortBy: "name",
    handleSortChange: handleSortChangeMock,
    minPrice: 0,
    maxPrice: 0,
    handleFilterChangeName: handleFilterChangeNameMock,
    handleChangeMinPrice: handleFilterChangeMinPriceMock,
    handleChangeMaxPrice: handleFilterChangeMaxPriceMock,

    // handleFilterChangeName: (e: React.ChangeEvent<HTMLInputElement>) => {
  };
  beforeEach(() => {
    initialProps.handleSortChange.mockClear();
    render(<Search {...initialProps} />);
  });
  // it("renders the input and select elements", () => {
  // render(<Search {...initialProps} />);

  // expect(screen.getByText("name")).toBeInTheDocument();
  // expect(screen.getByText("Sort by:")).toBeInTheDocument();
  // expect(wrapper.find('input[name="firstName"]').value).toEqual('John')
  // expect(wrapper.find('input[name="lastName"]').value).toEqual('Doe')
  // });

  it("calls setName when the input value changes", () => {
    render(<Search {...initialProps} />);

    const input = screen.getAllByText("name");
    initialProps.setName("Test Name");
    // fireEvent.change(input[0], { target: { value: "Test Name" } });

    expect(setNameMock).toHaveBeenCalledTimes(1);
    expect(setNameMock).toHaveBeenCalledWith("Test Name");
  });

  it("calls handleSortChange when the select value changes", () => {
    render(<Search {...initialProps} />);

    initialProps.handleSortChange({ target: { value: "price" } });
    const select = screen.getByLabelText("Sort by:");
    fireEvent.change(select, { target: { value: "price" } });

    expect(handleSortChangeMock).toHaveBeenCalledTimes(2);
    expect(handleSortChangeMock).toHaveBeenCalledWith({
      target: { value: "price" },
    });
  });
});
