import type { Metadata } from "next"
import Image from "next/image"
import { Rocket, ShoppingCart, Search, Truck, Gift, Sparkles, Star, ArrowRight, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "WonderBox — Toys That Spark Joy",
  description: "Handpicked toys and games for curious kids of every age.",
}

const products = [
  { name: "Cuddle Bear", price: "$24", age: "0-3", img: "/toys/wonderbox-plush.webp", color: "bg-rose-100" },
  { name: "Rainbow Blocks", price: "$32", age: "2-5", img: "/toys/wonderbox-hero.webp", color: "bg-amber-100" },
  { name: "Space Explorer", price: "$45", age: "5-8", img: "/toys/wonderbox-hero.webp", color: "bg-sky-100" },
  { name: "Puzzle Party", price: "$19", age: "4-7", img: "/toys/wonderbox-plush.webp", color: "bg-violet-100" },
]

const ages = [
  { label: "0-2 yrs", color: "bg-rose-500" },
  { label: "3-5 yrs", color: "bg-amber-500" },
  { label: "6-8 yrs", color: "bg-sky-500" },
  { label: "9-12 yrs", color: "bg-emerald-500" },
]

export default function WonderBoxPage() {
  return (
    <div className="min-h-screen bg-amber-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-amber-50/95 backdrop-blur border-b-2 border-amber-200">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center gap-4">
          <a href="#" className="flex items-center gap-2 font-extrabold text-xl text-rose-500 shrink-0">
            <span className="h-9 w-9 rounded-2xl bg-rose-500 text-white flex items-center justify-center rotate-6"><Rocket className="h-5 w-5" /></span>
            WonderBox
          </a>
          <div className="hidden md:flex flex-1 items-center bg-white rounded-full px-4 py-2.5 border-2 border-amber-200">
            <Search className="h-4 w-4 text-slate-400" />
            <input placeholder="Search for toys, games, gifts…" className="bg-transparent text-sm px-3 flex-1 focus:outline-none" />
          </div>
          <button aria-label="Cart" className="relative ml-auto md:ml-0">
            <ShoppingCart className="h-6 w-6 text-slate-700" />
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-rose-500 text-[11px] font-bold text-white flex items-center justify-center">3</span>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-14 md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 bg-rose-500 text-white rounded-full px-4 py-1.5 text-sm font-bold">
              <Sparkles className="h-4 w-4" /> Free gift wrapping!
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-[1] text-slate-900 text-balance">
              Toys that spark <span className="text-rose-500">big imaginations</span>
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed max-w-md text-lg">
              Handpicked, safety-tested, and endlessly fun. Discover the perfect toy for every age and every adventure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 bg-rose-500 text-white px-7 py-4 rounded-full text-sm font-bold hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30">
                Shop all toys <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#ages" className="inline-flex items-center gap-2 bg-white border-2 border-amber-200 px-7 py-4 rounded-full text-sm font-bold text-slate-700 hover:border-rose-300 transition-colors">
                Shop by age
              </a>
            </div>
          </div>
          <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl rotate-1">
            <Image src="/toys/wonderbox-hero.webp" alt="Colorful WonderBox toys" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="reveal mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Truck, t: "Free delivery", d: "On orders over $40" },
            { icon: Gift, t: "Free gift wrap", d: "On every order" },
            { icon: Star, t: "Safety tested", d: "Certified & age-rated" },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center gap-3 bg-white rounded-2xl p-4 border-2 border-amber-100">
              <span className="h-11 w-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center"><Icon className="h-5 w-5" /></span>
              <div>
                <p className="font-bold text-slate-900">{t}</p>
                <p className="text-sm text-slate-500">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by age */}
      <section id="ages" className="reveal mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Shop by age</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ages.map((a) => (
            <a key={a.label} href="#shop" className={`${a.color} rounded-3xl p-6 text-white flex flex-col justify-between aspect-[4/3] hover:scale-[1.02] transition-transform`}>
              <Heart className="h-7 w-7" />
              <div>
                <p className="text-2xl font-extrabold">{a.label}</p>
                <p className="text-sm text-white/80 mt-1 flex items-center gap-1">Explore <ArrowRight className="h-3.5 w-3.5" /></p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="reveal mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-slate-900">Most-loved toys</h2>
          <a href="#" className="text-sm text-rose-500 font-bold hover:underline underline-offset-4">See all</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <div key={i} className="group bg-white rounded-3xl p-3 border-2 border-transparent hover:border-amber-200 transition-colors">
              <div className={`relative aspect-square rounded-2xl overflow-hidden ${p.color}`}>
                <Image src={p.img || "/placeholder.svg"} alt={p.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-3 left-3 bg-white/90 text-slate-700 text-xs font-bold px-2.5 py-1 rounded-full">{p.age} yrs</span>
              </div>
              <div className="p-3">
                <h3 className="font-bold text-slate-900">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="font-extrabold text-rose-500">{p.price}</span>
                  <button className="h-9 w-9 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center group-hover:bg-rose-500 group-hover:text-white transition-colors" aria-label={`Add ${p.name}`}>
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gift banner */}
      <section className="reveal mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[2.5rem] bg-sky-500 text-white p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center overflow-hidden">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-bold"><Gift className="h-4 w-4" /> Gift finder</span>
            <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight text-balance">Not sure what to pick?</h2>
            <p className="mt-4 text-sky-50 max-w-md">Answer three quick questions and we&apos;ll match the perfect toy to their age and interests.</p>
            <a href="#" className="mt-7 inline-flex items-center gap-2 bg-white text-sky-600 px-7 py-4 rounded-full text-sm font-bold hover:bg-sky-50 transition-colors">
              Find the perfect gift <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image src="/toys/wonderbox-plush.webp" alt="WonderBox gift toy" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="flex items-center gap-2 font-extrabold text-white"><Rocket className="h-5 w-5 text-rose-400" /> WonderBox</p>
          <p>Free delivery over $40 · Safety-tested · Happy kids guaranteed</p>
          <p className="text-slate-500">© 2026 — Template demo</p>
        </div>
      </footer>
    </div>
  )
}
