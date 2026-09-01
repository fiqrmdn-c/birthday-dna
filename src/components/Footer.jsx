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
      "
    >

      {/* =========================================
          GERBERA
      ========================================= */}

      <motion.button
        type="button"
        onClick={handleFlowerClick}
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
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

        {/* PETUNJUK */}

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
          className="
            absolute
            left-1/2
            -translate-x-1/2
            -bottom-0
            whitespace-nowrap
            text-[#6b4c4c]
            text-xs
            sm:text-sm
            tracking-[0.15em]
            pointer-events-none
          "
        >
          KLIK BUNGA KALO KANGEN
        
        </motion.p>
      </motion.button>

    </footer>
  );
}