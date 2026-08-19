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
          left-[25%]
          top-[18%]
          w-[18%]

          /* SM */
          sm:left-[25%]
          sm:top-[18%]
          sm:w-[18%]

          /* MD */
          md:left-[25%]
          md:top-[18%]
          md:w-[18%]

          /* LG */
          lg:left-[25%]
          lg:top-[18%]
          lg:w-[18%]

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
          left-[58%]
          top-[16%]
          w-[30%]

          /* SM */
          sm:left-[58%]
          sm:top-[16%]
          sm:w-[30%]

          /* MD */
          md:left-[58%]
          md:top-[16%]
          md:w-[30%]

          /* LG */
          lg:left-[58%]
          lg:top-[16%]
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
          left-[40%]
          top-[30%]
          w-[13%]

          /* SM */
          sm:left-[40%]
          sm:top-[30%]
          sm:w-[22%]

          /* MD */
          md:left-[40%]
          md:top-[30%]
          md:w-[22%]

          /* LG */
          lg:left-[40%]
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
          left-[7%]
          top-[50%]
          w-[13%]

          /* SM */
          sm:left-[7%]
          sm:top-[50%]
          sm:w-[22%]

          /* MD */
          md:left-[7%]
          md:top-[50%]
          md:w-[22%]

          /* LG */
          lg:left-[7%]
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
          left-[45%]
          top-[67%]
          w-[13%]

          /* SM */
          sm:left-[45%]
          sm:top-[67%]
          sm:w-[22%]

          /* MD */
          md:left-[45%]
          md:top-[67%]
          md:w-[22%]

          /* LG */
          lg:left-[45%]
          lg:top-[67%]
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
          left-[74%]
          top-[58%]
          text-[7vw]

          /* SM */
          sm:left-[74%]
          sm:top-[58%]
          sm:text-[5.5vw]

          /* MD */
          md:left-[74%]
          md:top-[58%]
          md:text-[4.5vw]

          /* LG */
          lg:left-[74%]
          lg:top-[58%]
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