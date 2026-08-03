"use client";

import Hero from "./Hero";
import Timeline from "./Timeline";
import Gallery from "./Gallery";
import Footer from "./Footer";

export default function Letter() {
  return (
    <main
      className="
        min-h-screen
        w-full
        bg-cover
        bg-center
        bg-fixed
      "
      style={{
        backgroundImage: "url('/images/backgroundletter.png')",
      }}
    >
      <Hero />

      <Timeline />

      <Gallery />

      <Footer />
    </main>
  );
}