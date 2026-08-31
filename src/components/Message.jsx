"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const messageText =
  "Terima kasih sudah sampai di bagian ini. Semoga hari-harimu selalu dipenuhi hal-hal baik, orang-orang yang tulus, dan banyak alasan untuk tersenyum. Semoga semua yang kamu harapkan perlahan menemukan jalannya.";

export default function Message() {
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
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-hidden">

      {/* =========================
          BACKGROUND
      ========================== */}

      <div
        className="
          fixed
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/images/backgroundletter.png')",
        }}
      />

      {/* =========================
          KERTAS PESAN
      ========================== */}

      <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-16">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 80,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            w-full
            max-w-[440px]
            min-h-[500px]
            sm:min-h-[540px]
            bg-[#fffdf8]
            rounded-sm
            shadow-2xl
            px-7
            py-10
            sm:px-10
            sm:py-12
          "
        >

          {/* ORNAMEN */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 0.7,
              scale: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
            className="
              text-center
              text-3xl
              text-[#9b7777]
            "
          >
            ❀
          </motion.div>

          {/* JUDUL */}

          <motion.h1
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
              duration: 0.8,
            }}
            className="
              mt-5
              text-center
              font-title
              text-4xl
              sm:text-5xl
              text-[#6b4c4c]
            "
          >
            Sebuah Pesan
          </motion.h1>

          {/* GARIS */}

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: 80,
            }}
            transition={{
              delay: 0.9,
              duration: 0.7,
            }}
            className="
              mx-auto
              mt-4
              mb-8
              h-px
              bg-[#c9a3a3]
            "
          />

          {/* PESAN */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.1,
              duration: 0.6,
            }}
            className="
              text-[#4b3b3b]
              font-text
              text-[15px]
              sm:text-base
              leading-8
              text-justify
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

          {/* PENUTUP */}

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
                text-right
                font-title
                text-3xl
                text-[#6b4c4c]
              "
            >
              Untukmu,
              <br />
              Topik
            </motion.div>
          )}

        </motion.div>
      </div>
    </main>
  );
}