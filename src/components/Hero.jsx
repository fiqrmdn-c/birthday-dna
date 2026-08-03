"use client";

export default function Hero() {
  const scrollToTimeline = () => {
    document
      .getElementById("timeline")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
      "
    >
      {/* Overlay agar tulisan lebih jelas */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Isi Hero */}
      <div className="relative z-10">

        <p className="text-pink-200 tracking-[6px] uppercase text-lg">
          Happy Birthday
        </p>

        <h1
          className="
            mt-4
            text-white
            text-6xl
            md:text-8xl
            font-bold
          "
        >
          Topik
        </h1>

        <p
          className="
            mt-8
            text-white/90
            text-lg
            max-w-xl
            leading-8
          "
        >
          Semoga setiap langkahmu dipenuhi kebahagiaan,
          kesehatan, dan segala hal baik yang selalu
          kamu impikan.
        </p>

      </div>

      {/* Indikator Scroll */}
      <button
        onClick={scrollToTimeline}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          cursor-pointer
          z-20
        "
      >
        <span
          className="
            text-white
            text-sm
            tracking-[4px]
          "
        >
          SCROLL
        </span>

        <div
          className="
            w-7
            h-12
            rounded-full
            border-2
            border-white
            flex
            justify-center
            pt-2
          "
        >
          <div
            className="
              w-1.5
              h-3
              rounded-full
              bg-white
              animate-bounce
            "
          />
        </div>
      </button>
    </section>
  );
}