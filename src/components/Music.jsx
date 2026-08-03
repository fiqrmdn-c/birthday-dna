"use client";

import { useEffect, useRef } from "react";

export default function Music({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play();
    }
  }, [play]);

  return (
    <audio ref={audioRef} loop>
      <source src="/music/lagu.mp3" type="audio/mpeg" />
    </audio>
  );
}
