"use client";

export default function Hero() {
  const scrollToTimeline = () => {
    document.getElementById("timeline")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        relative
        min-h-screen
        w-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        overflow-hidden
      "
    >
      <div className="relative z-10 flex flex-col items-center">

        <p
          className="
            font-serif
            text-xl
            sm:text-2xl
            md:text-3xl
            tracking-[0.25em]
            text-red-400
          "
        >
          Happy
        </p>

        <h1
          className="
            font-title
            mt-2
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
            leading-none
            text-red-400
          "
        >
          Birthday
        </h1>

        <p
          className="
            font-serif
            mt-5
            text-2xl
            sm:text-3xl
            md:text-4xl
            tracking-wide
            text-white
          "
        >
          Topik
        </p>

      </div>

      <button
        type="button"
        onClick={scrollToTimeline}
        className="
          absolute
          bottom-8
          sm:bottom-10
          left-1/2
          -translate-x-1/2
          z-10
          font-text
          text-sm
          sm:text-base
          tracking-[0.2em]
          text-white
          cursor-pointer
        "
      >
        ↓
      </button>
    </section>
  );
}