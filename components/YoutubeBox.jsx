import { usePopup } from "@/app/context/PopupContext";
import React from "react";
import { FaTimes } from "react-icons/fa";

export default function YoutubeBox() {
  const { setCurrentVideo, setShowPlayer, currentVideo } = usePopup();

  const closePlayer = () => {
    setShowPlayer(false);
    setCurrentVideo("");
  };
  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-50">
      <div className="p-4 rounded-xl relative max-w-4xl w-full">
        <button
          onClick={closePlayer}
          className="absolute top-2 right-2 text-white text-xl"
        >
          <FaTimes />
        </button>
        <iframe
          width="100%"
          height="450"
          src={currentVideo}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="h-[300px] xs:h-[500px]"
        ></iframe>
      </div>
    </div>
  );
}
