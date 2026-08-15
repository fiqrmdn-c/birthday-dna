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
      {/* =========================
          BUNGA SUDUT KIRI ATAS
      ========================== */}
      <img
        src="/images/hero-flower1.png"
        alt=""
        className="
          absolute
          top-0
          left-0
          w-28
          sm:w-40
          md:w-52
          lg:w-60
          h-auto
          pointer-events-none
          select-none
          z-0
        "
      />

      {/* =========================
          BUNGA SUDUT KANAN ATAS
      ========================== */}
      <img
        src="/images/hero-flower2.png"
        alt=""
        className="
          absolute
          top-0
          right-0
          w-28
          sm:w-40
          md:w-52
          lg:w-60
          h-auto
          scale-x-[-1]
          pointer-events-none
          select-none
          z-0
        "
      />

      {/* =========================
          LINGKARAN BUNGA
      ========================== */}
      <div
        className="
          relative
          z-10
          w-[540px]
          h-[540px]
          sm:w-[720px]
          sm:h-[720px]
          md:w-[720px]
          md:h-[720px]
          lg:w-[720px]
          lg:h-[720px]
          flex
          items-center
          justify-center
        "
      >
        {/* Gambar bunga berbentuk lingkaran */}
        <img
          src="/images/flower-circle.png"
          alt=""
          className="
            absolute
            inset-0
            w-full
            h-full
            object-contain
            pointer-events-none
            select-none
          "
        />

        {/* =========================
            TULISAN DI TENGAH
        ========================== */}
        <div
          className="
            relative
            z-10
            flex
            flex-col
            items-center
            justify-center
          "
        >
          <p
            className="
              font-serif
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl
              tracking-[0.25em]
              text-white
            "
          >
            Happy
          </p>

          <h1
            className="
              font-title
              mt-2
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              leading-none
              text-white
            "
          >
            Birthday
          </h1>

          <p
            className="
              font-serif
              mt-4
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              tracking-wide
              text-white
            "
          >
            Topik
          </p>
        </div>
      </div>

      {/* =========================
          TOMBOL SCROLL
      ========================== */}
      <button
        type="button"
        onClick={scrollToTimeline}
        className="
          absolute
          bottom-8
          sm:bottom-10
          left-1/2
          -translate-x-1/2
          z-20
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