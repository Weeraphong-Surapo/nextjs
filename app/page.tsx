const features = [
  {
    icon: "⚡",
    title: "เร็วทะลุขีดจำกัด",
    desc: "โหลดไวด้วยสถาปัตยกรรมสมัยใหม่ ผู้ใช้ไม่ต้องรอ ธุรกิจไม่พลาดโอกาส",
  },
  {
    icon: "🎨",
    title: "ดีไซน์สวยงาม",
    desc: "ส่วนประกอบพร้อมใช้ ปรับแต่งได้ง่าย รองรับทั้งโหมดสว่างและมืด",
  },
  {
    icon: "🔒",
    title: "ปลอดภัยทุกชั้น",
    desc: "ปกป้องข้อมูลของคุณด้วยมาตรฐานความปลอดภัยระดับองค์กร",
  },
  {
    icon: "📈",
    title: "เติบโตไปพร้อมกัน",
    desc: "ขยายระบบได้ไม่จำกัด ตั้งแต่ทีมเล็กจนถึงองค์กรขนาดใหญ่",
  },
  {
    icon: "🤝",
    title: "ทำงานร่วมกันง่าย",
    desc: "แชร์งาน คอมเมนต์ และติดตามความคืบหน้าได้แบบเรียลไทม์",
  },
  {
    icon: "💬",
    title: "ซัพพอร์ตตลอด 24/7",
    desc: "ทีมงานพร้อมช่วยเหลือคุณทุกเมื่อ ไม่ว่าจะเป็นเวลาใด",
  },
];

const plans = [
  {
    name: "Starter",
    price: "฿0",
    note: "สำหรับเริ่มต้นทดลองใช้",
    items: ["1 โปรเจกต์", "สมาชิก 3 คน", "ซัพพอร์ตทางอีเมล"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "฿490",
    note: "ต่อเดือน สำหรับทีมที่กำลังโต",
    items: ["โปรเจกต์ไม่จำกัด", "สมาชิก 20 คน", "รายงานเชิงลึก", "ซัพพอร์ตเร่งด่วน"],
    highlight: true,
  },
  {
    name: "Business",
    price: "฿1,490",
    note: "ต่อเดือน สำหรับองค์กร",
    items: ["ทุกอย่างใน Pro", "สมาชิกไม่จำกัด", "SSO & Audit log", "ผู้ดูแลเฉพาะ"],
    highlight: false,
  },
];

const stats = [
  { value: "10K+", label: "ผู้ใช้งาน" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "คะแนนรีวิว" },
  { value: "24/7", label: "ซัพพอร์ต" },
];

const testimonials = [
  {
    name: "ณัฐพล ส.",
    role: "ผู้ก่อตั้ง, StartUp Co.",
    text: "ใช้งานง่ายมาก ทีมของเราเริ่มใช้ได้ภายในวันเดียว และเห็นผลลัพธ์ชัดเจนตั้งแต่สัปดาห์แรก",
  },
  {
    name: "พิมพ์ชนก ท.",
    role: "Product Manager",
    text: "ดีไซน์สวย ใช้ลื่นไหล ลูกค้าชมบ่อยมาก เป็นเครื่องมือที่ขาดไม่ได้แล้วตอนนี้",
  },
  {
    name: "ธีรภัทร ว.",
    role: "Lead Developer",
    text: "โค้ดสะอาด ปรับแต่งง่าย ประหยัดเวลาพัฒนาไปได้หลายสัปดาห์เลยทีเดียว",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-0 flex justify-center"
      >
        <div className="h-[500px] w-[900px] rounded-full bg-gradient-to-r from-indigo-500/30 via-fuchsia-500/30 to-cyan-400/30 blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-2 text-lg font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
            N
          </span>
          Nova
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-indigo-600 dark:hover:text-white">
            ฟีเจอร์
          </a>
          <a href="#pricing" className="transition hover:text-indigo-600 dark:hover:text-white">
            ราคา
          </a>
          <a href="#reviews" className="transition hover:text-indigo-600 dark:hover:text-white">
            รีวิว
          </a>
        </nav>
        <a
          href="#pricing"
          className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          เริ่มต้นใช้งาน
        </a>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="mx-auto max-w-4xl px-6 pb-24 pt-20 text-center sm:pt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-600 dark:text-indigo-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
            เปิดตัวเวอร์ชันใหม่แล้ววันนี้
          </span>
          <h1 className="mt-8 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            สร้างสิ่งยอดเยี่ยม
            <br />
            <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              ได้เร็วกว่าที่เคย
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            แพลตฟอร์มที่ช่วยให้ทีมของคุณทำงานได้เร็วขึ้น ง่ายขึ้น และสวยงามขึ้น
            เริ่มต้นฟรี ไม่ต้องใช้บัตรเครดิต
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="w-full rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:scale-105 hover:shadow-indigo-500/50 sm:w-auto"
            >
              ทดลองใช้ฟรี
            </a>
            <a
              href="#features"
              className="w-full rounded-full border border-zinc-300 px-8 py-3.5 text-base font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900 sm:w-auto"
            >
              ดูฟีเจอร์ทั้งหมด
            </a>
          </div>

          {/* Mock preview */}
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-zinc-200 bg-white/70 p-3 shadow-2xl backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
            <div className="flex items-center gap-1.5 px-2 pb-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2 h-40 rounded-xl bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20" />
              <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-400/20 to-indigo-500/20" />
              <div className="h-24 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
              <div className="h-24 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
              <div className="h-24 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-5xl px-6">
          <dl className="grid grid-cols-2 gap-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <dt className="text-sm text-zinc-500 dark:text-zinc-400">{s.label}</dt>
                <dd className="mt-1 text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-28">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              ทุกอย่างที่คุณต้องการ
            </h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              ฟีเจอร์ครบครัน ออกแบบมาเพื่อให้การทำงานของคุณราบรื่นที่สุด
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/15 to-fuchsia-500/15 text-2xl">
                  {f.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 leading-7 text-zinc-600 dark:text-zinc-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="bg-zinc-50 py-28 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                แพ็กเกจที่เหมาะกับคุณ
              </h2>
              <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                เลือกแผนที่ใช่ ยกเลิกหรือเปลี่ยนแผนได้ทุกเมื่อ
              </p>
            </div>
            <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
              {plans.map((p) => (
                <div
                  key={p.name}
                  className={`relative flex flex-col rounded-2xl p-8 ${
                    p.highlight
                      ? "border-2 border-indigo-500 bg-white shadow-2xl shadow-indigo-500/20 dark:bg-zinc-900 lg:scale-105"
                      : "border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900"
                  }`}
                >
                  {p.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-1 text-xs font-semibold text-white">
                      ยอดนิยม
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <p className="mt-4 text-4xl font-extrabold">{p.price}</p>
                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{p.note}</p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500/15 text-xs text-indigo-600 dark:text-indigo-300">
                          ✓
                        </span>
                        {i}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`mt-8 rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                      p.highlight
                        ? "bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white hover:opacity-90"
                        : "border border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    }`}
                  >
                    เลือกแผนนี้
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="mx-auto max-w-6xl px-6 py-28">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            เสียงจากผู้ใช้จริง
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="text-yellow-400" aria-label="5 ดาว">
                  ★★★★★
                </div>
                <blockquote className="mt-4 leading-7 text-zinc-700 dark:text-zinc-300">
                  “{t.text}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-sm font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-zinc-500 dark:text-zinc-400">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 pb-28">
          <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-cyan-500 px-8 py-16 text-center text-white shadow-2xl shadow-indigo-500/30">
            <h2 className="text-3xl font-bold sm:text-4xl">พร้อมเริ่มต้นแล้วหรือยัง?</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              ร่วมกับผู้ใช้งานกว่า 10,000 คน และยกระดับการทำงานของคุณวันนี้
            </p>
            <a
              href="#pricing"
              className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 font-semibold text-indigo-600 transition hover:scale-105"
            >
              เริ่มใช้งานฟรี
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        © 2026 Nova. สงวนลิขสิทธิ์
      </footer>
    </div>
  );
}
