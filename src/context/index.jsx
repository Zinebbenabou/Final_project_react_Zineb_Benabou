import { createContext, useContext, useState } from "react";

export const Mycontext = createContext();

export const MyProvider = ({ children }) => {
  const [dataProfile, setDataProfile] = useState([]);

  const [userData, setUserData] = useState(null);

  const all = {
    setDataProfile,
    dataProfile,
    userData,
    setUserData,
  };

  return <Mycontext.Provider value={all}>{children}</Mycontext.Provider>;
};

export const MyAppContext = () => useContext(Mycontext);
