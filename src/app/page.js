"use client";

import { useState } from "react";

import Opening from "@/components/Opening";
import Music from "@/components/Music";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  const [playMusic, setPlayMusic] = useState(false);

  return (
    <div className="relative min-h-screen">

      {/* =====================================
          BACKGROUND HALAMAN UTAMA
          TETAP DIAM SAAT SCROLL
      ====================================== */}

      <div
        className="
          fixed
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
          pointer-events-none
        "
        style={{
          backgroundImage:
            "url('/images/backgroundletter.png')",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* =====================================
          MUSIC
          Tetap hidup dari Opening sampai Footer
      ====================================== */}

      <Music play={playMusic} />

      {/* =====================================
          OPENING
          Kado → Musik → FlowerWave
      ====================================== */}

      <Opening
        onMusicStart={() => {
          setPlayMusic(true);
        }}
      />

      {/* =====================================
          HALAMAN UTAMA
      ====================================== */}

      <main className="relative z-10 min-h-screen">

        {/* =================================
            HERO
        ================================== */}

        <Hero />

        {/* =================================
            LETTER
        ================================== */}

        <Letter />

        {/* =================================
            GALLERY
        ================================== */}

        <Gallery />

        {/* =================================
            FOOTER
        ================================== */}

        <Footer />

      </main>

    </div>
  );
}