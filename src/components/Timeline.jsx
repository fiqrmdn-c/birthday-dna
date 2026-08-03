"use client";

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-24
      "
    >
      <div
        className="
          max-w-4xl
          w-full
          bg-white/10
          backdrop-blur-md
          rounded-3xl
          p-10
          text-center
        "
      >
        <h2 className="text-5xl font-bold text-white">
          Untukmu 🌸
        </h2>

        <img
          src="/images/gerbera.png"
          alt="Gerbera"
          className="
            w-72
            mx-auto
            my-10
            select-none
          "
          draggable={false}
        />

        <p
          className="
            text-white
            text-lg
            leading-9
            text-justify
          "
        >
          Selamat ulang tahun, Topik.

          <br /><br />

          Semoga setiap harimu dipenuhi kebahagiaan,
          kesehatan, dan orang-orang yang selalu
          menyayangimu.

          <br /><br />

          Semoga setiap doa yang kamu panjatkan
          perlahan menemukan jalannya untuk menjadi
          kenyataan.

          <br /><br />

          Tetaplah menjadi pribadi yang baik,
          kuat, dan selalu percaya bahwa masih
          banyak hal indah yang menantimu di masa
          depan.

          <br /><br />

          Terima kasih karena sudah menjadi bagian
          dari cerita yang begitu berharga.
        </p>
      </div>
    </section>
  );
}