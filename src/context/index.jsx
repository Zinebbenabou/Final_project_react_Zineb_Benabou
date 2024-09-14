import { createContext, useContext, useState } from "react";

export const Mycontext = createContext();

export const MyProvider = ({ children }) => {
  const [dataProfile, setDataProfile] = useState([]); 
  const [userData, setUserData] = useState(null);     

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);

    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(cartItem => cartItem.id !== id));
  };

  const all = {
    setDataProfile,
    dataProfile,
    userData,
    setUserData,

    cart,
    addToCart,
    removeFromCart,
  };

  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};

export const MyAppContext = () => useContext(Mycontext);
