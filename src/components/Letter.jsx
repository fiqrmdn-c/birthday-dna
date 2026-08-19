"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const letterText =
  "Selamat ulang tahun, Topik. Semoga setiap harimu dipenuhi kebahagiaan, kesehatan, dan orang-orang baik yang selalu ada di sekitarmu. Semoga semua doa dan harapan yang kamu panjatkan perlahan menemukan jalannya untuk menjadi kenyataan. Terima kasih sudah menjadi bagian dari cerita yang begitu berarti. Semoga di usia yang baru ini ada lebih banyak hal baik yang datang, lebih banyak alasan untuk tersenyum, dan lebih banyak momen indah yang bisa kamu kenang.";

export default function Letter() {
  const [opened, setOpened] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    if (!opened) return;

    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplayText(letterText.slice(0, index));

      if (index >= letterText.length) {
        clearInterval(timer);
        setTypingFinished(true);
      }
    }, 35);

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
          max-w-[440px]
          min-h-[600px]
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
              top-2
              left-1/2
              -translate-x-1/2
              z-50
              w-full
              px-4
              text-white
              text-xs
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
                w-[88vw]
                max-w-[440px]
                min-w-[280px]
                aspect-[1.55/1]
              "
            >

              {/* =================================
                  BADAN AMPLOP
              ================================= */}

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

                {/* BADAN AMPLOP */}

                <div
                  className="
                    absolute
                    inset-0
                    rounded-2xl
                    bg-[#d9a7a7]
                  "
                />

                {/* =================================
                    BAGIAN DEPAN
                ================================= */}

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

                {/* =================================
                    FLAP
                ================================= */}

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

                  {/* DEPAN FLAP */}

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

                  {/* BELAKANG FLAP */}

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

                {/* =================================
                    TOMBOL BUKA
                ================================= */}

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
                    xs:w-16
                    xs:h-16
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
            SURAT
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
                w-[92vw]
                max-w-[440px]
                min-h-[500px]
                sm:min-h-[540px]
                bg-[#fffdf8]
                rounded-sm
                shadow-2xl
                px-5
                py-8
                sm:px-10
                sm:py-12
              "
            >

              {/* =================================
                  ORNAMEN
              ================================= */}

              <div
                className="
                  text-center
                  text-2xl
                  sm:text-3xl
                  text-[#9b7777]
                  opacity-70
                "
              >
                ❀
              </div>

              {/* =================================
                  JUDUL
              ================================= */}

              <h2
                className="
                  mt-4
                  sm:mt-5
                  text-center
                  font-title
                  text-3xl
                  sm:text-5xl
                  text-[#6b4c4c]
                "
              >
                Untukmu
              </h2>

              {/* =================================
                  GARIS
              ================================= */}

              <div
                className="
                  mx-auto
                  mt-3
                  sm:mt-4
                  mb-6
                  sm:mb-8
                  w-16
                  sm:w-20
                  h-px
                  bg-[#c9a3a3]
                "
              />

              {/* =================================
                  TEXT
              ================================= */}

              <div
                className="
                  text-[#4b3b3b]
                  font-text
                  text-[14px]
                  sm:text-base
                  leading-7
                  sm:leading-8
                  text-center
                "
              >
                {displayText}

                {/* CURSOR */}

                {opened && !typingFinished && (
                  <motion.span
                    animate={{
                      opacity: [1, 0, 1],
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                    }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                )}
              </div>

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
                    mt-7
                    sm:mt-8
                    text-right
                    font-title
                    text-2xl
                    sm:text-3xl
                    text-[#6b4c4c]
                    relative
                    right-[20px]
                    sm:right-[30px]
                  "
                >
                  Untukmu,
                  <br />
                  Topik
                </motion.div>
              )}

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
              text-white/80
              text-[10px]
              sm:text-xs
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