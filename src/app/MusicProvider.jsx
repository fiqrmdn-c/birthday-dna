"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";

import Music from "@/components/Music";

const MusicContext = createContext(null);

export function MusicProvider({ children }) {
  const [playMusic, setPlayMusic] = useState(false);

  const audioRef = useRef(null);

  // =========================================
  // MULAI MUSIK
  // Dipanggil ketika kado di Opening diklik
  // =========================================

  const startMusic = () => {
    setPlayMusic(true);
  };

  // =========================================
  // STOP MUSIK
  // Dipanggil ketika tombol KEMBALI diklik
  // =========================================

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    setPlayMusic(false);
  };

  return (
    <MusicContext.Provider
      value={{
        startMusic,
        stopMusic,
      }}
    >
      <Music
        play={playMusic}
        audioRef={audioRef}
      />

      {children}
    </MusicContext.Provider>
  );
}

// =========================================
// HOOK MUSIC
// =========================================

export function useMusic() {
  return useContext(MusicContext);
}