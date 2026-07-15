import Image from "next/image"
import { Coffee, Clock, MapPin, AtSign, Croissant, Leaf } from "lucide-react"

const menu = [
  { name: "House Latte", price: "$4.50", desc: "Double shot, silky microfoam, latte art on the house." },
  { name: "Butter Croissant", price: "$3.75", desc: "Laminated over three days, baked fresh every morning." },
  { name: "Avocado Toast", price: "$9.00", desc: "Sourdough, smashed avocado, chili, lemon, soft egg." },
  { name: "Cold Brew", price: "$5.00", desc: "Steeped 18 hours, smooth and low-acid." },
  { name: "Matcha Bun", price: "$4.25", desc: "Stone-ground matcha swirl, sweet glaze." },
  { name: "Seasonal Granola", price: "$7.50", desc: "House-toasted oats, yogurt, honey, fresh fruit." },
]

export default function DaybreakCafe() {
  return (
    <div className="min-h-screen bg-[#fdf6ec] text-[#3d2c1e] font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-[#e4d3bd] bg-[#fdf6ec]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-[#c0632f]" />
            <span className="font-serif text-xl font-bold tracking-tight">Daybreak</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#menu" className="hover:text-[#c0632f]">Menu</a>
            <a href="#about" className="hover:text-[#c0632f]">Our Story</a>
            <a href="#visit" className="hover:text-[#c0632f]">Visit</a>
          </nav>
          <a href="#visit" className="rounded-full bg-[#c0632f] px-5 py-2 text-sm font-semibold text-[#fdf6ec] transition hover:bg-[#a5501f]">
            Find Us
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f0e0cb] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#c0632f]">
            <Leaf className="h-3.5 w-3.5" /> Locally roasted
          </span>
          <h1 className="mt-6 text-balance font-serif text-5xl font-bold leading-tight md:text-6xl">
            Your morning ritual, made warmer.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-[#6b5541]">
            A neighborhood cafe serving small-batch coffee and pastries baked fresh before sunrise. Pull up a chair and stay a while.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#menu" className="rounded-full bg-[#c0632f] px-7 py-3 text-sm font-semibold text-[#fdf6ec] transition hover:bg-[#a5501f]">
              See the menu
            </a>
            <a href="#visit" className="rounded-full border border-[#c0632f] px-7 py-3 text-sm font-semibold text-[#c0632f] transition hover:bg-[#f0e0cb]">
              Opening hours
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
          <Image src="/restaurant/daybreak-hero.webp" alt="Latte and pastries on a sunny table" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="reveal mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c0632f]">The Menu</span>
            <h2 className="mt-2 font-serif text-4xl font-bold">Baked & brewed daily</h2>
          </div>
          <Croissant className="hidden h-10 w-10 text-[#c0632f] md:block" />
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menu.map((item) => (
            <div key={item.name} className="rounded-2xl border border-[#e4d3bd] bg-[#fbeedd] p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-xl font-bold">{item.name}</h3>
                <span className="font-semibold text-[#c0632f]">{item.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#6b5541]">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="reveal bg-[#f0e0cb]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lg">
            <Image src="/restaurant/daybreak-pastry.webp" alt="Fresh croissants" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c0632f]">Our Story</span>
            <h2 className="mt-2 font-serif text-4xl font-bold leading-tight">From a single cart to your favorite corner.</h2>
            <p className="mt-5 text-pretty leading-relaxed text-[#6b5541]">
              Daybreak started as a coffee cart at the Sunday market. Ten years later, we still roast in small batches, laminate our own croissants, and know most of our regulars by name.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[
                { n: "10+", l: "Years brewing" },
                { n: "6am", l: "Fresh daily" },
                { n: "100%", l: "Local beans" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl bg-[#fdf6ec] p-4">
                  <div className="font-serif text-2xl font-bold text-[#c0632f]">{s.n}</div>
                  <div className="mt-1 text-xs text-[#6b5541]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit */}
      <section id="visit" className="reveal mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[#e4d3bd] bg-[#fbeedd] p-8">
            <MapPin className="h-7 w-7 text-[#c0632f]" />
            <h3 className="mt-4 font-serif text-xl font-bold">Find us</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b5541]">48 Maple Street<br />Old Town District</p>
          </div>
          <div className="rounded-2xl border border-[#e4d3bd] bg-[#fbeedd] p-8">
            <Clock className="h-7 w-7 text-[#c0632f]" />
            <h3 className="mt-4 font-serif text-xl font-bold">Hours</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b5541]">Mon–Fri · 6am–4pm<br />Sat–Sun · 7am–5pm</p>
          </div>
          <div className="rounded-2xl border border-[#e4d3bd] bg-[#fbeedd] p-8">
            <AtSign className="h-7 w-7 text-[#c0632f]" />
            <h3 className="mt-4 font-serif text-xl font-bold">Say hello</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b5541]">@daybreakcafe<br />hello@daybreak.co</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e4d3bd] bg-[#f0e0cb]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[#6b5541] md:flex-row">
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5 text-[#c0632f]" />
            <span className="font-serif font-bold text-[#3d2c1e]">Daybreak</span>
          </div>
          <p>© {new Date().getFullYear()} Daybreak Cafe. Brewed with love.</p>
        </div>
      </footer>
    </div>
  )
}
