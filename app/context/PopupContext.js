"use client"; // important in Next.js 13+ for contexts

import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [PopId, setPopId] = useState(null);
  const [popItem, setPopItem] = useState(null)
  const [isDark,setIsDark]=useState(false)

  return (
    <PopupContext.Provider value={{ showPopup, setShowPopup,PopId,setPopId,popItem,setPopItem,isDark,setIsDark }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
