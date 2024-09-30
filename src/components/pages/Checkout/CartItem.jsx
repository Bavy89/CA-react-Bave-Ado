import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../../store/modules/cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  function displayPrice(item) {
    return item.discountedPrice && item.discountedPrice < item.price ? (
      <>
        <span className="text-red-600 font-bold">${item.discountedPrice}</span>
        <span className="text-gray-500 line-through ml-2">${item.price}</span>
      </>
    ) : (
      <span className="text-gray-800 font-bold">${item.price}</span>
    );
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <img
        className="w-24 h-24 object-cover rounded-lg shadow-md"
        src={item.imageUrl}
        alt={item.title}
      />
      <div className="flex flex-col flex-1 ml-6">
        <span className="text-xl font-semibold text-gray-800">{item.title}</span>
        <div className="mt-2">{displayPrice(item)}</div>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => dispatch(removeItemFromCart(item.id))}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
