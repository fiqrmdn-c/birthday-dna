"use client";

import Opening from "@/components/Opening";
import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

import { useMusic } from "./MusicProvider";

export default function Home() {
  const { startMusic } = useMusic();

  return (
    <div className="relative min-h-screen">

      {/* =====================================
          BACKGROUND HALAMAN UTAMA
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
          OPENING
      ====================================== */}

      <Opening
        onMusicStart={startMusic}
      />

      {/* =====================================
          HALAMAN UTAMA
      ====================================== */}

      <main className="relative z-10 min-h-screen">

        {/* HERO */}

        <Hero />

        {/* LETTER */}

        <Letter />

        {/* GALLERY */}

        <Gallery />

        {/* FOOTER */}

        <Footer />

      </main>

    </div>
  );
}