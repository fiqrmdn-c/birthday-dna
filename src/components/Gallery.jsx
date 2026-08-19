"use client";

const photos = [
  "/images/foto1.png",
  "/images/foto2.png",
  "/images/foto3.png",
  "/images/foto4.png",
  "/images/foto5.png",
];

const galleryFlower = [
  "/images/galleryflower1.png",
  "/images/galleryflower2.png",
  "/images/galleryflower3.png",
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
          FLOWER 1
          KIRI ATAS
      ========================================= */}

      <img
        src={galleryFlower[0]}
        alt=""
        draggable={false}
        className="
          absolute
          z-[5]
          select-none

          left-[5%]
          top-[8%]
          w-[75%]

          sm:left-[5%]
          sm:top-[8%]
          sm:w-[50%]

          md:left-[5%]
          md:top-[8%]
          md:w-[50%]

          lg:left-[5%]
          lg:top-[8%]
          lg:w-[50%]

          rotate-[-15deg]
        "
      />


      {/* =========================================
          FOTO 1
      ========================================= */}

      <div
        className="
          absolute
          z-20

          left-[25%]
          top-[18%]
          w-[18%]

          sm:left-[25%]
          sm:top-[18%]
          sm:w-[18%]

          md:left-[25%]
          md:top-[18%]
          md:w-[18%]

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

          left-[58%]
          top-[16%]
          w-[30%]

          sm:left-[58%]
          sm:top-[16%]
          sm:w-[30%]

          md:left-[58%]
          md:top-[16%]
          md:w-[30%]

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

          left-[38%]
          top-[25%]
          w-[22%]

          sm:left-[40%]
          sm:top-[30%]
          sm:w-[22%]

          md:left-[40%]
          md:top-[30%]
          md:w-[22%]

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

          left-[7%]
          top-[36%]
          w-[22%]

          sm:left-[7%]
          sm:top-[50%]
          sm:w-[22%]

          md:left-[7%]
          md:top-[50%]
          md:w-[22%]

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

          left-[45%]
          top-[42%]
          w-[22%]

          sm:left-[45%]
          sm:top-[67%]
          sm:w-[22%]

          md:left-[45%]
          md:top-[67%]
          md:w-[22%]

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
          FLOWER 2
          KIRI BAWAH
      ========================================= */}

      <img
        src={galleryFlower[1]}
        alt=""
        draggable={false}
        className="
          absolute
          z-[30]
          select-none

          left-[10%]
          top-[45%]
          w-[50%]

          sm:left-[10%]
          sm:top-[45%]
          sm:w-[50%]

          md:left-[10%]
          md:top-[45%]
          md:w-[50%]

          lg:left-[10%]
          lg:top-[45%]
          lg:w-[50%]

          rotate-[18deg]
        "
      />


      {/* =========================================
          FLOWER 3
          KANAN BAWAH
      ========================================= */}

      <img
        src={galleryFlower[2]}
        alt=""
        draggable={false}
        className="
          absolute
          z-[30]
          select-none

          left-[29.5%]
          top-[18%]
          w-[70%]

          sm:left-[30%]
          sm:top-[14%]
          sm:w-[70%]

          md:left-[30%]
          md:top-[14%]
          md:w-[70%]

          lg:left-[30%]
          lg:top-[14%]
          lg:w-[70%]

        "
      />


      {/* =========================================
          JUDUL GALLERY
      ========================================= */}

      <h2
        className="
          absolute
          z-[60]

          left-[70%]
          top-[34%]
          text-[4vw]

          sm:left-[74%]
          sm:top-[58%]
          sm:text-[5.5vw]

          md:left-[74%]
          md:top-[58%]
          md:text-[4.5vw]

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