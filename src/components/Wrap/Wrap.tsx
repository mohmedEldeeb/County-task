"use client";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Search from "../Search/Search";

interface Data {
  name: string;
  description: string;
  price: number;
}

/**
 * Renders a component that wraps a list of data items and provides search and sorting functionality.
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The rendered component.
 * @throws {Error} If the data prop is null or undefined.
 */
const Wrap = () => {
  const [name, setName] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Data[]>();
  const [sortBy, setSortBy] = useState<"name" | "price">("name");
  const [data, setData] = useState<Data[] | null | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch("../../data.json"); // Adjust if needed
      const jsonData: Data[] = await response.json();
      setFilteredData(jsonData);
      setData(jsonData);
      setLoading(false);
    }

    fetchData();
  }, []);

  const sortItems = (sortKey: "name" | "price") => {
    setLoading(true);
    setTimeout(() => {
      // use setTimeout to simulate a network request
      const sorted =
        filteredData &&
        filteredData.sort((a, b) => {
          if (sortKey === "name") {
            return a.name.localeCompare(b.name);
          } else {
            return a.price - b.price;
          }
        });
      setFilteredData(sorted);
      setLoading(false);
    }, 1000);
  };
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const sortKey = e.target.value as "name" | "price";
    setSortBy(sortKey);
    sortItems(sortKey); // this calls the sortItems function
  };

  // filter items by price
  const filterItemsByPrice = (minPrice: number, maxPrice: number) => {
    let filteredData = data?.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    if (minPrice === 0 && maxPrice === 0) {
      // if no price is selected, show all items
      return;
    }
    if (minPrice > maxPrice) {
      // if min price is greater than max price
      const temp = minPrice;
      minPrice = maxPrice;
      maxPrice = temp;
    }
    if (minPrice === 0) {
      // if min price is 0
      const filtered = filteredData?.filter((item) => item.price <= maxPrice);
      setFilteredData(filtered);
      return;
    }
    if (maxPrice === 0) {
      // if max price is 0
      const filtered = filteredData?.filter((item) => item.price >= minPrice);
      setFilteredData(filtered);
      return;
    }
    const filtered =
      filteredData &&
      filteredData.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    setFilteredData(filtered);
  };

  const handleFilterChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setFilteredData(
      data?.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleChangeMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinPrice(Number(e.target.value));
    filterItemsByPrice(Number(e.target.value), maxPrice);
  };

  const handleChangeMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(Number(e.target.value));
    filterItemsByPrice(minPrice, Number(e.target.value));
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="bg-slate-600 fill-indigo-700  text-stone-50 p-[50px]">
        <Search
          name={name}
          sortBy={sortBy}
          handleSortChange={handleSortChange}
          minPrice={minPrice}
          maxPrice={maxPrice}
          handleFilterChangeName={handleFilterChangeName}
          handleChangeMinPrice={handleChangeMinPrice}
          handleChangeMaxPrice={handleChangeMaxPrice}
        />
      </div>
      <div className="p-5550	 text-indigo-950	 bg-pink-400 text-lg flex min-h-screen flex-row flex-wrap items-center justify-between p-24">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map((item: any) => <Card key={item.name} data={item} />)
        ) : (
          <p>No items found</p>
        )}
      </div>
    </div>
  );
};

export default Wrap;
