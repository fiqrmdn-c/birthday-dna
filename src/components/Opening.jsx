"use client";

import { useState } from "react";

import GiftBox from "./GiftBox";
import Music from "./Music";
import FlowerTransition from "./FlowerTransition";
import Letter from "./Letter";

export default function Opening() {
  const [opened, setOpened] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [showFlower, setShowFlower] = useState(false);
  const [backgroundLetter, setBackgroundLetter] = useState(false);

  const handleOpenGift = () => {
    setPlayMusic(true);
    setShowFlower(true);
  };

  const handleFlowerComplete = () => {
    console.log("FLOWER FINISHED");

    setShowFlower(false);
    setOpened(true);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">

      {/* ================= BACKGROUND OPENING ================= */}

      <div
        className={`
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          transition-all
          duration-1000
          ease-in-out
          ${backgroundLetter ? "opacity-0 scale-105" : "opacity-100 scale-100"}
        `}
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      />

      {/* ================= BACKGROUND LETTER ================= */}

      <div
        className={`
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          transition-all
          duration-1000
          ease-in-out
          ${backgroundLetter ? "opacity-100 scale-100" : "opacity-0 scale-105"}
        `}
        style={{
          backgroundImage: "url('/images/backgroundletter.png')",
        }}
      />

      {/* ================= SELURUH ISI WEBSITE ================= */}

      <div className="relative z-20">

        <Music play={playMusic} />

        <FlowerTransition
          show={showFlower}
          onBackgroundChange={() => {
            console.log("CHANGE BACKGROUND");
            setBackgroundLetter(true);
          }}
          onComplete={handleFlowerComplete}
        />

        {!opened && (
          <GiftBox onOpen={handleOpenGift} />
        )}

        {opened && (
          <div className="relative z-30 h-screen overflow-y-auto">
            <Letter />
          </div>
        )}

      </div>

    </div>
  );
}