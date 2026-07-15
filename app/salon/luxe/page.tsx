import Image from "next/image"
import { Scissors, Sparkles, Clock, MapPin, Phone, Star } from "lucide-react"

const services = [
  { name: "Cut & Style", price: "from $65", desc: "Personalized cut and finish with a wash and blow-dry." },
  { name: "Color & Balayage", price: "from $140", desc: "Hand-painted dimension tailored to your tone." },
  { name: "Keratin Treatment", price: "from $180", desc: "Smoothing therapy for silky, frizz-free hair." },
  { name: "Bridal & Events", price: "from $120", desc: "Elegant styling for your most important days." },
  { name: "Facial Glow", price: "from $90", desc: "Deep-cleanse and hydration for radiant skin." },
  { name: "Manicure Suite", price: "from $45", desc: "Luxury nail care in a calm, private setting." },
]

export default function LuxeSalon() {
  return (
    <div className="min-h-screen bg-[#fbf4f2] text-[#3a2a2a] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#ead7d1] bg-[#fbf4f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#c08a7d]" />
            <span className="font-serif text-xl font-bold tracking-tight">Luxe Studio</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-[#c08a7d]">Services</a>
            <a href="#about" className="hover:text-[#c08a7d]">About</a>
            <a href="#book" className="hover:text-[#c08a7d]">Visit</a>
          </nav>
          <a href="#book" className="rounded-full bg-[#c08a7d] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#a97165]">
            Book now
          </a>
        </div>
      </header>

      <section className="reveal mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f3e2dd] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#c08a7d]">
            <Star className="h-3.5 w-3.5" /> Rated 5.0 by 800+ clients
          </span>
          <h1 className="mt-6 text-balance font-serif text-5xl font-bold leading-tight md:text-6xl">
            Where beauty feels effortless.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-[#7a6360]">
            A boutique hair and beauty studio dedicated to making you look and feel your absolute best. Relax, refresh, and glow.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#book" className="rounded-full bg-[#c08a7d] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#a97165]">
              Reserve your seat
            </a>
            <a href="#services" className="rounded-full border border-[#c08a7d] px-7 py-3 text-sm font-semibold text-[#c08a7d] transition hover:bg-[#f3e2dd]">
              View services
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-xl">
          <Image src="/salon/luxe-hero.webp" alt="Elegant salon interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <section id="services" className="reveal mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c08a7d]">The Menu</span>
          <h2 className="mt-2 font-serif text-4xl font-bold">Our services</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="rounded-2xl border border-[#ead7d1] bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
              <Scissors className="h-6 w-6 text-[#c08a7d]" />
              <div className="mt-4 flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-xl font-bold">{s.name}</h3>
                <span className="text-sm font-semibold text-[#c08a7d]">{s.price}</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#7a6360]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="reveal bg-[#f3e2dd]">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c08a7d]">Our Promise</span>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight">A little sanctuary in the middle of your week.</h2>
          <p className="mt-5 text-pretty leading-relaxed text-[#7a6360]">
            Our stylists blend precision with artistry, using only premium, cruelty-free products. Every visit is unhurried, personal, and designed around you.
          </p>
        </div>
      </section>

      <section id="book" className="reveal mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-[#ead7d1] bg-white p-8">
            <MapPin className="h-7 w-7 text-[#c08a7d]" />
            <h3 className="mt-4 font-serif text-xl font-bold">Visit us</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#7a6360]">12 Rosewood Lane<br />Downtown</p>
          </div>
          <div className="rounded-2xl border border-[#ead7d1] bg-white p-8">
            <Clock className="h-7 w-7 text-[#c08a7d]" />
            <h3 className="mt-4 font-serif text-xl font-bold">Hours</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#7a6360]">Tue–Sat · 9am–7pm<br />Sun · 10am–4pm</p>
          </div>
          <div className="rounded-2xl border border-[#ead7d1] bg-white p-8">
            <Phone className="h-7 w-7 text-[#c08a7d]" />
            <h3 className="mt-4 font-serif text-xl font-bold">Book by phone</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#7a6360]">(555) 214-8890<br />hello@luxestudio.co</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#ead7d1] bg-[#f3e2dd]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[#7a6360] md:flex-row">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-[#c08a7d]" />
            <span className="font-serif font-bold text-[#3a2a2a]">Luxe Studio</span>
          </div>
          <p>© {new Date().getFullYear()} Luxe Studio. Glow with confidence.</p>
        </div>
      </footer>
    </div>
  )
}
