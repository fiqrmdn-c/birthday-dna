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

  // Saat kado dibuka
  const handleOpenGift = () => {
    setPlayMusic(true);
    setShowFlower(true);
  };

  // Dipanggil setelah FlowerTransition selesai
const handleFlowerComplete = () => {

  console.log("FLOWER FINISHED");

  setShowFlower(false);
  setOpened(true);

};

  return (
    <>
      <Music play={playMusic} />

      <FlowerTransition
        show={showFlower}
        onComplete={handleFlowerComplete}
      />

      {!opened && (
        <GiftBox
          onOpen={handleOpenGift}
        />
      )}

      {opened && (
        <Letter />
      )}
    </>
  );
}