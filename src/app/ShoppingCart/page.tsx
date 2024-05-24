"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Data {
  name: string;
  description: string;
  price: number;
}

/**
 * Renders a shopping cart page that displays the items in the user's cart and allows the user to remove items or pay for them.
 *
 * @return {JSX.Element} The shopping cart page as a React component.
 */

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // Calculate total cost
  const totalCost = items?.reduce(
    (acc: number, item: any) => acc + item.price,
    0
  );

  const handleRemove = (name: string) => {
    const newItems = items.filter((item: any) => item.name != name);
    setItems(newItems);
    window?.localStorage?.setItem("cart", JSON.stringify(newItems));
  };
  useEffect(() => {
    if (loading) {
      setLoading(false);
      const initialData = JSON.parse(localStorage.getItem("cart") || "[]");
      setItems(initialData);
    }
  }, []);
  return (
    <div className="container mx-auto mt-10">
      <div>
        <Link href="/">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go Back to Home
          </button>
        </Link>
        {/* </div> */}
      </div>
      <div className="flex flex-col shadow-md my-10">
        <div className="w-full bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{items.length} Items</h2>
          </div>
          <div className="mt-10 mb-5">
            <div className="flex justify-between border-b pb-8">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>

            {loading && (
              <div className="text-center text-red-500 m-10">loading...</div>
            )}
            {!items || (items.length <= 0 && !loading) ? (
              <div className="flex justify-between border-b pb-8">
                <h1 className="text-center text-red-500 m-10">
                  No items in cart
                </h1>
              </div>
            ) : null}
            {!items || items.length <= 0
              ? null
              : items.map((item: any) => (
                  <div
                    key={item.name}
                    className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  >
                    <div className="flex w-2/5">
                      <div className="w-20 h-24 text-black">{item?.name}</div>
                      <div className="flex flex-col justify-between ml-4 flex-grow">
                        <span className="font-bold text-sm">{item.name}</span>
                        <button
                          onClick={() => handleRemove(item.name)}
                          className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-center w-1/5">
                      <span className="text-center w-1/5 font-semibold text-sm">
                        {item.quantity}
                      </span>
                    </div>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${item.price}
                    </span>
                    <span className="text-center w-1/5 font-semibold text-sm">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                ))}
          </div>
          <div className="flex justify-between items-center mt-6 pt-6 border-t">
            <div className="flex lg:w-2/3 w-full sm:flex-row flex-col justify-between items-end">
              <div className="flex justify-center md:justify-start w-full">
                <span className="text-2xl font-bold text-gray-800">
                  ${totalCost.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 w-[100%] mb-20 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          alert("Payment Successful");
          localStorage.clear();
          setItems([]);
        }}
      >
        Pay Now
      </button>
    </div>
  );
};

export default ShoppingCart;
