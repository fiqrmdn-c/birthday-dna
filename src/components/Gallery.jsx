"use client";

import { motion } from "framer-motion";

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

const photoAnimation = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 35,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

export default function Gallery() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        scale: 1.04,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
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
          MENYERUPAI BUNGA HERO KIRI ATAS
      ========================================= */}

      <img
        src={galleryFlower[0]}
        alt=""
        draggable={false}
        className="
          absolute
          z-[5]
          top-0
          left-0

          w-80
          sm:w-150
          md:w-150
          lg:w-150

          h-auto

          pointer-events-none
          select-none
        "
      />


      {/* =========================================
          FLOWER 3
          KANAN BAWAH
          MENYERUPAI BUNGA HERO KANAN BAWAH
      ========================================= */}

      <img
        src={galleryFlower[2]}
        alt=""
        draggable={false}
        className="
          absolute
          z-[30]

          bottom-15
          right-0

          w-60
          sm:w-80
          md:w-80
          lg:w-100

          h-auto

          pointer-events-none
          select-none
        "
      />


      {/* =========================================
          FOTO 1
          URUTAN ANIMASI #1
      ========================================= */}

      <motion.div
        variants={photoAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          z-20

          left-[19%]
          top-[10%]
          w-[46%]

          sm:left-[25%]
          sm:top-[18%]
          sm:w-[25%]

          md:left-[25%]
          md:top-[18%]
          md:w-[22%]

          lg:left-[22%]
          lg:top-[18%]
          lg:w-[28%]

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
      </motion.div>


      {/* =========================================
          FOTO 5
          URUTAN ANIMASI #5
          PENUTUP
          DURASI LEBIH LAMA
      ========================================= */}

      <motion.div
        variants={photoAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 2,
          delay: 4.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          z-10

          left-[53%]
          top-[8%]
          w-[42%]

          sm:left-[58%]
          sm:top-[12%]
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
      </motion.div>


      {/* =========================================
          FOTO 3
          URUTAN ANIMASI #4
      ========================================= */}

      <motion.div
        variants={photoAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          delay: 3.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          z-40

          left-[3%]
          top-[40%]
          w-[33%]

          sm:left-[40%]
          sm:top-[30%]
          sm:w-[25%]

          md:left-[40%]
          md:top-[30%]
          md:w-[25%]

          lg:left-[40%]
          lg:top-[30%]
          lg:w-[25%]

          rotate-[-35deg]
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
      </motion.div>


      {/* =========================================
          FOTO 2
          URUTAN ANIMASI #2
      ========================================= */}

      <motion.div
        variants={photoAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          delay: 1.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          z-40

          left-[7%]
          top-[60%]
          w-[33%]

          sm:left-[7%]
          sm:top-[50%]
          sm:w-[25%]

          md:left-[7%]
          md:top-[50%]
          md:w-[25%]

          lg:left-[7%]
          lg:top-[50%]
          lg:w-[25%]

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
      </motion.div>


      {/* =========================================
          FOTO 4
          URUTAN ANIMASI #3
      ========================================= */}

      <motion.div
        variants={photoAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          delay: 2.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          z-40

          left-[55%]
          top-[42%]
          w-[33%]

          sm:left-[45%]
          sm:top-[67%]
          sm:w-[25%]

          md:left-[45%]
          md:top-[67%]
          md:w-[25%]

          lg:left-[45%]
          lg:top-[67%]
          lg:w-[25%]

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
      </motion.div>


      {/* =========================================
          JUDUL GALLERY
      ========================================= */}

      <h2
        className="
          absolute
          z-[60]

          left-[70%]
          top-[32%]
          text-[10vw]

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
          fontFamily: "LondrinaShadow",
        }}
      >
        Gallery
      </h2>

    </motion.section>
  );
}