import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "สินค้าของเรา | Nova",
  description: "เลือกชมสินค้าและบริการทั้งหมดของ Nova",
};

const categories = ["ทั้งหมด", "ซอฟต์แวร์", "อุปกรณ์", "บริการ"];

const products = [
  { name: "Nova Studio", category: "ซอฟต์แวร์", price: "฿1,290", old: "฿1,590", rating: "4.9", badge: "ขายดี", from: "from-indigo-500", to: "to-fuchsia-500", desc: "เครื่องมือออกแบบครบวงจรสำหรับทีมครีเอทีฟ" },
  { name: "Nova Cloud", category: "บริการ", price: "฿490", old: "", rating: "4.8", badge: "ใหม่", from: "from-cyan-400", to: "to-indigo-500", desc: "พื้นที่เก็บข้อมูลบนคลาวด์ ปลอดภัยและรวดเร็ว" },
  { name: "Nova Pad Pro", category: "อุปกรณ์", price: "฿8,900", old: "฿9,900", rating: "4.7", badge: "ลด 10%", from: "from-amber-400", to: "to-rose-500", desc: "แท็บเล็ตสำหรับงานสร้างสรรค์ หน้าจอคมชัด" },
  { name: "Nova Analytics", category: "ซอฟต์แวร์", price: "฿990", old: "", rating: "4.8", badge: "", from: "from-emerald-400", to: "to-cyan-500", desc: "วิเคราะห์ข้อมูลเชิงลึกพร้อมแดชบอร์ดเรียลไทม์" },
  { name: "Nova Buds", category: "อุปกรณ์", price: "฿2,490", old: "฿2,990", rating: "4.6", badge: "ลด 17%", from: "from-fuchsia-500", to: "to-purple-600", desc: "หูฟังไร้สาย ตัดเสียงรบกวนได้ยอดเยี่ยม" },
  { name: "Nova Care", category: "บริการ", price: "฿299", old: "", rating: "5.0", badge: "", from: "from-sky-400", to: "to-blue-600", desc: "แพ็กเกจดูแลหลังการขายและซัพพอร์ตเร่งด่วน" },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
            N
          </span>
          Nova
        </Link>
        <Link
          href="/"
          className="text-sm font-medium text-zinc-600 transition hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-white"
        >
          ← กลับหน้าหลัก
        </Link>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24">
        <section className="py-14 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            สินค้า<span className="bg-gradient-to-r from-indigo-500 to-fuchsia-500 bg-clip-text text-transparent">ของเรา</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">
            เลือกสินค้าและบริการที่เหมาะกับการทำงานของคุณ
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-5 py-2 text-sm font-medium ${
                  i === 0
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                    : "border border-zinc-300 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </section>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${p.from} ${p.to}`}>
                <span className="text-6xl font-black text-white/90 transition group-hover:scale-110">
                  {p.name.charAt(5)}
                </span>
                {p.badge && (
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-900">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500 dark:text-zinc-400">{p.category}</span>
                  <span className="text-yellow-500">★ {p.rating}</span>
                </div>
                <h2 className="mt-2 text-lg font-semibold">{p.name}</h2>
                <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold">{p.price}</span>
                    {p.old && (
                      <span className="ml-2 text-sm text-zinc-400 line-through">{p.old}</span>
                    )}
                  </div>
                  <button
                    type="button"
                    className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    ใส่ตะกร้า
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © 2026 Nova. สงวนลิขสิทธิ์
      </footer>
    </div>
  );
}
