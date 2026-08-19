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
    <section className="min-h-screen px-3 py-10 sm:px-6 sm:py-16">

      <div className="max-w-6xl mx-auto">

        <div className="relative h-[680px] sm:h-[800px] md:h-[900px]">


          {/* =========================================
              FOTO 1
              DIAGONAL PANJANG
              DARI BAWAH TENGAH KE KIRI ATAS
          ========================================= */}

          <div
            className="
              absolute
              left-[20%]
              bottom-[5%]
              w-[120px]
              sm:left-[10%]
              sm:bottom-[6%]
              sm:w-[155px]
              md:left-[12%]
              md:bottom-[5%]
              md:w-[190px]
              lg:w-[220px]
              rotate-[-25deg]
              z-30
            "
          >
            <img
              src={photos[0]}
              alt="Foto diagonal"
              className="
                w-full
                h-[340px]
                sm:h-[460px]
                md:h-[580px]
                lg:h-[680px]
                object-cover
              "
              draggable={false}
            />
          </div>


          {/* =========================================
              FOTO 2
              FOTO SEDANG DI KIRI TENGAH
          ========================================= */}

          <div
            className="
              absolute
              left-[4%]
              top-[43%]
              w-[145px]
              sm:left-[5%]
              sm:top-[45%]
              sm:w-[195px]
              md:left-[6%]
              md:w-[235px]
              lg:w-[270px]
              rotate-[-5deg]
              z-40
            "
          >
            <img
              src={photos[1]}
              alt="Foto 2"
              className="
                w-full
                h-[180px]
                sm:h-[245px]
                md:h-[295px]
                lg:h-[330px]
                object-cover
              "
              draggable={false}
            />
          </div>


          {/* =========================================
              FOTO 3
              FOTO SEDANG DI KANAN TENGAH
          ========================================= */}

          <div
            className="
              absolute
              right-[4%]
              top-[38%]
              w-[150px]
              sm:right-[5%]
              sm:top-[39%]
              sm:w-[200px]
              md:right-[6%]
              md:w-[245px]
              lg:w-[280px]
              rotate-[5deg]
              z-40
            "
          >
            <img
              src={photos[2]}
              alt="Foto 3"
              className="
                w-full
                h-[185px]
                sm:h-[250px]
                md:h-[300px]
                lg:h-[335px]
                object-cover
              "
              draggable={false}
            />
          </div>


          {/* =========================================
              FOTO 4
              FOTO DI BAWAH FOTO KANAN
          ========================================= */}

          <div
            className="
              absolute
              right-[8%]
              bottom-[4%]
              w-[130px]
              sm:right-[9%]
              sm:bottom-[5%]
              sm:w-[180px]
              md:right-[10%]
              md:w-[220px]
              lg:w-[250px]
              rotate-[-7deg]
              z-50
            "
          >
            <img
              src={photos[3]}
              alt="Foto 4"
              className="
                w-full
                h-[155px]
                sm:h-[215px]
                md:h-[260px]
                lg:h-[295px]
                object-cover
              "
              draggable={false}
            />
          </div>


          {/* =========================================
              FOTO 5
              FOTO BESAR KANAN ATAS
          ========================================= */}

          <div
            className="
              absolute
              right-[6%]
              top-[2%]
              w-[180px]
              sm:right-[7%]
              sm:top-[3%]
              sm:w-[250px]
              md:right-[8%]
              md:w-[310px]
              lg:right-[9%]
              lg:w-[350px]
              rotate-[3deg]
              z-10
            "
          >
            <img
              src={photos[4]}
              alt="Foto 5"
              className="
                w-full
                h-[240px]
                sm:h-[330px]
                md:h-[410px]
                lg:h-[460px]
                object-cover
              "
              draggable={false}
            />
          </div>


          {/* =========================================
              TITLE
          ========================================= */}

          <h2
            className="
              absolute
              right-[12%]
              top-[48%]
              z-[60]
              text-4xl
              sm:right-[13%]
              sm:top-[47%]
              sm:text-5xl
              md:right-[15%]
              md:text-6xl
              text-black
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