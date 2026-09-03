"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const letterText =
  "happy birthday yaa 🎂 semoga semua hal baik yang kamu harapkan bisa pelan-pelan tercapai, semoga kamu selalu sehat, dimudahkan segala urusannya, dan punya banyak alasan buat senyum, take care yaa, semoga hari ini jadi hari yang menyenangkan buat kamu.";

export default function Letter() {
  const [opened, setOpened] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);

  // =================================
  // EFEK MENGETIK
  // KECEPATAN ADAPTIF
  // =================================

  useEffect(() => {
    if (!opened) return;

    let index = 0;

    /*
      Kecepatan menyesuaikan panjang teks.

      Teks pendek  -> sedikit lebih lambat
      Teks panjang -> sedikit lebih cepat

      Tujuannya agar durasi typing tetap nyaman
      meskipun isi surat berubah.
    */

    const totalCharacters = letterText.length;

    const typingDuration = Math.min(
      Math.max(totalCharacters * 18, 3500),
      6500
    );

    const typingSpeed = typingDuration / totalCharacters;

    const timer = setInterval(() => {
      index++;

      setDisplayText(letterText.slice(0, index));

      if (index >= totalCharacters) {
        clearInterval(timer);
        setTypingFinished(true);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  }, [opened]);

  return (
    <section
      id="letter"
      className="
        relative
        min-h-screen
        w-full
        flex
        items-center
        justify-center
        px-4
        py-20
        sm:px-6
        sm:py-24
      "
    >
      <div
        className="
          relative
          w-full
          max-w-[470px]
          min-h-[620px]
          flex
          items-center
          justify-center
        "
        style={{
          perspective: "1200px",
        }}
      >

        {/* =================================
            PETUNJUK BUKA SURAT
        ================================= */}

        {!opened && (
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.7,
            }}
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              z-50
              w-full
              px-4
              text-[#c97878]
              text-[11px]
              sm:text-sm
              tracking-[0.12em]
              sm:tracking-[0.15em]
              text-center
            "
          >
            KLIK SURAT UNTUK MEMBUKA
          </motion.p>
        )}

        {/* =================================
            AMPLOP
        ================================= */}

        <AnimatePresence>
          {!opened && (
            <motion.div
              key="envelope"
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 60,
                rotateX: 15,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="
                absolute
                z-30
                w-[82vw]
                max-w-[440px]
                min-w-[280px]
                aspect-[1.55/1]
              "
            >
              <motion.div
                animate={{
                  rotate: [0, -1.5, 1.5, -1, 1, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  inset-0
                  rounded-2xl
                  shadow-2xl
                "
                style={{
                  transformStyle: "preserve-3d",
                }}
              >

                {/* BODY AMPLOP */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-[#d9a7a7]
                  "
                />

                {/* DEPAN AMPLOP */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    h-[75%]
                    rounded-b-2xl
                    bg-[#c98f91]
                    z-20
                  "
                  style={{
                    clipPath:
                      "polygon(0 0, 50% 48%, 100% 0, 100% 100%, 0 100%)",
                  }}
                />

                {/* FLAP */}

                <motion.div
                  animate={{
                    rotateX: opened ? -180 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-[65%]
                    z-30
                  "
                  style={{
                    transformOrigin: "top center",
                    transformStyle: "preserve-3d",
                  }}
                >

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#e5b6b6]
                    "
                    style={{
                      clipPath:
                        "polygon(0 0, 50% 100%, 100% 0)",
                      backfaceVisibility: "hidden",
                    }}
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#c98f91]
                    "
                    style={{
                      clipPath:
                        "polygon(0 100%, 50% 0, 100% 100%)",
                      transform: "rotateX(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  />

                </motion.div>

                {/* TOMBOL */}

                <motion.button
                  type="button"
                  onClick={() => setOpened(true)}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="
                    absolute
                    z-50
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-[58px]
                    h-[58px]
                    sm:w-20
                    sm:h-20
                    rounded-full
                    bg-[#f5dada]
                    border-4
                    border-white
                    shadow-xl
                    flex
                    items-center
                    justify-center
                    text-xl
                    sm:text-2xl
                    cursor-pointer
                    touch-manipulation
                  "
                >
                  💌
                </motion.button>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =================================
            KERTAS SURAT
        ================================= */}

        <AnimatePresence>
          {opened && (
            <motion.div
              key="paper"
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.8,
                rotateX: -20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.45,
                ease: "easeOut",
              }}
              className="
                relative
                z-20
                w-[88vw]
                max-w-[470px]
                min-h-[600px]
                sm:min-h-[650px]
                rounded-[4px]
                bg-[#fffaf0]
                shadow-[0_15px_45px_rgba(90,55,55,0.20)]
                px-7
                py-8
                sm:px-12
                sm:py-12
                overflow-hidden
              "
            >

              {/* =================================
                  TEKSTUR KERTAS
              ================================= */}

              <div
                className="
                  absolute
                  inset-0
                  pointer-events-none
                  opacity-[0.12]
                "
                style={{
                  backgroundImage:
                    "radial-gradient(#9d7d7d 0.7px, transparent 0.7px)",
                  backgroundSize: "9px 9px",
                }}
              />

              {/* =================================
                  DEKORASI ATAS KIRI
              ================================= */}

              <div
                className="
                  absolute
                  top-3
                  left-3
                  text-2xl
                  sm:text-3xl
                  opacity-70
                  rotate-[-20deg]
                "
              >
                🌸
              </div>

              {/* =================================
                  DEKORASI ATAS KANAN
              ================================= */}

              <div
                className="
                  absolute
                  top-3
                  right-3
                  text-2xl
                  sm:text-3xl
                  opacity-70
                  rotate-[20deg]
                "
              >
                🌸
              </div>

              {/* =================================
                  DEKORASI BAWAH
              ================================= */}

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  text-xl
                  sm:text-2xl
                  opacity-60
                  rotate-[-15deg]
                "
              >
                ♡
              </div>

              <div
                className="
                  absolute
                  bottom-4
                  right-4
                  text-xl
                  sm:text-2xl
                  opacity-60
                  rotate-[15deg]
                "
              >
                ♡
              </div>

              {/* =================================
                  ISI KERTAS
              ================================= */}

              <div className="relative z-10">

                {/* ORNAMEN */}

                <div
                  className="
                    w-full
                    text-center
                    text-2xl
                    sm:text-3xl
                    text-[#b88989]
                    opacity-80
                  "
                >
                  ❀
                </div>

                {/* JUDUL */}

                <h2
                  className="
                    w-full
                    mt-3
                    sm:mt-4
                    font-title
                    text-[38px]
                    sm:text-5xl
                    text-[#6b4c4c]
                    text-center
                  "
                >
                  Untukmu
                </h2>

                {/* SUBTITLE */}

                <p
                  className="
                    mt-1
                    text-center
                    text-[10px]
                    sm:text-xs
                    tracking-[0.18em]
                    text-[#b58a8a]
                  "
                >
                  SEBUAH PESAN KECIL UNTUKMU
                </p>

                {/* GARIS */}

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                    mt-4
                    mb-7
                    sm:mt-5
                    sm:mb-9
                  "
                >
                  <div
                    className="
                      w-12
                      sm:w-16
                      h-px
                      bg-[#d6b0b0]
                    "
                  />

                  <span className="text-[#c58d8d] text-sm">
                    ♡
                  </span>

                  <div
                    className="
                      w-12
                      sm:w-16
                      h-px
                      bg-[#d6b0b0]
                    "
                  />
                </div>

                {/* =================================
                    ISI SURAT
                ================================= */}

                <div
                  className="
                    w-full
                    px-2
                    sm:px-3
                    text-[#4b3b3b]
                    font-text
                    text-[13px]
                    sm:text-[15px]
                    leading-7
                    sm:leading-8
                    text-center
                  "
                >
                  {displayText}

                  {/* CURSOR */}

                  {!typingFinished && (
                    <motion.span
                      animate={{
                        opacity: [1, 0, 1],
                      }}
                      transition={{
                        duration: 0.7,
                        repeat: Infinity,
                      }}
                      className="
                        ml-1
                        text-[#b77979]
                      "
                    >
                      |
                    </motion.span>
                  )}
                </div>

                {/* =================================
                    PEMISAH
                ================================= */}

                {typingFinished && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      scaleX: 0,
                    }}
                    animate={{
                      opacity: 1,
                      scaleX: 1,
                    }}
                    transition={{
                      duration: 0.7,
                    }}
                    className="
                      mx-auto
                      mt-7
                      sm:mt-8
                      w-24
                      sm:w-32
                      h-px
                      bg-[#d6b0b0]
                    "
                  />
                )}

                {/* =================================
                    TANDA TANGAN
                ================================= */}

                {typingFinished && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="
                      mt-5
                      sm:mt-6
                      text-right
                      pr-3
                      sm:pr-6
                    "
                  >
                    <p
                      className="
                        font-text
                        text-[10px]
                        sm:text-xs
                        tracking-[0.12em]
                        text-[#a77c7c]
                      "
                    >
                      DENGAN BANYAK DOA BAIK,
                    </p>

                    <p
                      className="
                        mt-1
                        font-title
                        text-3xl
                        sm:text-4xl
                        text-[#6b4c4c]
                      "
                    >
                      Topik
                    </p>
                  </motion.div>
                )}

                {/* ORNAMEN BAWAH */}

                {typingFinished && (
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0.5,
                      duration: 0.7,
                    }}
                    className="
                      mt-7
                      sm:mt-8
                      text-center
                      text-[#b88989]
                      text-xl
                    "
                  >
                    ✿
                  </motion.div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* =================================
            PETUNJUK SCROLL
        ================================= */}

        {typingFinished && (
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              absolute
              -bottom-2
              w-full
              text-[#c97878]
              text-[11px]
              sm:text-sm
              tracking-[0.12em]
              sm:tracking-[0.15em]
              text-center
            "
          >
            ↓ SCROLL UNTUK MELANJUTKAN ↓
          </motion.p>
        )}

      </div>
    </section>
  );
}