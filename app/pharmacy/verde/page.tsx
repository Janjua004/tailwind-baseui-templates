import type { Metadata } from "next"
import Image from "next/image"
import { Leaf, ShoppingBag, ArrowRight, Sprout, FlaskConical, Recycle, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Verde — Clean Wellness Supplements",
  description: "Plant-based supplements, formulated by experts, made without the junk.",
}

const products = [
  { name: "Daily Greens", price: "$34", note: "Energy & immunity", img: "/pharmacy/verde-product.webp" },
  { name: "Deep Sleep", price: "$28", note: "Magnesium & valerian", img: "/pharmacy/verde-hero.webp" },
  { name: "Clear Focus", price: "$32", note: "Lion's mane & B12", img: "/pharmacy/verde-product.webp" },
]

export default function VerdePage() {
  return (
    <div className="min-h-screen bg-[#f6f4ee] text-stone-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#f6f4ee]/90 backdrop-blur border-b border-stone-200/70">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-serif text-2xl text-emerald-900">
            <Leaf className="h-6 w-6 text-emerald-700" /> Verde
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a href="#shop" className="hover:text-emerald-800">Shop</a>
            <a href="#science" className="hover:text-emerald-800">Our science</a>
            <a href="#about" className="hover:text-emerald-800">About</a>
          </nav>
          <button aria-label="Cart" className="relative">
            <ShoppingBag className="h-5 w-5 text-emerald-900" />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-emerald-700 text-[10px] text-white flex items-center justify-center">1</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-700 mb-5">Clean. Plant-based. Proven.</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-emerald-950 text-balance">
            Wellness, without the junk
          </h1>
          <p className="mt-6 text-stone-600 leading-relaxed max-w-md">
            Third-party tested supplements formulated by nutritionists. No fillers, no synthetic nasties — just what your
            body actually needs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 bg-emerald-800 text-emerald-50 px-7 py-3.5 rounded-full text-sm hover:bg-emerald-900 transition-colors">
              Shop supplements <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#science" className="inline-flex items-center gap-2 border border-emerald-800/30 px-7 py-3.5 rounded-full text-sm text-emerald-900 hover:bg-emerald-800/5 transition-colors">
              The science
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-stone-500">
            <span className="flex items-center gap-2"><Sprout className="h-4 w-4 text-emerald-700" /> Vegan</span>
            <span className="flex items-center gap-2"><FlaskConical className="h-4 w-4 text-emerald-700" /> Lab tested</span>
            <span className="flex items-center gap-2"><Recycle className="h-4 w-4 text-emerald-700" /> Refillable</span>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
          <Image src="/pharmacy/verde-hero.webp" alt="Verde supplement bottles with botanicals" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="reveal mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-4xl text-emerald-950">Bestsellers</h2>
          <p className="mt-3 text-stone-600">Loved by 40,000+ members on their wellness journey.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-[#eae6dc]">
                <Image src={p.img || "/placeholder.svg"} alt={p.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl text-emerald-950">{p.name}</h3>
                  <span className="text-emerald-800 font-medium">{p.price}</span>
                </div>
                <p className="text-sm text-stone-500 mt-1">{p.note}</p>
                <button className="mt-4 w-full bg-emerald-800 text-emerald-50 rounded-full py-2.5 text-sm hover:bg-emerald-900 transition-colors">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Science band */}
      <section id="science" className="reveal bg-emerald-900 text-emerald-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1">
            <h2 className="font-serif text-4xl text-balance">Formulated on evidence, not hype</h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-3 gap-8">
            {[
              ["100%", "Traceable ingredients"],
              ["0", "Artificial fillers"],
              ["3rd", "Party lab tested"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-5xl text-emerald-300">{n}</p>
                <p className="mt-2 text-emerald-100/80 text-sm leading-relaxed">{l}</p>
              </div>
            ))}
            <p className="sm:col-span-3 text-emerald-100/80 leading-relaxed">
              Every Verde formula is developed with registered nutritionists and independently tested for purity and
              potency. We publish every result, so you always know exactly what you&apos;re taking.
            </p>
          </div>
        </div>
      </section>

      {/* Review */}
      <section id="about" className="reveal mx-auto max-w-3xl px-6 py-16 md:py-24 text-center">
        <div className="flex justify-center gap-1 mb-6 text-emerald-700">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
        </div>
        <blockquote className="font-serif text-2xl md:text-3xl text-emerald-950 leading-snug text-balance">
          “Finally supplements I trust. I feel the difference, and I love that everything is transparent and refillable.”
        </blockquote>
        <p className="mt-6 text-sm text-stone-500 uppercase tracking-wider">Sofia K. — Verde member</p>
      </section>

      {/* Newsletter */}
      <section className="reveal bg-[#eae6dc]">
        <div className="mx-auto max-w-xl px-6 py-16 text-center">
          <Leaf className="h-8 w-8 mx-auto text-emerald-700 mb-4" />
          <h2 className="font-serif text-3xl text-emerald-950">Get 15% off your first order</h2>
          <p className="mt-3 text-stone-600">Plus wellness tips from our nutritionists, twice a month.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input type="email" placeholder="Email address" className="flex-1 bg-white rounded-full px-5 py-3 text-sm focus:outline-none" />
            <button className="rounded-full bg-emerald-800 text-emerald-50 px-7 py-3 text-sm hover:bg-emerald-900 transition-colors">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200/70">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p className="flex items-center gap-2 font-serif text-xl text-emerald-900"><Leaf className="h-5 w-5 text-emerald-700" /> Verde</p>
          <p>Clean supplements · Vegan · Lab tested · Refillable</p>
          <p className="text-stone-400">© 2026 — Template demo</p>
        </div>
      </footer>
    </div>
  )
}
