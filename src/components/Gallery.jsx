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
            RASIO MENGIKUTI REFERENSI 1024 : 1448
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
              FOTO PANJANG VERTIKAL
          ========================================= */}

          <div
            className="
              absolute
              z-20

              left-[12.5%]
              top-[12.5%]

              w-[75%]

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
              "
              draggable={false}
            />
          </div>


          {/* =========================================
              FOTO 5
              KANAN ATAS
              FOTO BESAR
          ========================================= */}

          <div
            className="
              absolute
              z-10

              left-[57%]
              top-[13.5%]

              w-[66%]

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
              "
              draggable={false}
            />
          </div>


          {/* =========================================
              FOTO 3
              TENGAH
              MENUTUPI FOTO 1 DAN FOTO 5
          ========================================= */}

          <div
            className="
              absolute
              z-50

              left-[36%]
              top-[28%]

              w-[55%]

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
              "
              draggable={false}
            />
          </div>


          {/* =========================================
              FOTO 2
              KIRI BAWAH
              ROTASI MIRING
          ========================================= */}

          <div
            className="
              absolute
              z-40

              left-[1.5%]
              top-[49%]

              w-[55%]

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

              left-[45%]
              top-[64%]

              w-[55%]

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

              left-[66%]
              top-[54%]

              text-[7vw]
              sm:text-[5vw]
              md:text-[4.5vw]
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