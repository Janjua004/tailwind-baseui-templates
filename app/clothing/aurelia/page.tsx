import type { Metadata } from "next"
import Image from "next/image"
import { Search, ShoppingBag, Menu, ArrowRight, Star, Truck, RefreshCw, ShieldCheck } from "lucide-react"
import { InteractiveForm } from "@/components/interactive-form"

export const metadata: Metadata = {
  title: "Aurélia — Modern Luxury Boutique",
  description: "Timeless essentials crafted from the finest natural materials.",
}

const products = [
  { name: "Cashmere Overcoat", price: "$680", img: "/clothing/aurelia-1.webp", tag: "New" },
  { name: "Silk Ivory Blouse", price: "$240", img: "/clothing/aurelia-2.webp", tag: "" },
  { name: "Tailored Trousers", price: "$310", img: "/clothing/aurelia-3.webp", tag: "" },
  { name: "Cashmere Overcoat", price: "$680", img: "/clothing/aurelia-1.webp", tag: "Bestseller" },
]

export default function AureliaPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Announcement */}
      <div className="bg-stone-900 text-stone-100 text-center text-xs tracking-[0.2em] uppercase py-2.5">
        Complimentary shipping on all orders over $200
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur border-b border-stone-200">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16 relative">
          <label htmlFor="mobile-menu-toggle" className="md:hidden cursor-pointer p-2 -ml-2" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </label>
          <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-600">
            <a href="#" className="hover:text-stone-900 transition-colors">New In</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Women</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Men</a>
            <a href="#" className="hover:text-stone-900 transition-colors">Collections</a>
          </nav>
          <a href="#" className="font-serif text-2xl tracking-wide absolute left-1/2 -translate-x-1/2">
            AURÉLIA
          </a>
          <div className="flex items-center gap-5">
            <button aria-label="Search"><Search className="h-5 w-5" /></button>
            <button aria-label="Cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-amber-800 text-[10px] text-white flex items-center justify-center">2</span>
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          <div className="hidden peer-checked:flex fixed inset-0 z-50 bg-stone-50 flex-col p-6 animate-fade-up">
            <div className="flex items-center justify-between h-16 border-b border-stone-200 -mx-6 px-6">
              <span className="font-serif text-xl tracking-wide">AURÉLIA</span>
              <label htmlFor="mobile-menu-toggle" className="cursor-pointer p-2" aria-label="Close menu">
                <span className="text-xl font-light">✕</span>
              </label>
            </div>
            <nav className="flex flex-col gap-6 text-lg text-stone-700 mt-8 text-left">
              <a href="#" className="hover:text-stone-900 border-b border-stone-100 pb-2">New In</a>
              <a href="#" className="hover:text-stone-900 border-b border-stone-100 pb-2">Women</a>
              <a href="#" className="hover:text-stone-900 border-b border-stone-100 pb-2">Men</a>
              <a href="#" className="hover:text-stone-900 border-b border-stone-100 pb-2">Collections</a>
            </nav>
            <div className="mt-auto border-t border-stone-200 pt-6 text-stone-500 text-sm text-left">
              <p>Complimentary shipping over $200</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
        <div className="max-w-md">
          <p className="text-sm uppercase tracking-[0.25em] text-amber-800 mb-5">Autumn Collection 2026</p>
          <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
            Quietly refined essentials
          </h1>
          <p className="mt-6 text-stone-600 leading-relaxed">
            Considered pieces made from natural fibres, designed to live in your wardrobe for years, not seasons.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#shop" className="inline-flex items-center gap-2 bg-stone-900 text-stone-50 px-7 py-3.5 text-sm tracking-wide hover:bg-stone-800 transition-colors">
              Shop the collection <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="text-sm underline underline-offset-4 text-stone-600 hover:text-stone-900">Lookbook</a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden">
          <Image src="/clothing/aurelia-hero.webp" alt="Model wearing the Aurélia autumn collection" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        </div>
      </section>

      {/* Trust bar */}
      <section className="reveal border-y border-stone-200 bg-stone-100/60">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-3 gap-6 py-8 text-sm">
          {[
            { icon: Truck, t: "Carbon-neutral delivery", s: "Worldwide shipping" },
            { icon: RefreshCw, t: "30-day returns", s: "Easy & free" },
            { icon: ShieldCheck, t: "Ethically made", s: "Certified ateliers" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-amber-800 shrink-0" />
              <div>
                <p className="font-medium">{t}</p>
                <p className="text-stone-500">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="reveal mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">The edit</h2>
            <p className="text-stone-500 mt-2">Our most-loved pieces this season</p>
          </div>
          <a href="#" className="hidden md:inline text-sm underline underline-offset-4 text-stone-600 hover:text-stone-900">View all</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10">
          {products.map((p, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-stone-100 mb-4">
                <Image src={p.img || "/placeholder.svg"} alt={p.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-stone-50 text-stone-900 text-[11px] uppercase tracking-wider px-2.5 py-1">{p.tag}</span>
                )}
              </div>
              <h3 className="text-sm font-medium">{p.name}</h3>
              <p className="text-sm text-stone-500 mt-0.5">{p.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial split */}
      <section className="reveal bg-stone-900 text-stone-100">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center py-16 md:py-24">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image src="/clothing/aurelia-hero.webp" alt="Aurélia craftsmanship" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="max-w-md">
            <p className="text-sm uppercase tracking-[0.25em] text-amber-500 mb-5">Our philosophy</p>
            <h2 className="font-serif text-4xl leading-tight text-balance">Made slowly, worn forever</h2>
            <p className="mt-6 text-stone-300 leading-relaxed">
              Every Aurélia garment is cut and finished in small family-run ateliers using traceable natural
              materials. We produce in limited runs to reduce waste and honour the craft.
            </p>
            <a href="#" className="mt-8 inline-flex items-center gap-2 border border-stone-500 px-7 py-3.5 text-sm hover:bg-stone-100 hover:text-stone-900 transition-colors">
              Read our story <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="reveal mx-auto max-w-3xl px-6 py-16 md:py-24 text-center">
        <div className="flex justify-center gap-1 mb-6 text-amber-800">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
        </div>
        <blockquote className="font-serif text-2xl md:text-3xl leading-snug text-balance">
          “The quality is extraordinary. I bought the cashmere coat two winters ago and it still looks brand new.”
        </blockquote>
        <p className="mt-6 text-sm text-stone-500 uppercase tracking-wider">Éloïse M. — Paris</p>
      </section>

      {/* Newsletter */}
      <section className="reveal bg-stone-100 border-t border-stone-200">
        <div className="mx-auto max-w-xl px-6 py-16 text-center">
          <h2 className="font-serif text-3xl">Join the atelier</h2>
          <p className="mt-3 text-stone-600">Early access to new collections and private sales.</p>
          <InteractiveForm successMessage="You've successfully joined the atelier list!" className="mt-6 flex flex-col sm:flex-row gap-3">
            <input required type="email" placeholder="Email address" className="flex-1 bg-stone-50 border border-stone-300 px-4 py-3 text-sm focus:outline-none focus:border-stone-900" />
            <button className="bg-stone-900 text-stone-50 px-7 py-3 text-sm tracking-wide hover:bg-stone-800 transition-colors">Subscribe</button>
          </InteractiveForm>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-50 border-t border-stone-200">
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <p className="font-serif text-2xl">AURÉLIA</p>
            <p className="mt-3 text-stone-500 leading-relaxed">Modern luxury essentials, made to last.</p>
          </div>
          {[
            { h: "Shop", l: ["New in", "Women", "Men", "Gifts"] },
            { h: "About", l: ["Our story", "Sustainability", "Ateliers", "Journal"] },
            { h: "Help", l: ["Shipping", "Returns", "Size guide", "Contact"] },
          ].map((c) => (
            <div key={c.h}>
              <p className="font-medium mb-3">{c.h}</p>
              <ul className="space-y-2 text-stone-500">
                {c.l.map((x) => <li key={x}><a href="#" className="hover:text-stone-900">{x}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-stone-200 py-5 text-center text-xs text-stone-400">
          © 2026 Aurélia. Template demo by your studio.
        </div>
      </footer>
    </div>
  )
}
