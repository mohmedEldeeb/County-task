import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  sortBy: string;
  handleSortChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  minPrice: number;
  maxPrice: number;
  handleFilterChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/**
 * Renders a search component with an input field for name and a select field for sorting.
 *
 * @param {Props} props - The component props.
 * @param {string} props.name - The current value of the name input field.
 * @param {string} props.sortBy - The current value of the sort by select field.
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} props.handleSortChange - The function to handle sort by select field change.
 * @param {number} props.minPrice - The current value of the min price input field.
 * @param {number} props.maxPrice - The current value of the max price input field.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.handleFilterChangeName - The function to handle name input field change.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.handleChangeMinPrice - The function to handle min price input field change.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.handleChangeMaxPrice - The function to handle max price input field change.
 * @return {JSX.Element} The rendered search component.
 *
 */
const Search: React.FC<Props> = ({
  name,
  sortBy,
  handleSortChange,
  minPrice,
  maxPrice,
  handleFilterChangeName,
  handleChangeMinPrice,
  handleChangeMaxPrice,
}) => {
  return (
    <div className=" ">
      <Link href="/ShoppingCart">
        <button className=" mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Cart
        </button>
      </Link>

      <form className="flex flex-row">
        <div className="w-[50%]">
          <label className="block">name</label>
          <input
            value={name}
            onChange={handleFilterChangeName}
            type="text"
            className="w-[95%] border border-gray-400 p-2 text-black"
          />
        </div>
        <div className="w-[50%] ">
          <label className="block" htmlFor="sort">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="w-[95%] border border-gray-400 p-2 text-black"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
      </form>
      <div className="w-[200px] ">
        <div className="p-4">
          <div className="mb-4">
            <label
              htmlFor="input1"
              className="block text-sm font-medium text-white-700 text-large "
            >
              price from:
            </label>
            <input
              id="input1"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-pink-400"
              value={minPrice}
              onChange={(e) => {
                // check if input is a number
                if (isNaN(Number(e.target.value))) {
                  return;
                } else {
                  handleChangeMinPrice(e);
                }
              }}
            />
          </div>
          <div>
            <label
              htmlFor="input2"
              className="block text-sm font-medium text-white-700 text-large"
            >
              price to:
            </label>
            <input
              id="input2"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-pink-400"
              value={maxPrice}
              onChange={(e) => {
                // check if input is a number
                if (isNaN(Number(e.target.value))) {
                  return;
                } else {
                  handleChangeMaxPrice(e);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
