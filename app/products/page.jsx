import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata = {
  title: "Mahsulotlar",
};

function Stars({ rate }) {
  const full = Math.round(rate);
  return (
    <span className="flex items-center text-sm leading-none text-amber-400" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= full ? "text-amber-400" : "text-slate-300"}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Sarlavha */}
        <header className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Mahsulotlar
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Eng yaxshi takliflarni kashf eting
            </p>
          </div>
          <span className="inline-flex w-fit items-center rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 ring-1 ring-inset ring-blue-200">
            {products.length} ta mahsulot
          </span>
        </header>

        {/* YouTube video */}
        <section className="mb-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-slate-900/10">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/tgsoGbCjctY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </section>

        {/* Mahsulotlar */}
        {products.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center text-lg text-slate-500">
            Hozircha mahsulotlar yo&apos;q.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-blue-200"
              >
                <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  {!product.inStock && (
                    <span className="absolute left-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      Tugagan
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {product.category}
                  </span>
                  <h2 className="mt-1 line-clamp-2 text-lg font-bold leading-snug text-slate-900">
                    {product.title}
                  </h2>

                  <div className="mt-2 flex items-center gap-2">
                    <Stars rate={product.rating.rate} />
                    <span className="text-sm font-medium text-slate-700">
                      {product.rating.rate}
                    </span>
                    <span className="text-sm text-slate-400">
                      ({product.rating.count})
                    </span>
                  </div>

                  <span className="mt-auto pt-5">
                    <span className="block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition group-hover:bg-blue-700">
                      Savatga qo&apos;shish
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
