"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import VideoComponent from "./VideoComponent";

function TrailerButtons({ videoLink }: { videoLink: string }) {
  const [isPopUpOpen, setPopUpOpen] = useState(false);

  function openPopUp() {
    setPopUpOpen(true);
  }

  function closePopUp() {
    setPopUpOpen(false);
  }

  return (
    <div>
      <div className="flex space-x-4">
        <Button>Play</Button>
        <Button onClick={openPopUp}>Play Trailer</Button>
      </div>
      {isPopUpOpen && (
        <VideoComponent videoLink={videoLink} onClose={closePopUp} />
      )}
    </div>
  );
}

export default TrailerButtons;
