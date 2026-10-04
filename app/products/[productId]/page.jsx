import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

export default async function ProductPage({ params }) {
  // Next.js 15+ da params — Promise, shuning uchun await kerak
  const { productId } = await params;
  const product = products.find((item) => String(item.id) === productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
        >
          <span aria-hidden="true">←</span> Orqaga
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-8 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200 md:grid-cols-2 md:gap-12 md:p-10">
          {/* Rasm */}
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Ma'lumot */}
          <div className="flex flex-col justify-center">
            <span className="w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 ring-1 ring-inset ring-blue-200">
              {product.category}
            </span>

            <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <span className="text-lg text-amber-400" aria-hidden="true">
                ★
              </span>
              <span className="font-semibold text-slate-800">
                {product.rating.rate}
              </span>
              <span className="text-slate-400">
                ({product.rating.count} ta sharh)
              </span>
            </div>

            <p className="mt-6 text-4xl font-black text-slate-900">
              {product.price.toLocaleString("ru-RU")}{" "}
              <span className="text-xl font-bold text-slate-500">UZS</span>
            </p>

            <p
              className={`mt-3 inline-flex w-fit items-center gap-2 text-sm font-semibold ${
                product.inStock ? "text-emerald-600" : "text-rose-600"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  product.inStock ? "bg-emerald-500" : "bg-rose-500"
                }`}
              />
              {product.inStock ? "Omborda mavjud" : "Omborda tugagan"}
            </p>

            <button
              type="button"
              disabled={!product.inStock}
              className="mt-8 w-full rounded-2xl bg-blue-600 px-6 py-4 text-lg font-bold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
            >
              Savatga qo&apos;shish
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
