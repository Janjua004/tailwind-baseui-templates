import type { Metadata } from "next"
import Image from "next/image"
import { TreePine, ShoppingBag, ArrowRight, Recycle, Hand, ShieldCheck, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Timber & Co — Heirloom Wooden Toys",
  description: "Sustainably crafted wooden toys designed to be played with for generations.",
}

const products = [
  { name: "Stacking Rainbow", price: "$48", img: "/toys/timber-product.webp" },
  { name: "Balance Blocks", price: "$36", img: "/toys/timber-hero.webp" },
  { name: "Nesting Bowls", price: "$42", img: "/toys/timber-product.webp" },
]

export default function TimberPage() {
  return (
    <div className="min-h-screen bg-[#f3efe7] text-stone-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#f3efe7]/90 backdrop-blur border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-serif text-2xl text-stone-800">
            <TreePine className="h-6 w-6 text-amber-700" /> Timber &amp; Co
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a href="#shop" className="hover:text-amber-800">Shop</a>
            <a href="#story" className="hover:text-amber-800">Our craft</a>
            <a href="#values" className="hover:text-amber-800">Sustainability</a>
          </nav>
          <button aria-label="Cart" className="relative">
            <ShoppingBag className="h-5 w-5 text-stone-800" />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-amber-700 text-[10px] text-white flex items-center justify-center">2</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-amber-700 mb-5">Handcrafted since 2014</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-stone-900 text-balance">
            Toys made to be passed down
          </h1>
          <p className="mt-6 text-stone-600 leading-relaxed max-w-md">
            Open-ended wooden toys, made from FSC-certified timber and finished with non-toxic oils. Built for little
            hands and big imaginations — and for the next generation too.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#shop" className="inline-flex items-center gap-2 bg-stone-800 text-stone-50 px-7 py-3.5 rounded-full text-sm hover:bg-stone-900 transition-colors">
              Shop the collection <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#story" className="inline-flex items-center gap-2 border border-stone-300 px-7 py-3.5 rounded-full text-sm text-stone-700 hover:border-stone-800 transition-colors">
              Our craft
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-stone-500">
            <span className="flex items-center gap-2"><TreePine className="h-4 w-4 text-amber-700" /> FSC timber</span>
            <span className="flex items-center gap-2"><Hand className="h-4 w-4 text-amber-700" /> Hand-finished</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-amber-700" /> Non-toxic</span>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden">
          <Image src="/toys/timber-hero.webp" alt="Handcrafted wooden toys by Timber & Co" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="reveal mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-4xl text-stone-900">The collection</h2>
          <p className="mt-3 text-stone-600">Timeless designs that grow with your child.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#e7e1d4] mb-4">
                <Image src={p.img || "/placeholder.svg"} alt={p.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-stone-900">{p.name}</h3>
                <span className="text-amber-800 font-medium">{p.price}</span>
              </div>
              <button className="mt-3 w-full border border-stone-300 rounded-full py-2.5 text-sm hover:bg-stone-800 hover:text-stone-50 hover:border-stone-800 transition-colors">Add to cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Story split */}
      <section id="story" className="reveal bg-stone-800 text-stone-100">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden order-2 md:order-1">
            <Image src="/toys/timber-product.webp" alt="Timber & Co craftsmanship" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="order-1 md:order-2 max-w-md">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-400 mb-5">Our craft</p>
            <h2 className="font-serif text-4xl leading-tight text-balance">Slow-made in a family workshop</h2>
            <p className="mt-6 text-stone-300 leading-relaxed">
              Each toy is turned, sanded, and oiled by hand in our small workshop. We use only sustainably sourced
              hardwoods and finishes safe enough to chew on — because that&apos;s exactly what toddlers do.
            </p>
            <a href="#values" className="mt-8 inline-flex items-center gap-2 border border-stone-500 px-7 py-3.5 rounded-full text-sm hover:bg-stone-100 hover:text-stone-900 transition-colors">
              Our promise <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="reveal mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: TreePine, t: "One toy, one tree", d: "We plant a tree for every toy sold." },
            { icon: Recycle, t: "Zero plastic", d: "Plastic-free products and packaging." },
            { icon: ShieldCheck, t: "Built to last", d: "Repair or replace, forever guaranteed." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t}>
              <span className="h-14 w-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto"><Icon className="h-7 w-7" /></span>
              <h3 className="mt-4 font-serif text-2xl text-stone-900">{t}</h3>
              <p className="mt-2 text-stone-600 text-sm leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Review */}
      <section className="reveal bg-[#e7e1d4]">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-24 text-center">
          <div className="flex justify-center gap-1 mb-6 text-amber-700">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
          <blockquote className="font-serif text-2xl md:text-3xl text-stone-900 leading-snug text-balance">
            “The most beautiful toys we own. Our daughter plays with them daily and they still look brand new.”
          </blockquote>
          <p className="mt-6 text-sm text-stone-500 uppercase tracking-wider">Hannah &amp; Theo — Melbourne</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-stone-500">
          <p className="flex items-center gap-2 font-serif text-xl text-stone-800"><TreePine className="h-5 w-5 text-amber-700" /> Timber &amp; Co</p>
          <p>FSC timber · Hand-finished · Plastic-free · Tree planted per order</p>
          <p className="text-stone-400">© 2026 — Template demo</p>
        </div>
      </footer>
    </div>
  )
}
