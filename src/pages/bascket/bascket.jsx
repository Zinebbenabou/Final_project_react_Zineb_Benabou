import React from "react";
import { MyAppContext } from "../../context";
import { CiTrash } from "react-icons/ci";
import { Images } from "../../constant";
import { FaMinus, FaPlus } from "react-icons/fa";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const Cart = () => {
  const { cart, addToCart, removeFromCart } = MyAppContext();

  if (cart.length === 0) {
    return <div>Your cart is empty</div>;
  }

  const handleQuantityChange = (id, delta) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
      if (delta === -1 && item.quantity === 1) {
        removeFromCart(id);
      } else {
        addToCart({ ...item, quantity: item.quantity + delta });
      }
    }
  };

  const getTotalPrice = (item) => formatCurrency(item.price * item.quantity);

  return (
    <div className="p-4 relative">
      {cart.map((cartItem) => (
        <div
          key={cartItem.id}
          className="flex items-center gap-4 mb-4 border-b pb-4"
        >
          <img
            src={Images[cartItem.images]}
            alt={cartItem.name}
            className="w-[125px] h-[75px] object-cover"
          />
          <div className="flex-1">
            <div className="text-lg font-medium">{cartItem.name}</div>
            <div className="text-gray-500 text-sm">
              {formatCurrency(cartItem.price)}
            </div>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="flex items-center rounded-full gap-4">
              <button
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-500 transition duration-300"
                onClick={() => handleQuantityChange(cartItem.id, -1)}
              >
                <FaMinus />
              </button>
              <span className="text-lg">{cartItem.quantity}</span>
              <button
                className="bg-gray-300 p-2 rounded-full hover:bg-gray-500 transition duration-300"
                onClick={() => handleQuantityChange(cartItem.id, 1)}
              >
                <FaPlus />
              </button>
            </div>
            <div className="text-lg">{getTotalPrice(cartItem)}</div>
            <button
              className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition duration-300"
              onClick={() => removeFromCart(cartItem.id)}
            >
              <CiTrash />
            </button>
          </div>
        </div>
      ))}
      <div className="text-lg font-bold mt-4 flex justify-between items-center">
        <h1>Total Price:{" "}{formatCurrency(cart.reduce((total, item) => total + item.price * item.quantity, 0))}</h1>
        <button
          className="bg-neutral-900 text-white px-6 py-2 rounded-full hover:bg-red-500 transition duration-300"
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
