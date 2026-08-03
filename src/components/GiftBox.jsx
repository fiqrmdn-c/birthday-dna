"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function GiftBox({ onOpen }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      onOpen();
    }, 100);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/10"></div>

      <motion.div
        className="relative cursor-pointer z-30"

        animate={
          opening
            ? {
                scale: 0.82,
                opacity: 0,
              }
            : {
                y: [0, -10, 0],
              }
        }

        transition={{
          duration: opening ? 0.8 : 2,
          repeat: opening ? 0 : Infinity,
          ease: "easeInOut",
        }}

        onClick={handleClick}
      >
        {opening && (
          <motion.div
            className="absolute left-1/2 top-16 -translate-x-1/2 w-72 h-72 rounded-full bg-pink-200 blur-[90px] z-0"

            initial={{
              opacity: 0,
              scale: 0,
            }}

            animate={{
              opacity: [0, 1, 0.6],
              scale: [0, 2.5, 3],
            }}

            transition={{
              duration: 1,
            }}
          />
        )}

        <motion.img
          src="/images/gift/lid.png"
          alt="lid"

          className="absolute left-1/2 -translate-x-1/2 -top-12 w-60 z-20"

          style={{
            transformOrigin: "center bottom",
          }}

          animate={
            opening
              ? {
                  y: -80,
                  rotate: -18,
                  scale: 1.05,
                }
              : {
                  y: [0, -8, 0],
                  rotate: [0, 2, 0],
                }
          }

          transition={{
            duration: 0.8,
            repeat: opening ? 0 : Infinity,
          }}
        />

        <motion.img
          src="/images/gift/box.png"
          alt="box"

          className="relative mt-44 w-72 z-10"

          animate={
            opening
              ? {
                  scale: 0.95,
                }
              : {}
          }

          transition={{
            duration: 0.8,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-32 w-56 h-5 bg-black/20 blur-xl rounded-full"

        animate={{
          scale: [1, 0.85, 1],
        }}

        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />
    </div>
  );
}