"use client"; // important in Next.js 13+ for contexts
import YoutubeBox from "@/components/YoutubeBox";
import { createContext, useContext, useEffect, useState } from "react";

const PopupContext = createContext();

export const PopupProvider = ({ children,movieSliderData }) => {
   const [token, setToken] = useState(null)
  // const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [showPopup, setShowPopup] = useState(false);
  const [PopId, setPopId] = useState(null);
  const [popItem, setPopItem] = useState(null)
  const [isDark,setIsDark]=useState(false)
  const [showPlayer, setShowPlayer] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const [favorites,setFavorites]=useState([])
  const [movieSlider, setMovieSlider] = useState(movieSliderData || [])
  

   useEffect(() => {
    const t = localStorage.getItem("token");
    setToken(t);
  }, []);
  const handleWatchNow = (url) => {
    let embedUrl = url;
    if (url.includes("watch?v=")) {
      embedUrl = url.replace("watch?v=", "embed/");
    }
    embedUrl += "?autoplay=1";
    setCurrentVideo(embedUrl);
    setShowPlayer(true);
  };
 

   useEffect(() => {
    const fetchFavorites = async () => {
      try {
         if (!token) return;
        const res = await fetch("/api/favorites",{
          headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${token}`, // token from login
          },
        }); // your server endpoint
        if (res.ok) {
          const data = await res.json();
          
          setFavorites(data.favorites); // initialize favorites
        }
      } catch (error) {
        console.error("Error fetching favorites:", error);
      }
    };
    fetchFavorites();
  }, [token])

   const login = (t) => {
    localStorage.setItem("token", t);
    setToken(t);
  };

  const logout = () => {
  // Remove token from localStorage
  localStorage.removeItem("token");

  // Clear user-related state
  setToken(null);
  setFavorites([]);

  // Optionally, call a logout API (can be just a placeholder)
  fetch("/api/logout", { method: "POST" });

  // Redirect to login page
  window.location.href = "/pages/login";
};

 
  return (
    <PopupContext.Provider value={{ showPopup, setShowPopup,PopId,setPopId,popItem,setPopItem,isDark,setIsDark,showPlayer,setCurrentVideo,setShowPlayer,currentVideo,handleWatchNow,favorites,setFavorites,movieSlider,token,logout }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
