"use client";

const photos = [
  "/images/foto1.png",
  "/images/foto2.png",
  "/images/foto3.png",
  "/images/foto4.png",
  "/images/foto5.png",
];

export default function Gallery() {
  return (
    <section
      className="
        relative
        w-full
        h-[900px]
        sm:h-[1000px]
        md:h-[1200px]
        lg:h-[1400px]
        px-0
        py-10
        sm:py-16
      "
    >

      {/* =========================================
          FOTO 1
      ========================================= */}

      <div
        className="
          absolute
          z-20

          /* HP */
          left-[0%]
          top-[12.5%]
          w-[75%]

          /* SM */
          sm:left-[0%]
          sm:top-[11%]
          sm:w-[80%]

          /* MD */
          md:left-[0%]
          md:top-[10%]
          md:w-[90%]

          /* LG */
          lg:left-[0%]
          lg:top-[9%]
          lg:w-[90%]

          rotate-[-11deg]
        "
      >
        <img
          src={photos[0]}
          alt="Foto 1"
          className="
            block
            w-full
            h-auto
            object-contain
            select-none
          "
          draggable={false}
        />
      </div>


      {/* =========================================
          FOTO 5
      ========================================= */}

      <div
        className="
          absolute
          z-10

          /* HP */
          left-[85%]
          top-[20%]
          w-[20%]

          /* SM */
          sm:left-[85%]
          sm:top-[0%]
          sm:w-[30%]

          /* MD */
          md:left-[85%]
          md:top-[20%]
          md:w-[30%]

          /* LG */
          lg:left-[85%]
          lg:top-[20%]
          lg:w-[30%]

          rotate-[3deg]
        "
      >
        <img
          src={photos[4]}
          alt="Foto 5"
          className="
            block
            w-full
            h-auto
            object-contain
            select-none
          "
          draggable={false}
        />
      </div>


      {/* =========================================
          FOTO 3
      ========================================= */}

      <div
        className="
          absolute
          z-50

          /* HP */
          left-[50%]
          top-[30%]
          w-[13%]

          /* SM */
          sm:left-[50%]
          sm:top-[30%]
          sm:w-[22%]

          /* MD */
          md:left-[50%]
          md:top-[30%]
          md:w-[22%]

          /* LG */
          lg:left-[50%]
          lg:top-[30%]
          lg:w-[22%]

          rotate-[7deg]
        "
      >
        <img
          src={photos[2]}
          alt="Foto 3"
          className="
            block
            w-full
            h-auto
            object-contain
            select-none
          "
          draggable={false}
        />
      </div>


      {/* =========================================
          FOTO 2
      ========================================= */}

      <div
        className="
          absolute
          z-40

          /* HP */
          left-[20%]
          top-[50%]
          w-[13%]

          /* SM */
          sm:left-[20%]
          sm:top-[50%]
          sm:w-[22%]

          /* MD */
          md:left-[20%]
          md:top-[50%]
          md:w-[22%]

          /* LG */
          lg:left-[20%]
          lg:top-[50%]
          lg:w-[22%]

          rotate-[-35deg]
        "
      >
        <img
          src={photos[1]}
          alt="Foto 2"
          className="
            block
            w-full
            h-auto
            object-contain
            select-none
          "
          draggable={false}
        />
      </div>


      {/* =========================================
          FOTO 4
      ========================================= */}

      <div
        className="
          absolute
          z-40

          /* HP */
          left-[58%]
          top-[58%]
          w-[13%]

          /* SM */
          sm:left-[58%]
          sm:top-[58%]
          sm:w-[22%]

          /* MD */
          md:left-[58%]
          md:top-[58%]
          md:w-[22%]

          /* LG */
          lg:left-[58%]
          lg:top-[58%]
          lg:w-[22%]

          rotate-[8deg]
        "
      >
        <img
          src={photos[3]}
          alt="Foto 4"
          className="
            block
            w-full
            h-auto
            object-contain
            select-none
          "
          draggable={false}
        />
      </div>


      {/* =========================================
          JUDUL GALLERY
      ========================================= */}

      <h2
        className="
          absolute
          z-[60]

          /* HP */
          left-[90%]
          top-[50%]
          text-[7vw]

          /* SM */
          sm:left-[90%]
          sm:top-[50%]
          sm:text-[5.5vw]

          /* MD */
          md:left-[90%]
          md:top-[50%]
          md:text-[4.5vw]

          /* LG */
          lg:left-[90%]
          lg:top-[50%]
          lg:text-[4vw]

          leading-none
          text-black
          whitespace-nowrap
        "
        style={{
          fontFamily: "GreatVibes",
        }}
      >
        Gallery
      </h2>

    </section>
  );
}