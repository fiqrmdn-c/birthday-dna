"use client";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="min-h-screen flex items-center justify-center px-6 py-24">

      <div className="max-w-3xl text-center text-white">

        <h2
          className="text-6xl mb-10"
          style={{
            fontFamily: "GreatVibes",
          }}
        >
          Thank You
        </h2>

        <p className="text-xl leading-10 text-gray-100">
          Terima kasih sudah meluangkan waktu untuk
          melihat setiap bagian dari halaman ini.
        </p>

        <p className="text-xl leading-10 text-gray-100 mt-8">
          Semoga hari ulang tahunmu dipenuhi kebahagiaan,
          kesehatan, dan orang-orang yang selalu
          menyayangimu.
        </p>

        <p className="text-xl leading-10 text-gray-100 mt-8">
          Selamat bertambah usia.
          Semoga semua doa baik segera menjadi nyata.
        </p>

        <button
          onClick={scrollToTop}
          className="mt-16 px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition"
        >
          Kembali ke Atas
        </button>

      </div>

    </footer>
  );
}