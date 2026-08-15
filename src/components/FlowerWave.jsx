"use client";

import {
  useAnimationFrame,
} from "framer-motion";

import {
  useEffect,
  useRef,
} from "react";

import { getWaveFlowers } from "./FlowerData";


export default function FlowerWave({
  wave,
  onComplete,
}) {
  const flowers =
    getWaveFlowers(wave);

  // Menyimpan semua elemen bunga
  const flowerRefs = useRef([]);

  // Waktu awal animasi
  const startTime = useRef(null);


  /*
   * ========================================
   * SATU ANIMATION LOOP UNTUK SEMUA BUNGA
   * ========================================
   */

  useAnimationFrame((time) => {
    if (startTime.current === null) {
      startTime.current = time;
    }

    const elapsedTotal =
      (time - startTime.current) / 1000;


    flowers.forEach((flower, index) => {
      const element =
        flowerRefs.current[index];

      if (!element) return;


      // ==============================
      // DELAY
      // ==============================

      const elapsed =
        elapsedTotal -
        flower.delay;

      if (elapsed < 0) {
        element.style.opacity = "0";
        return;
      }


      // ==============================
      // PROGRESS
      // ==============================

      const progress =
        Math.min(
          elapsed /
            flower.duration,
          1
        );


      // ==============================
      // SPIRAL
      // ==============================

      const theta =
        flower.angle +
        progress *
          flower.angularSpeed *
          Math.PI *
          2;


      const radius =
        flower.orbitRadius *
        Math.sin(
          (progress * Math.PI) /
            2
        );


      const spiralX =
        Math.cos(theta) *
        radius;

      const spiralY =
        Math.sin(theta) *
        radius;


      // ==============================
      // JARAK TARGET
      // ==============================

      const distance =
        Math.sqrt(
          flower.targetX *
            flower.targetX +
          flower.targetY *
            flower.targetY
        );


      const spreadStart =
        Math.min(
          0.75,
          0.35 +
            distance / 3500
        );


      let currentX;
      let currentY;


      // ==============================
      // SPIRAL
      // ==============================

      if (
        progress <
        spreadStart
      ) {
        currentX =
          spiralX;

        currentY =
          spiralY;
      }


      // ==============================
      // MENYEBAR
      // ==============================

      else {
        const t =
          (progress -
            spreadStart) /
          (1 -
            spreadStart);


        currentX =
          spiralX *
            (1 - t) +
          flower.targetX *
            t;

        currentY =
          spiralY *
            (1 - t) +
          flower.targetY *
            t;
      }


      // ==============================
      // SELESAI
      // ==============================

      if (
        progress >= 1
      ) {
        currentX =
          flower.targetX;

        currentY =
          flower.targetY;
      }


      // Simpan posisi untuk FlowerCurtain
      flower.currentX =
        currentX;

      flower.currentY =
        currentY;


      // ==============================
      // SCALE
      // ==============================

      const scale =
        Math.min(
          progress * 2,
          1
        );


      // ==============================
      // ROTASI
      // ==============================

      const rotate =
        flower.rotate +
        progress * 1080;


      // ==============================
      // OPACITY
      // ==============================

      const opacity =
        progress;


      // ==============================
      // UPDATE LANGSUNG KE DOM
      // ==============================

      element.style.transform =
        `translate3d(
          ${currentX}px,
          ${currentY}px,
          0
        )
        scale(${scale})
        rotate(${rotate}deg)`;


      element.style.opacity =
        opacity;
    });
  });


  /*
   * ========================================
   * TIMER SELESAI
   * ========================================
   */

  useEffect(() => {
    if (!onComplete) {
      return;
    }

    if (
      !flowers ||
      flowers.length === 0
    ) {
      return;
    }


    const maxTime =
      Math.max(
        ...flowers.map(
          (flower) =>
            flower.delay +
            flower.duration
        )
      );


    const transitionTime =
      Math.max(
        maxTime - 0.25,
        0
      );


    const timer =
      setTimeout(() => {

        console.log(
          "Wave selesai",
          flowers.length,
          "bunga"
        );

        onComplete(
          flowers
        );

      }, transitionTime * 1000);


    return () =>
      clearTimeout(timer);

  }, [
    flowers,
    onComplete,
  ]);


  /*
   * ========================================
   * RENDER
   * ========================================
   */

  return (
    <>
      {flowers.map(
        (flower, index) => (
          <img
            key={flower.id}

            ref={(element) => {
              flowerRefs.current[index] =
                element;
            }}

            src={flower.image}

            alt=""

            draggable={false}

            className="
              absolute
              pointer-events-none
              select-none
            "

            style={{
              left: "50%",
              top: "50%",

              width:
                flower.size,

              marginLeft:
                -flower.size / 2,

              marginTop:
                -flower.size / 2,

              opacity: 0,

              transform:
                "translate3d(0, 0, 0) scale(0)",

              zIndex: 100,
            }}
          />
        )
      )}
    </>
  );
}