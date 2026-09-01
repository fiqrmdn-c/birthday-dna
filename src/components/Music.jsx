"use client";

import { useEffect, useRef } from "react";

export default function Music({ play, audioRef: externalAudioRef }) {
  const internalAudioRef = useRef(null);

  // Gunakan ref dari MusicProvider jika tersedia.
  // Kalau tidak tersedia, gunakan ref internal.
  const audioRef = externalAudioRef || internalAudioRef;

  useEffect(() => {
    if (!play || !audioRef.current) return;

    audioRef.current
      .play()
      .catch((error) => {
        console.log("Music play gagal:", error);
      });
  }, [play, audioRef]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      <source
        src="/music/lagu.mp3"
        type="audio/mpeg"
      />
    </audio>
  );
}