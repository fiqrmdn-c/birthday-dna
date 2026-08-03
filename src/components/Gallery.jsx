"use client";

const photos = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
  "/images/foto5.jpg",
  "/images/foto6.jpg",
];

export default function Gallery() {
  return (
    <section className="min-h-screen py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h2
          className="text-center text-white text-6xl mb-20"
          style={{
            fontFamily: "GreatVibes",
          }}
        >
          Kenangan Bersamamu
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={photo}
                alt={`Foto ${index + 1}`}
                className="w-full h-[500px] object-cover"
                draggable={false}
              />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}