import type { Metadata } from "next"
import Image from "next/image"
import { Flame, MapPin, Clock, Phone, ArrowRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Ember — Modern Fine Dining",
  description: "A seasonal tasting menu cooked over open flame.",
}

const menu = [
  { course: "First", name: "Charred leek, hazelnut, aged parmesan", price: "18" },
  { course: "Second", name: "Hand-dived scallop, brown butter, sea herbs", price: "26" },
  { course: "Main", name: "Ember-grilled wagyu, smoked bone marrow", price: "48" },
  { course: "Main", name: "Whole roasted turbot, fennel, saffron", price: "42" },
  { course: "Dessert", name: "Burnt honey custard, wild berries", price: "16" },
]

export default function EmberPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 font-sans">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-40">
        <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-serif text-2xl text-amber-100">
            <Flame className="h-6 w-6 text-amber-500" /> EMBER
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
            <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#visit" className="hover:text-amber-400 transition-colors">Visit</a>
          </nav>
          <a href="#reserve" className="inline-flex items-center gap-2 border border-amber-500/60 text-amber-100 px-5 py-2.5 rounded-full text-sm hover:bg-amber-500 hover:text-neutral-950 transition-colors">
            Reserve
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal relative h-[92vh] min-h-[560px] flex items-center justify-center text-center overflow-hidden">
        <Image src="/restaurant/ember-hero.webp" alt="Ember dining room" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/40 to-neutral-950" aria-hidden />
        <div className="relative px-6 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.4em] text-amber-400 mb-6">Est. 2018 · Cooked over fire</p>
          <h1 className="font-serif text-6xl md:text-8xl leading-[0.95] text-amber-50 text-balance">Dining, over open flame</h1>
          <p className="mt-6 text-neutral-300 leading-relaxed max-w-lg mx-auto">
            A seasonal tasting menu built around live fire, foraged herbs, and the finest produce of the day.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <a href="#reserve" className="inline-flex items-center gap-2 bg-amber-500 text-neutral-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-amber-400 transition-colors">
              Reserve a table <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#menu" className="inline-flex items-center gap-2 border border-neutral-600 px-8 py-4 rounded-full text-sm hover:border-amber-500 transition-colors">
              View menu
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="reveal mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center py-20 md:py-28">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-5">Our kitchen</p>
          <h2 className="font-serif text-4xl md:text-5xl text-amber-50 leading-tight text-balance">Fire is our only seasoning</h2>
          <p className="mt-6 text-neutral-400 leading-relaxed">
            Every dish passes through flame. We cook with wood-fired hearths and embers, coaxing depth and smoke from
            ingredients sourced within fifty miles of our door. The menu changes with the seasons, and sometimes with
            the morning&apos;s catch.
          </p>
          <p className="mt-4 text-neutral-400 leading-relaxed">
            Led by chef Marco Rossi, Ember earned its first star in 2021.
          </p>
        </div>
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
          <Image src="/restaurant/ember-dish.webp" alt="A plated dish at Ember" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="reveal border-y border-neutral-800 bg-neutral-900/40">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500 mb-3">Tasting menu</p>
            <h2 className="font-serif text-4xl md:text-5xl text-amber-50">The seasonal selection</h2>
          </div>
          <div className="space-y-2">
            {menu.map((m, i) => (
              <div key={i} className="flex items-baseline gap-4 py-4 border-b border-neutral-800">
                <span className="text-xs uppercase tracking-widest text-amber-500/80 w-16 shrink-0">{m.course}</span>
                <span className="font-serif text-lg text-amber-50 flex-1">{m.name}</span>
                <span className="text-neutral-400">${m.price}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-neutral-500 text-sm">Seven-course tasting menu $145 per guest · Wine pairing $85</p>
        </div>
      </section>

      {/* Review */}
      <section className="reveal mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <div className="flex justify-center gap-1 mb-6 text-amber-500">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
        </div>
        <blockquote className="font-serif text-2xl md:text-4xl text-amber-50 leading-snug text-balance">
          “The most memorable meal of the year. Every course was theatre, smoke, and pure flavour.”
        </blockquote>
        <p className="mt-6 text-sm text-neutral-500 uppercase tracking-widest">The Gourmet Review</p>
      </section>

      {/* Reserve */}
      <section id="reserve" className="reveal bg-amber-500 text-neutral-950">
        <div className="mx-auto max-w-5xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight text-balance">Reserve your table</h2>
            <p className="mt-3 max-w-md">Seatings Tuesday to Sunday. We recommend booking two weeks in advance.</p>
            <div id="visit" className="mt-6 space-y-2 text-sm font-medium">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 44 Kiln Street, Old Town</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> Tue–Sun · 6pm – 11pm</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 902-1188</p>
            </div>
          </div>
          <form className="bg-neutral-950 text-neutral-200 rounded-2xl p-6 grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Name" className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
              <input placeholder="Guests" className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input placeholder="Date" className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
              <input placeholder="Time" className="bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-amber-500" />
            </div>
            <button className="bg-amber-500 text-neutral-950 rounded-lg py-3.5 text-sm font-medium hover:bg-amber-400 transition-colors">Request reservation</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p className="flex items-center gap-2 font-serif text-xl text-amber-100"><Flame className="h-5 w-5 text-amber-500" /> EMBER</p>
          <p>44 Kiln Street · Reservations recommended</p>
          <p className="text-neutral-600">© 2026 — Template demo</p>
        </div>
      </footer>
    </div>
  )
}
