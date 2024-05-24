import React from "react";
interface Data {
  name: string;
  description: string;
  price: number;
}

/**
 * Renders a card component with the given data. Allows the user to add the card to their cart.
 *
 * @param {Object} props - The component props.
 * @param {Data} props.data - The data to be displayed in the card.
 * @return {JSX.Element} The rendered card component.
 */

const Card = ({ data }: { data: Data }) => {
  // this smple function for adding to cart
  const addToCart = (item: Data) => {
    let cardData: Data[] = JSON.parse(localStorage.getItem("cart") || "[]");

    // check if item is already in cart
    let itemExists = cardData.find((data) => data.name == item.name);
    if (itemExists) {
      alert("Item already in cart");
      return;
    } else {
      cardData.push(item);
      alert("Item added to cart");
    }
    localStorage.setItem("cart", JSON.stringify(cardData));
  };
  return (
    <div className="w-[300px] h-[150px] p-[10px] m-1 mb-8 bg-pink-100 cursor-pointer">
      <h3>{data.name}</h3>
      <p>{data.description}</p>
      <p className="font-bold m-2 ">${data.price}</p>
      {/* add button for adding to cart */}
      <button
        onClick={addToCart.bind(null, data)}
        className="bg-blue-500  hover:bg-pink-400 text-white font-bold py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
