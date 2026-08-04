"use client";

import {
  motion
} from "framer-motion";

import {
  useEffect
} from "react";

export default function FlowerCurtain({
  flowers = [],
  onComplete,
}) {

  useEffect(() => {

    const timer = setTimeout(() => {

      if (onComplete) {
        onComplete();
      }

    }, 1500);

    return () => {
      clearTimeout(timer);
    };

  }, [onComplete]);

  return (

    <div
      className="
        fixed
        inset-0
        overflow-hidden
        pointer-events-none
        z-[999]
      "
    >

      {flowers.map((flower) => (

        <motion.img

          key={flower.id}

          src={flower.image}

          alt="flower"

          draggable={false}

          className="
            absolute
            select-none
            pointer-events-none
            drop-shadow-lg
          "

          style={{
            left: "50%",
            top: "50%",

            width: flower.size,

            marginLeft: -flower.size / 2,
            marginTop: -flower.size / 2,

            zIndex: 200,
          }}

          initial={{
            x: flower.currentX ?? flower.targetX,
            y: flower.currentY ?? flower.targetY,
            rotate: flower.rotate,
            opacity: 1,
          }}

          animate={{
            x:
              (flower.currentX ?? flower.targetX) < 0
                ? (flower.currentX ?? flower.targetX) - 900
                : (flower.currentX ?? flower.targetX) + 900,

            rotate:
              (flower.currentX ?? flower.targetX) < 0
                ? -360
                : 360,
          }}

          transition={{
            delay: 0,
            duration: 1.2,
            ease: "easeInOut",
          }}

        />

      ))}

    </div>

  );

}