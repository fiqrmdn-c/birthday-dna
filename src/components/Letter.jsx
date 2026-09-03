"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Letter() {
  const letterText =
    "\nHappy birthday yaa 🎂\n\nSemoga semua hal baik yang kamu harapkan bisa pelan-pelan tercapai, semoga kamu selalu sehat, dimudahkan segala urusannya, dan punya banyak alasan buat senyum. Semoga hari-hari kamu ke depannya dipenuhi banyak hal baik, banyak cerita menyenangkan, dan orang-orang yang selalu membawa energi positif. Take care yaa, semoga hari ini jadi hari yang menyenangkan, semoga langkah kamu ke depannya selalu dipertemukan dengan hal-hal yang baik, dan semoga apa pun yang sedang kamu usahakan bisa berjalan dengan lancar, semoga kamu bisa menemukan lebih banyak alasan untuk bahagia dan menikmati setiap proses yang kamu jalani.";

  const [displayText, setDisplayText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  /* =========================
     KLIK / BUKA SURAT
  ========================= */
  const handleOpenLetter = () => {
    setShowLetter(true);
  };

  /* =========================
     TYPING ANIMATION
  ========================= */
  useEffect(() => {
    if (!showLetter) return;

    let index = 0;

    setDisplayText("");
    setTypingFinished(false);

    const totalCharacters = letterText.length;

    const typingDuration = Math.min(
      Math.max(totalCharacters * 18, 4000),
      7500
    );

    const typingSpeed = typingDuration / totalCharacters;

    const interval = setInterval(() => {
      if (index < letterText.length) {
        setDisplayText(letterText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setTypingFinished(true);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [showLetter, letterText]);

  return (
    <section
      id="letter"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-8
        sm:px-12
        py-20
        overflow-hidden
      "
    >

      {/* =====================================================
          ENVELOPE
      ===================================================== */}
      <AnimatePresence>
        {!showLetter && (
          <motion.button
            type="button"
            onClick={handleOpenLetter}

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, -2, 2, -2, 2, 0],
            }}

            exit={{
              opacity: 0,
              scale: 1.08,
              y: -30,
            }}

            transition={{
              opacity: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },

              scale: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },

              rotate: {
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              },
            }}

            className="
              absolute
              z-30

              w-[78vw]
              max-w-[440px]
              min-w-[280px]

              aspect-[1.55/1]

              cursor-pointer
              outline-none
            "
          >

            {/* Badan envelope */}
            <div
              className="
                absolute
                inset-0
                rounded-xl
                bg-[#ead7c5]
                shadow-[0_15px_40px_rgba(70,40,40,0.20)]
              "
            />

            {/* Flap envelope */}
            <div
              className="
                absolute
                top-0
                left-0
                w-full
                h-1/2
                bg-[#f0dfcf]
                [clip-path:polygon(0_0,100%_0,50%_100%)]
              "
            />

            {/* Heart */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                text-3xl
              "
            >
              ♡
            </motion.div>

          </motion.button>
        )}
      </AnimatePresence>


      {/* =====================================================
          KERTAS SURAT
      ===================================================== */}
      <AnimatePresence>
        {showLetter && (
          <motion.div
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.95,
            }}

            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}

            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}

            className="
              relative
              z-20

              w-[84vw]
              max-w-[560px]

              min-h-[680px]
              sm:min-h-[720px]

              rounded-[6px]

              bg-[#fffaf0]

              border
              border-[#d3bdac]

              shadow-[0_15px_45px_rgba(90,55,55,0.20)]

              px-7
              py-9

              sm:px-16
              sm:py-14

              overflow-hidden
            "

            style={{
              backgroundImage: `
                radial-gradient(
                  rgba(120, 80, 60, 0.045) 0.7px,
                  transparent 0.7px
                )
              `,
              backgroundSize: "8px 8px",
            }}
          >

            {/* =================================================
                ORNAMEN ATAS
            ================================================= */}
            <div
              className="
                absolute
                top-4
                left-5
                text-xl
                opacity-70
              "
            >
              🌸
            </div>

            <div
              className="
                absolute
                top-4
                right-5
                text-xl
                opacity-70
              "
            >
              🌷
            </div>


            {/* =================================================
                JUDUL
            ================================================= */}
            <div
              className="
                text-center
                translate-y-3
                sm:translate-y-3
              "
            >
              <p
                className="
                  font-title
                  text-4xl
                  sm:text-5xl
                  text-[#6b4c4c]
                "
              >
                A Little Letter
              </p>

              {/* Garis */}
              <div
                className="
                  mt-4
                  flex
                  items-center
                  gap-3
                "
              >
                <div
                  className="
                    h-px
                    flex-1
                    bg-[#d8bcbc]
                  "
                />

                <span
                  className="
                    text-[#b77979]
                    text-sm
                  "
                >
                  ♡
                </span>

                <div
                  className="
                    h-px
                    flex-1
                    bg-[#d8bcbc]
                  "
                />
              </div>
            </div>


            {/* =================================================
                ISI SURAT
            ================================================= */}
            <div
              className="
                mt-8

                w-full

                px-1
                sm:px-2

                text-[#4b3b3b]

                font-text

                text-[14px]
                sm:text-[18px]

                leading-7
                sm:leading-9

                text-center

                whitespace-pre-line
              "
            >
              {displayText}

              {!typingFinished && showLetter && (
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


            {/* =================================================
                SIGNATURE
            ================================================= */}
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
                  mt-14

                  translate-x-[-20px]
                  sm:translate-x-[-30px]

                  text-right
                "
              >

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


            {/* =================================================
                ORNAMEN BAWAH
            ================================================= */}
            <div
              className="
                absolute
                bottom-5
                left-6
                text-lg
                opacity-60
              "
            >
              🌿
            </div>

            <div
              className="
                absolute
                bottom-5
                right-6
                text-lg
                opacity-60
              "
            >
              🌿
            </div>


            {/* =================================================
                SCROLL INDICATOR
            ================================================= */}
            {typingFinished && (
              <motion.div
                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: [0.4, 1, 0.4],
                }}

                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}

                className="
                  absolute

                  bottom-3
                  left-1/2

                  -translate-x-1/2

                  font-text

                  text-[9px]
                  sm:text-[10px]

                  tracking-[0.15em]

                  text-[#a77c7c]

                  whitespace-nowrap
                "
              >
                ↓ SCROLL UNTUK MELANJUTKAN ↓
              </motion.div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}