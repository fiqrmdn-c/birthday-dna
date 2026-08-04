"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToTimeline = () => {
    document
      .getElementById("timeline")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10"
        initial={{
          opacity: 0,
          y: 40,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <motion.p
          className="text-pink-200 tracking-[6px] uppercase text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.25,
            duration: 0.8,
          }}
        >
          Happy Birthday
        </motion.p>

        <motion.h1
          className="
            mt-4
            text-white
            text-6xl
            md:text-8xl
            font-bold
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.45,
            duration: 0.9,
          }}
        >
          Topik
        </motion.h1>

        <motion.p
          className="
            mt-8
            text-white/90
            text-lg
            max-w-xl
            leading-8
            mx-auto
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.7,
            duration: 0.9,
          }}
        >
          Semoga setiap langkahmu dipenuhi kebahagiaan,
          kesehatan, dan segala hal baik yang selalu
          kamu impikan.
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToTimeline}
        initial={{
          opacity: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          cursor-pointer
          z-20
        "
      >
        <span
          className="
            text-white
            text-sm
            tracking-[4px]
          "
        >
          SCROLL
        </span>

        <div
          className="
            w-7
            h-12
            rounded-full
            border-2
            border-white
            flex
            justify-center
            pt-2
          "
        >
          <div
            className="
              w-1.5
              h-3
              rounded-full
              bg-white
              animate-bounce
            "
          />
        </div>
      </motion.button>
    </section>
  );
}