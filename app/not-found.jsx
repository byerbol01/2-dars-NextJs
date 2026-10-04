import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 text-center">
      {/* Fon bezaklari */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-[8rem] font-black leading-none tracking-tighter text-transparent drop-shadow-lg sm:text-[12rem]">
          404
        </h1>

        <h2 className="mt-2 text-2xl font-bold text-white sm:text-4xl">
          Sahifa topilmadi
        </h2>
        <p className="mt-4 max-w-md text-base text-slate-400">
          Siz izlayotgan sahifa mavjud emas, o&apos;chirilgan yoki manzil noto&apos;g&apos;ri
          kiritilgan bo&apos;lishi mumkin.
        </p>

        <Link
          href="/products"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/40 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-400/50"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true">
            ←
          </span>
          Mahsulotlarga qaytish
        </Link>
      </div>
    </div>
  );
}
