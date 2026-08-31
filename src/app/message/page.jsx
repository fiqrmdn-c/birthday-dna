"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const messageText =
  "Terima kasih sudah menjadi bagian dari cerita ini. Semoga di usia yang baru, semakin banyak hal baik yang datang kepadamu. Semoga setiap langkah yang kamu ambil membawa kamu lebih dekat dengan semua hal yang kamu impikan. Tetap menjadi dirimu sendiri, tetap tersenyum, dan nikmati setiap proses yang sedang kamu jalani.";

export default function MessagePage() {
  const router = useRouter();

  const [displayText, setDisplayText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplayText(messageText.slice(0, index));

      if (index >= messageText.length) {
        clearInterval(timer);
        setTypingFinished(true);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const handleBack = () => {
    router.push("/");
  };

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div
        className="
          fixed
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/backgroundletter.png')",
        }}
      />

      {/* =========================================
          OVERLAY
      ========================================= */}

      <div
        className="
          fixed
          inset-0
          z-[1]
          bg-white/10
          pointer-events-none
        "
      />

      {/* =========================================
          KONTEN
      ========================================= */}

      <section
        className="
          relative
          z-10
          min-h-screen
          w-full
          flex
          items-center
          justify-center
          px-5
          py-10
          sm:px-8
          sm:py-16
        "
      >

        {/* =========================================
            KERTAS
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.9,
            rotate: -1,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            w-full
            max-w-[460px]
            min-h-[620px]
            sm:min-h-[680px]

            bg-[#fffdf7]

            px-8
            py-10
            sm:px-12
            sm:py-12

            shadow-[0_18px_45px_rgba(80,45,45,0.18)]
          "
          style={{
            borderRadius: "3px 5px 4px 6px",
          }}
        >

          {/* =========================================
              DEKORASI SUDUT ATAS
          ========================================= */}

          <div
            className="
              absolute
              top-4
              left-4
              w-10
              h-10
              border-t
              border-l
              border-[#d8bcbc]
              opacity-60
            "
          />

          <div
            className="
              absolute
              top-4
              right-4
              w-10
              h-10
              border-t
              border-r
              border-[#d8bcbc]
              opacity-60
            "
          />

          {/* =========================================
              ORNAMEN
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 0.75,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="
              text-center
              text-4xl
              sm:text-5xl
              text-[#9b7777]
            "
          >
            ❀
          </motion.div>

          {/* =========================================
              JUDUL
          ========================================= */}

          <motion.h1
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
              delay: 0.7,
            }}
            className="
              mt-4
              text-center
              font-title
              text-4xl
              sm:text-5xl
              text-[#6b4c4c]
            "
          >
            Sebuah Pesan
          </motion.h1>

          {/* =========================================
              ORNAMEN GARIS
          ========================================= */}

          <div className="flex items-center justify-center gap-3 mt-4 mb-9">

            <div
              className="
                w-12
                sm:w-16
                h-px
                bg-[#c9a3a3]
              "
            />

            <span className="text-[#c9a3a3] text-sm">
              ✦
            </span>

            <div
              className="
                w-12
                sm:w-16
                h-px
                bg-[#c9a3a3]
              "
            />

          </div>

          {/* =========================================
              ISI PESAN
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
            }}
            className="
              w-full
              px-2
              sm:px-3

              text-center

              text-[#4b3b3b]

              font-text

              text-[14px]
              sm:text-[15px]

              leading-7
              sm:leading-8
            "
          >
            {displayText}

            {!typingFinished && (
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
          </motion.div>

          {/* =========================================
              TANDA TANGAN
          ========================================= */}

          {typingFinished && (
            <motion.div
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
                mt-10
                pr-2
                text-right
                font-title
                text-3xl
                sm:text-4xl
                text-[#6b4c4c]
              "
            >
              Untukmu,
              <br />
              Topik
            </motion.div>
          )}

          {/* =========================================
              DEKORASI SUDUT BAWAH
          ========================================= */}

          <div
            className="
              absolute
              bottom-4
              left-4
              w-10
              h-10
              border-b
              border-l
              border-[#d8bcbc]
              opacity-60
            "
          />

          <div
            className="
              absolute
              bottom-4
              right-4
              w-10
              h-10
              border-b
              border-r
              border-[#d8bcbc]
              opacity-60
            "
          />

          {/* =========================================
              TOMBOL KEMBALI
          ========================================= */}

          <motion.button
            type="button"
            onClick={handleBack}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2,
              duration: 0.8,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.93,
            }}
            className="
              absolute
              bottom-7
              left-1/2
              -translate-x-1/2

              px-5
              py-2

              rounded-full

              bg-[#f7eaea]

              border
              border-[#d4b2b2]

              text-[#6b4c4c]

              text-[11px]
              sm:text-xs

              tracking-[0.12em]

              shadow-sm

              cursor-pointer
              touch-manipulation
              select-none
            "
          >
            ← KEMBALI
          </motion.button>

        </motion.div>

      </section>

    </main>
  );
}