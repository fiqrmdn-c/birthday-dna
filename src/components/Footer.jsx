"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const handleFlowerClick = () => {
    router.push("/message");
  };

  return (
    <footer
      className="
        relative
        w-full
        h-[300px]
        sm:h-[340px]
        md:h-[380px]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#f8dede]
      "
    >

      {/* =========================================
          LAYER 1
          BACKGROUND PINK
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          z-0
          bg-[#f8dede]
        "
      />


      {/* =========================================
          LAYER 2
          FOTO KOLASE
          EFEK SAPU DARI ATAS KE BAWAH
      ========================================= */}

      <motion.div
        initial={{
          clipPath: "inset(0 0 50% 0)",
        }}
        whileInView={{
          clipPath: "inset(0 0 0% 0)",
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          inset-0
          z-10
          overflow-hidden
        "
      >
        <img
          src="/images/footer-photo.png"
          alt=""
          draggable={false}
          className="
            block
            w-full
            h-full
            object-cover
            select-none
            pointer-events-none
          "
        />
      </motion.div>


      {/* =========================================
          LAYER 3
          GERBERA
      ========================================= */}

      <motion.button
        type="button"
        onClick={handleFlowerClick}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        whileTap={{
          scale: 0.9,
        }}
        className="
          relative
          z-20
          cursor-pointer
          touch-manipulation
          outline-none
          border-0
          bg-transparent
          p-0
        "
      >
        <motion.img
          src="/images/gerbera.png"
          alt="Gerbera"
          draggable={false}
          animate={{
            y: [0, -5, 0],
            rotate: [-1, 1, -1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            block
            w-[240px]
            sm:w-[180px]
            md:w-[210px]
            lg:w-[230px]
            h-auto
            object-contain
            select-none
          "
        />
      </motion.button>

    </footer>
  );
}