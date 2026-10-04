export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-blue-400/30" />
        <span className="absolute inset-0 rounded-full border-4 border-blue-200" />
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-600 border-r-indigo-500" />
        <span className="h-4 w-4 animate-pulse rounded-full bg-blue-600" />
      </div>

      <p className="animate-pulse text-lg font-semibold tracking-wide text-slate-700">
        Ma&apos;lumotlar yuklanmoqda...
      </p>

      <div className="flex gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-indigo-500 [animation-delay:-0.15s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" />
      </div>
    </div>
  );
}
