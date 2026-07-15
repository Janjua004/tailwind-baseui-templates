import type { Metadata } from "next"
import Image from "next/image"
import { ShoppingCart, Menu, ArrowUpRight, Flame, Zap } from "lucide-react"
import { InteractiveForm } from "@/components/interactive-form"

export const metadata: Metadata = {
  title: "VOLTAGE — Streetwear Drops",
  description: "Limited streetwear drops for people who move different.",
}

const products = [
  { name: "Static Hoodie", price: "$120", img: "/clothing/voltage-1.webp", tag: "DROP 04" },
  { name: "Circuit Sneaker", price: "$180", img: "/clothing/voltage-2.webp", tag: "LOW STOCK" },
  { name: "Cargo Tech Pant", price: "$140", img: "/clothing/voltage-3.webp", tag: "NEW" },
  { name: "Static Hoodie", price: "$120", img: "/clothing/voltage-1.webp", tag: "" },
  { name: "Circuit Sneaker", price: "$180", img: "/clothing/voltage-2.webp", tag: "" },
  { name: "Cargo Tech Pant", price: "$140", img: "/clothing/voltage-3.webp", tag: "" },
]

export default function VoltagePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-[family-name:var(--font-display)]">
      {/* Marquee */}
      <div className="bg-lime-400 text-neutral-950 overflow-hidden py-2 text-xs font-bold uppercase tracking-widest flex">
        <div className="animate-marquee whitespace-nowrap flex gap-8 pr-8">
          <span>Drop 04 live now</span><span>•</span><span>Free shipping over $150</span><span>•</span><span>Members get early access</span>
          <span>•</span>
          <span>Drop 04 live now</span><span>•</span><span>Free shipping over $150</span><span>•</span><span>Members get early access</span>
          <span>•</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-neutral-950/85 backdrop-blur border-b border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-1.5 text-2xl font-bold tracking-tighter">
            <Zap className="h-6 w-6 text-lime-400 fill-lime-400" />VOLTAGE
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wide">
            <a href="#" className="hover:text-lime-400 transition-colors">Shop</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Drops</a>
            <a href="#" className="hover:text-lime-400 transition-colors">Lookbook</a>
            <a href="#" className="hover:text-lime-400 transition-colors">About</a>
          </nav>
          <div className="flex items-center gap-4">
            <button aria-label="Cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-lime-400 text-[10px] font-bold text-neutral-950 flex items-center justify-center">3</span>
            </button>
            <button className="md:hidden" aria-label="Menu"><Menu className="h-5 w-5" /></button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8 items-center py-14 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lime-400">
              <Flame className="h-3.5 w-3.5" /> Drop 04 — Static
            </span>
            <h1 className="mt-6 text-6xl md:text-8xl font-bold leading-[0.88] tracking-tighter uppercase text-balance">
              Move<br /><span className="text-lime-400">Different</span>
            </h1>
            <p className="mt-6 max-w-md text-neutral-400 leading-relaxed">
              Limited-run streetwear engineered for the city. When it&apos;s gone, it&apos;s gone.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#shop" className="inline-flex items-center gap-2 bg-lime-400 text-neutral-950 font-bold px-7 py-3.5 text-sm uppercase tracking-wide hover:bg-lime-300 transition-colors">
                Shop drop 04 <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#" className="inline-flex items-center gap-2 border border-neutral-700 px-7 py-3.5 text-sm uppercase tracking-wide font-bold hover:border-lime-400 hover:text-lime-400 transition-colors">
                Watch film
              </a>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl border border-neutral-800">
            <Image src="/clothing/voltage-hero.webp" alt="Model wearing VOLTAGE streetwear" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="reveal border-y border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-3 divide-x divide-neutral-800">
          {[["48h", "avg sellout"], ["120k", "community"], ["04", "drops this year"]].map(([n, l]) => (
            <div key={l} className="py-8 text-center">
              <p className="text-4xl md:text-5xl font-bold tracking-tighter text-lime-400">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="shop" className="reveal mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">The drop</h2>
          <a href="#" className="text-sm uppercase tracking-wide font-bold text-lime-400 hover:underline underline-offset-4">All products</a>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p, i) => (
            <div key={i} className="group relative bg-neutral-900 rounded-xl overflow-hidden border border-neutral-800 hover:border-lime-400/60 transition-colors">
              <div className="relative aspect-square overflow-hidden">
                <Image src={p.img || "/placeholder.svg"} alt={p.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
                {p.tag && (
                  <span className="absolute top-3 left-3 bg-lime-400 text-neutral-950 text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">{p.tag}</span>
                )}
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-bold uppercase tracking-wide text-sm">{p.name}</h3>
                  <p className="text-neutral-400 text-sm">{p.price}</p>
                </div>
                <button className="h-9 w-9 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-lime-400 group-hover:text-neutral-950 transition-colors" aria-label={`Add ${p.name}`}>
                  <ShoppingCart className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="reveal mx-auto max-w-7xl px-6 pb-16">
        <div className="relative rounded-3xl bg-lime-400 text-neutral-950 p-10 md:p-16 overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter leading-none text-balance max-w-2xl">
            Get the next drop first
          </h2>
          <p className="mt-5 max-w-md font-medium">Join the list. Members get 24-hour early access and exclusive colourways.</p>
          <InteractiveForm successMessage="You've been added to the early access list!" accentColor="bg-lime-400 text-neutral-950" className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
            <input required type="email" placeholder="your@email.com" className="flex-1 bg-neutral-950 text-neutral-100 rounded-full px-5 py-3.5 text-sm placeholder:text-neutral-500 focus:outline-none" />
            <button className="rounded-full bg-neutral-950 text-lime-400 font-bold px-7 py-3.5 text-sm uppercase tracking-wide hover:bg-neutral-800 transition-colors">Join list</button>
          </InteractiveForm>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <p className="flex items-center gap-1.5 text-2xl font-bold tracking-tighter"><Zap className="h-6 w-6 text-lime-400 fill-lime-400" />VOLTAGE</p>
            <p className="mt-3 text-neutral-500 text-sm max-w-xs">Limited streetwear drops. Built in the city, worn everywhere.</p>
          </div>
          <div className="flex gap-12 text-sm">
            {[
              { h: "Shop", l: ["All", "Drops", "Sale"] },
              { h: "Info", l: ["Shipping", "Returns", "Sizing"] },
              { h: "Social", l: ["Instagram", "TikTok", "Discord"] },
            ].map((c) => (
              <div key={c.h}>
                <p className="font-bold uppercase tracking-wide mb-3 text-xs text-neutral-400">{c.h}</p>
                <ul className="space-y-2 text-neutral-500">
                  {c.l.map((x) => <li key={x}><a href="#" className="hover:text-lime-400">{x}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t border-neutral-800 py-5 text-center text-xs text-neutral-600 uppercase tracking-widest">
          © 2026 Voltage — Template demo
        </div>
      </footer>
    </div>
  )
}
