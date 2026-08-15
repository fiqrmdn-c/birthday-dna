const flowerImages = [
  "/images/flower1.png",
  "/images/flower2.png",
  "/images/flower3.png",
];

const TOTAL_FLOWERS = 100;


// ==============================
// UKURAN LAYAR
// ==============================

const getScreenSize = () => {
  if (typeof window === "undefined") {
    return {
      width: 390,
      height: 844,
    };
  }

  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};

const { width, height } = getScreenSize();


// ==============================
// GRID RESPONSIVE
// ==============================

let COLS;
let ROWS;

if (width < 480) {
  // HP portrait
  COLS = 8;
  ROWS = 13;
} else if (width < 768) {
  // Tablet / HP landscape
  COLS = 10;
  ROWS = 10;
} else {
  // Desktop
  COLS = 13;
  ROWS = 8;
}


// ==============================
// DATA BUNGA
// ==============================

export const FlowerData = Array.from(
  { length: TOTAL_FLOWERS },
  (_, index) => {

    const col = index % COLS;
    const row = Math.floor(index / COLS);


    // Ukuran setiap area

    const cellWidth =
      width / COLS;

    const cellHeight =
      height / ROWS;


    // Posisi tengah cell

    const centerX =
      col * cellWidth +
      cellWidth / 2;

    const centerY =
      row * cellHeight +
      cellHeight / 2;


    // Random kecil
    // supaya tidak terlihat seperti grid

    const randomX =
      (Math.random() - 0.5) *
      cellWidth *
      0.5;

    const randomY =
      (Math.random() - 0.5) *
      cellHeight *
      0.5;


    // Posisi akhir relatif
    // terhadap tengah layar

    const targetX =
      centerX -
      width / 2 +
      randomX;

    const targetY =
      centerY -
      height / 2 +
      randomY;


    return {

      id: index,

      image:
        flowerImages[
          Math.floor(
            Math.random() *
              flowerImages.length
          )
        ],


      // ==========================
      // POSISI AKHIR
      // ==========================

      targetX,
      targetY,


      // ==========================
      // SPIRAL
      // ==========================

      angle:
        (index / TOTAL_FLOWERS) *
        Math.PI *
        2,

      orbitRadius:
        500 +
        Math.random() * 250,


      // ==========================
      // ROTASI
      // ==========================

      rotate:
        Math.random() * 1080,


      // ==========================
      // UKURAN BUNGA
      // ==========================

      size:
        width < 480
          ? 70 + Math.random() * 35
          : 85 + Math.random() * 40,


      // ==========================
      // ANIMASI
      // ==========================

      duration:
        4 +
        Math.random() * 0.5,

      angularSpeed:
        0.8 +
        Math.random() * 0.6,

      delay:
        Math.random() * 0.5,


      // ==========================
      // WAVE
      // ==========================

      wave:
        Math.floor(index / 20),


      // ==========================
      // SCALE
      // ==========================

      scale:
        0.9 +
        Math.random() * 0.3,
    };
  }
);


// ==============================
// FILTER WAVE
// ==============================

export function getWaveFlowers(wave) {

  if (
    wave === undefined ||
    wave === null
  ) {
    return FlowerData;
  }

  return FlowerData.filter(
    (flower) =>
      flower.wave === wave
  );
}