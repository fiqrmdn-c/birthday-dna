"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import GiftBox from "./GiftBox";
import FlowerTransition from "./FlowerTransition";

export default function Opening({ onMusicStart }) {
  const [showFlower, setShowFlower] = useState(false);
  const [changeBackground, setChangeBackground] = useState(false);
  const [closing, setClosing] = useState(false);
  const [finished, setFinished] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);

  // =========================================
  // KONTROL SCROLL
  // =========================================

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [scrollLocked]);

  // =========================================
  // KADO DIBUKA
  // =========================================

  const handleOpenGift = () => {
    onMusicStart?.();

    setShowFlower(true);

    // Background mulai berubah ketika
    // FlowerWave sudah berjalan beberapa saat
    setTimeout(() => {
      setChangeBackground(true);
    }, 5000);
  };

  // =========================================
  // FLOWER SELESAI
  // =========================================

  const handleFlowerComplete = () => {
    console.log("FLOWER FINISHED");

    // Hilangkan FlowerTransition
    setShowFlower(false);

    // Buka scroll halaman utama
    setScrollLocked(false);

    // Mulai fade out Opening
    setClosing(true);

    // Setelah fade selesai,
    // hapus Opening dari layar
    setTimeout(() => {
      setFinished(true);
    }, 700);
  };

  // =========================================
  // OPENING SELESAI
  // =========================================

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
        ${
          closing
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }
      `}
    >

      {/* =========================================
          BACKGROUND OPENING
      ========================================= */}

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
          ${
            changeBackground
              ? "opacity-0"
              : "opacity-100"
          }
        `}
        style={{
          backgroundImage:
            "url('/images/background.jpg')",
        }}
      />

      {/* =========================================
          ISI OPENING
      ========================================= */}

      <div className="relative z-20 w-full h-full">

        {/* =========================================
            FLOWER WAVE / FLOWER TRANSITION
        ========================================= */}

        <AnimatePresence>
          {showFlower && (
            <FlowerTransition
              show={showFlower}
              onBackgroundChange={() => {
                console.log("FLOWER BACKGROUND POINT");
              }}
              onComplete={handleFlowerComplete}
            />
          )}
        </AnimatePresence>

        {/* =========================================
            GIFT BOX
        ========================================= */}

        {!showFlower && !closing && (
          <GiftBox
            onOpen={handleOpenGift}
          />
        )}

      </div>
    </div>
  );
}