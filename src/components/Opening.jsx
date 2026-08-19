"use client";

import { useState } from "react";

import GiftBox from "./GiftBox";
import FlowerTransition from "./FlowerTransition";

export default function Opening({ onMusicStart }) {
  const [showFlower, setShowFlower] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const [closing, setClosing] = useState(false);
  const [finished, setFinished] = useState(false);

  // =========================
  // KADO DIBUKA
  // =========================

  const handleOpenGift = () => {
    // Mulai musik
    onMusicStart?.();

    // Mulai FlowerWave
    setShowFlower(true);

    // Background halaman berikutnya
    // mulai muncul saat FlowerWave berlangsung
    setTimeout(() => {
      setChangeBackground(true);
    }, 5000);
  };

  // =========================
  // FLOWER SELESAI
  // =========================

  const handleFlowerComplete = () => {
    console.log("FLOWER FINISHED");

    // Hilangkan flower
    setShowFlower(false);

    // Mulai fade out Opening
    setClosing(true);

    // Tunggu fade selesai
    setTimeout(() => {
      setFinished(true);
    }, 500);
  };

  // =========================
  // OPENING SELESAI
  // =========================

  if (finished) {
    return null;
  }

  return (
    <div
      className={`
        fixed
        inset-0
        z-[100]
        w-full
        h-screen
        overflow-hidden
        transition-opacity
        duration-[700ms]
        ease-in-out
        ${closing ? "opacity-0" : "opacity-100"}
      `}
    >

      {/* =================================
          BACKGROUND OPENING
      ================================= */}

      <div
        className={`
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          transition-opacity
          duration-[1800ms]
          ease-in-out
          ${changeBackground ? "opacity-0" : "opacity-100"}
        `}
        style={{
          backgroundImage:
            "url('/images/background.jpg')",
        }}
      />

      {/* =================================
          ISI OPENING
      ================================= */}

      <div className="relative z-20 w-full h-full">

        {/* =================================
            FLOWER TRANSITION
        ================================= */}

        <FlowerTransition
          show={showFlower}
          onBackgroundChange={() => {
            console.log("FLOWER BACKGROUND POINT");
          }}
          onComplete={handleFlowerComplete}
        />

        {/* =================================
            GIFT BOX
        ================================= */}

        {!showFlower && !closing && (
          <GiftBox
            onOpen={handleOpenGift}
          />
        )}

      </div>
    </div>
  );
}