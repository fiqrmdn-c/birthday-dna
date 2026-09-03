"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useMusic } from "@/app/MusicProvider";

function LilyOfTheValley({
  className = "",
  flip = false,
}) {
  return (
    <motion.svg
      viewBox="0 0 180 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{
        opacity: 0,
        scale: 0.7,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        absolute
        w-[115px]
        h-[115px]
        sm:w-[135px]
        sm:h-[135px]
        pointer-events-none
        ${flip ? "scale-x-[-1]" : ""}
        ${className}
      `}
    >
      {/* Batang utama */}
      <path
        d="M87 18 C82 55 70 86 47 122"
        stroke="#78966f"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Daun 1 */}
      <path
        d="M64 67 C36 64 19 78 12 105 C37 104 57 94 68 76 Z"
        fill="#9caf91"
        opacity="0.75"
      />

      <path
        d="M64 72 C42 79 27 91 17 102"
        stroke="#718b69"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Daun 2 */}
      <path
        d="M55 103 C29 104 17 119 14 143 C37 137 53 124 61 107 Z"
        fill="#a9b99d"
        opacity="0.65"
      />

      <path
        d="M54 108 C37 118 25 130 17 140"
        stroke="#78916f"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Batang bunga */}
      <path
        d="M82 48 C105 58 120 75 126 103"
        stroke="#78966f"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M74 69 C96 77 108 91 113 115"
        stroke="#78966f"
        strokeWidth="2.3"
        strokeLinecap="round"
      />

      {/* Bunga 1 */}
      <g transform="translate(116 78)">
        <path
          d="M0 -1 C-10 -10 -19 -5 -16 4 C-14 10 -7 13 0 11 C7 13 14 10 16 4 C19 -5 10 -10 0 -1"
          fill="#fffdf8"
          stroke="#dfd6cb"
          strokeWidth="1"
        />

        <circle
          cx="0"
          cy="4"
          r="2"
          fill="#d5b995"
        />
      </g>

      {/* Bunga 2 */}
      <g transform="translate(128 100)">
        <path
          d="M0 -1 C-10 -10 -19 -5 -16 4 C-14 10 -7 13 0 11 C7 13 14 10 16 4 C19 -5 10 -10 0 -1"
          fill="#fffdf8"
          stroke="#dfd6cb"
          strokeWidth="1"
        />

        <circle
          cx="0"
          cy="4"
          r="2"
          fill="#d5b995"
        />
      </g>

      {/* Bunga 3 */}
      <g transform="translate(101 96)">
        <path
          d="M0 -1 C-10 -10 -19 -5 -16 4 C-14 10 -7 13 0 11 C7 13 14 10 16 4 C19 -5 10 -10 0 -1"
          fill="#fffdf8"
          stroke="#dfd6cb"
          strokeWidth="1"
        />

        <circle
          cx="0"
          cy="4"
          r="2"
          fill="#d5b995"
        />
      </g>

      {/* Bunga 4 */}
      <g transform="translate(112 119)">
        <path
          d="M0 -1 C-10 -10 -19 -5 -16 4 C-14 10 -7 13 0 11 C7 13 14 10 16 4 C19 -5 10 -10 0 -1"
          fill="#fffdf8"
          stroke="#dfd6cb"
          strokeWidth="1"
        />

        <circle
          cx="0"
          cy="4"
          r="2"
          fill="#d5b995"
        />
      </g>
    </motion.svg>
  );
}

const messageText =
  "\n\nAku pernah benar-benar sayang sama kamu.\nYa, perasaan itu bukan sekadar karena terbiasa ngobrol atau karena kita sering berkomunikasi. Ada banyak hal kecil dari kamu yang mungkin menurutmu biasa aja, tapi buat aku ya itu berarti, contohnya mungkin cara kamu cerita, bercanda, atau sekadar hadir. Ya itu pernah membuat aku ngerasa senang.\nAku sadar sih, ada beberapa sikapku yang mungkin akhirnya membuat kamu tidak nyaman. Aku minta maaf untuk itu. Aku mungkin tidak sepenuhnya memahami apa yang kamu rasakan waktu itu. Tapi sekarang aku mencoba menerima bahwa perasaan dan kenyamanan seseorang memang tidak bisa dipaksakan.\nAku tetap bersyukur pernah mengenal kamu. Terlepas dari bagaimana akhirnya hubungan kita, kayanya bakalan canggung si wkwk, ada bagian dari aku yang menjadi lebih berwarna karena mengenal kamu.\nAku sebenarnya tidak selalu tahu bagaimana cara menunjukkan perasaanku dengan baik. Kadang aku terlalu banyak mikir tentang apa yang harus aku katakan sampai akhirnya caraku justru mungkin terlihat aneh atau berlebihan. Kalau suatu hari kamu ingin berbicara dan mencoba mengenal satu sama lain lagi, aku akan menghargainya. Tenang aja ini bukan pemaksaan kok.\nAku berharap kamu bisa menemukan orang dan kehidupan yang membuat kamu merasa nyaman. Kalau suatu hari kamu mengingat aku, aku berharap yang kamu ingat bukan hanya kesalahan atau hal-hal yang membuat kita tidak cocok, tapi juga bahwa pernah ada aku, seseorang yang benar-benar menghargai keberadaanmu.";

export default function Message() {
  const router = useRouter();
  const { stopMusic } = useMusic();

  const [displayText, setDisplayText] = useState("");
  const [typingFinished, setTypingFinished] = useState(false);

  useEffect(() => {
    let index = 0;

    const timer = setInterval(() => {
      index++;

      setDisplayText(
        messageText.slice(0, index)
      );

      if (index >= messageText.length) {
        clearInterval(timer);
        setTypingFinished(true);
      }
    }, 20);

    return () => clearInterval(timer);
  }, []);

  const handleBack = () => {
    stopMusic();
    router.push("/");
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}
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


      {/* =====================================================
          PAPER CONTAINER
      ===================================================== */}
      <div
        className="
          relative
          z-10
          min-h-screen
          flex
          items-center
          justify-center
          px-3
          py-16
          sm:px-4
        "
      >

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
            relative
            w-[94vw]
            max-w-[560px]

            min-h-[1400px]
            sm:min-h-[1400px]

            rounded-[6px]

            bg-[#fffaf0]

            border
            border-[#d3bdac]

            shadow-[0_15px_45px_rgba(90,55,55,0.20)]

            px-5
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
              LILY ATAS KIRI
          ================================================= */}
          <LilyOfTheValley
            className="
              top-[-15px]
              left-[-20px]
            "
          />


          {/* =================================================
              LILY ATAS KANAN
          ================================================= */}
          <LilyOfTheValley
            flip
            className="
              top-[-15px]
              right-[-20px]
            "
          />


          {/* =================================================
              TOMBOL KEMBALI
          ================================================= */}
          <motion.button
            type="button"
            onClick={handleBack}
            whileTap={{
              scale: 0.95,
            }}

            className="
              absolute

              bottom-10

              left-1/2
              -translate-x-1/2
              translate-y-1

              px-6
              py-3

              rounded-full

              border-2
              border-[#a77c7c]

              bg-[#fffaf0]

              text-[10px]
              sm:text-xs

              leading-normal

              tracking-[0.12em]

              font-text
              font-medium

              text-[#8f6969]

              shadow-[0_2px_8px_rgba(90,55,55,0.12)]

              hover:bg-[#f8eee5]
              hover:border-[#8f6969]
              hover:text-[#6b4c4c]

              transition-all
              duration-300
            "
          >
            KEMBALI
          </motion.button>


          {/* =================================================
              TITLE
          ================================================= */}
          <motion.div
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
              text-center
              translate-y-4
              sm:translate-y-4
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
              Special Letter
            </p>


            {/* GARIS PEMISAH */}
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

          </motion.div>


          {/* =================================================
              MESSAGE
          ================================================= */}
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
              mt-8

              w-full

              px-4
              sm:px-8

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

          </motion.div>


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
                Tuan Muda
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
              LILY BAWAH KIRI
          ================================================= */}
          <LilyOfTheValley
            className="
              bottom-[-25px]
              left-[-25px]
              rotate-[15deg]
            "
          />


          {/* =================================================
              LILY BAWAH KANAN
          ================================================= */}
          <LilyOfTheValley
            flip
            className="
              bottom-[-25px]
              right-[-25px]
              rotate-[-15deg]
            "
          />


          {/* =================================================
              TERIMA KASIH
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

                bottom-16

                left-1/2
                -translate-x-1/2
                translate-y-1

                font-text

                text-[16px]
                sm:text-[18px]

                tracking-[0.15em]

                text-[#a77c7c]

                whitespace-nowrap
              "
            >
              ♡ TERIMA KASIH SUDAH MEMBACA ♡
            </motion.div>
          )}

        </motion.div>

      </div>

    </main>
  );
}