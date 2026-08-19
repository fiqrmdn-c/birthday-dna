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
    <section className="relative w-full px-0 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-[1024px]">

        {/* =========================================
            CANVAS GALLERY
            RASIO 1024 : 1448
        ========================================= */}

        <div
          className="
            relative
            w-full
            aspect-[1024/1448]
          "
        >

          {/* =========================================
              FOTO 1
              KIRI ATAS
          ========================================= */}

          <div
            className="
              absolute
              z-20

              left-[0%]
              top-[12.5%]

              w-[75%]
              sm:w-[80%]
              md:w-[90%]
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
              KANAN ATAS
          ========================================= */}

          <div
            className="
              absolute
              z-10

              left-[57%]
              top-[0%]

              w-[75%]
              sm:w-[80%]
              md:w-[90%]
              lg:w-[90%]

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
              TENGAH
          ========================================= */}

          <div
            className="
              absolute
              z-50

              left-[22%]
              top-[8%]

              w-[75%]
              sm:w-[80%]
              md:w-[90%]
              lg:w-[90%]

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
              KIRI BAWAH
          ========================================= */}

          <div
            className="
              absolute
              z-40

              left-[0%]
              top-[24%]

              w-[75%]
              sm:w-[80%]
              md:w-[90%]
              lg:w-[90%]

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
              KANAN BAWAH
          ========================================= */}

          <div
            className="
              absolute
              z-40

              left-[28%]
              top-[40%]

              w-[75%]
              sm:w-[80%]
              md:w-[90%]
              lg:w-[90%]

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

              left-[90%]
              top-[65%]

              text-[7vw]

              sm:left-[82%]
              sm:top-[63%]
              sm:text-[5vw]

              md:left-[75%]
              md:top-[61%]
              md:text-[4.5vw]

              lg:left-[70%]
              lg:top-[60%]
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

        </div>

      </div>
    </section>
  );
}