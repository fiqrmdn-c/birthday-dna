"use client";

const photos = [
  "/images/foto1.png",
  "/images/foto2.png",
  "/images/foto3.png",
  "/images/foto4.png",
  "/images/foto5.png",
];

export default function Gallery() {
  return (
    <section className="relative w-full px-0 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-[1024px]">

        <div
          className="
            relative
            w-full
            aspect-[1024/1448]
          "
        >

          {/* FOTO 1 */}

          <div
            className="
              absolute
              z-20

              left-[0%]
              top-[12.5%]
              w-[90%]

              sm:left-[2%]
              sm:top-[11%]
              sm:w-[70%]

              md:left-[5%]
              md:top-[10%]
              md:w-[55%]

              lg:left-[8%]
              lg:top-[9%]
              lg:w-[45%]

              rotate-[-11deg]
            "
          >
            <img
              src={photos[0]}
              alt="Foto 1"
              className="block w-full h-auto object-contain"
              draggable={false}
            />
          </div>


          {/* FOTO 5 */}

          <div
            className="
              absolute
              z-10

              left-[57%]
              top-[0%]
              w-[85%]

              sm:left-[54%]
              sm:top-[1%]
              sm:w-[68%]

              md:left-[52%]
              md:top-[2%]
              md:w-[52%]

              lg:left-[50%]
              lg:top-[3%]
              lg:w-[43%]

              rotate-[3deg]
            "
          >
            <img
              src={photos[4]}
              alt="Foto 5"
              className="block w-full h-auto object-contain"
              draggable={false}
            />
          </div>


          {/* FOTO 3 */}

          <div
            className="
              absolute
              z-50

              left-[22%]
              top-[8%]
              w-[75%]

              sm:left-[25%]
              sm:top-[10%]
              sm:w-[60%]

              md:left-[28%]
              md:top-[12%]
              md:w-[48%]

              lg:left-[30%]
              lg:top-[14%]
              lg:w-[40%]

              rotate-[7deg]
            "
          >
            <img
              src={photos[2]}
              alt="Foto 3"
              className="block w-full h-auto object-contain"
              draggable={false}
            />
          </div>


          {/* FOTO 2 */}

          <div
            className="
              absolute
              z-40

              left-[0%]
              top-[24%]
              w-[75%]

              sm:left-[1%]
              sm:top-[27%]
              sm:w-[62%]

              md:left-[3%]
              md:top-[30%]
              md:w-[50%]

              lg:left-[5%]
              lg:top-[32%]
              lg:w-[42%]

              rotate-[-35deg]
            "
          >
            <img
              src={photos[1]}
              alt="Foto 2"
              className="block w-full h-auto object-contain"
              draggable={false}
            />
          </div>


          {/* FOTO 4 */}

          <div
            className="
              absolute
              z-40

              left-[28%]
              top-[40%]
              w-[75%]

              sm:left-[30%]
              sm:top-[44%]
              sm:w-[62%]

              md:left-[34%]
              md:top-[48%]
              md:w-[50%]

              lg:left-[38%]
              lg:top-[50%]
              lg:w-[42%]

              rotate-[8deg]
            "
          >
            <img
              src={photos[3]}
              alt="Foto 4"
              className="block w-full h-auto object-contain"
              draggable={false}
            />
          </div>


          {/* GALLERY */}

          <h2
            className="
              absolute
              z-[60]

              left-[90%]
              top-[65%]

              text-[7vw]

              sm:left-[82%]
              sm:top-[63%]
              sm:text-[5vw]

              md:left-[75%]
              md:top-[61%]
              md:text-[4.5vw]

              lg:left-[70%]
              lg:top-[60%]
              lg:text-[4vw]

              leading-none
              text-black
              whitespace-nowrap
            "
            style={{
              fontFamily: "GreatVibes",
            }}
          >
            Gallery
          </h2>

        </div>

      </div>
    </section>
  );
}