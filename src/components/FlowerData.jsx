const flowerImages = [
  "/images/flower1.png",
  "/images/flower2.png",
  "/images/flower3.png",
];

const TOTAL_FLOWERS = 300;

// jumlah kolom persegi panjang
const COLS = 24;

// otomatis menghitung jumlah baris
const ROWS = Math.ceil(TOTAL_FLOWERS / COLS);

// jarak antar bunga
const SPACING_X = 60;
const SPACING_Y = 55;

export const FlowerData = Array.from(
  { length: TOTAL_FLOWERS },
  (_, index) => {

    const col = index % COLS;
    const row = Math.floor(index / COLS);

    // posisi dasar persegi panjang
    const baseX =
      (col - (COLS - 1) / 2) * SPACING_X;

    const baseY =
      (row - (ROWS - 1) / 2) * SPACING_Y;

    // agar tidak terlalu rapi
const r = Math.random() * 45;
const a = Math.random() * Math.PI * 2;

const targetX =
  baseX + Math.cos(a) * r;

const targetY =
  baseY + Math.sin(a) * r;

    return {

      id: index,

      image:
        flowerImages[
          Math.floor(
            Math.random() * flowerImages.length
          )
        ],

      // posisi akhir
      targetX,
      targetY,

      // sudut awal spiral
angle: (index / TOTAL_FLOWERS) * Math.PI * 2,

orbitRadius: 600 + Math.random() * 100,

      // rotasi bunga
      rotate:
        Math.random() * 1080,

      // ukuran bunga
      size:
        90 +
        Math.random() * 40,

      // lama animasi
duration: 4.5 + Math.random() * 0.5,

angularSpeed: 0.8 + Math.random() * 0.6,

      // delay bertahap
delay: Math.random() * 0.5,

      // wave
      wave:
        Math.floor(index / 20),

      // skala akhir
      scale:
        0.9 +
        Math.random() * 0.3,
    };
  }
);

export function getWaveFlowers(wave) {

  if (wave === undefined || wave === null) {
    return FlowerData;
  }

  return FlowerData.filter(
    (flower) => flower.wave === wave
  );
}