import Image from "next/image"
import { Home, Bed, Bath, Maximize, MapPin, Phone, ArrowRight } from "lucide-react"

const listings = [
  { name: "Skyline Penthouse", location: "Downtown Core", price: "$2.4M", beds: 3, baths: 3, sqft: "2,800" },
  { name: "Cliffside Villa", location: "Coastal Heights", price: "$3.8M", beds: 5, baths: 4, sqft: "4,200" },
  { name: "Garden Modern", location: "Maple District", price: "$1.6M", beds: 4, baths: 3, sqft: "3,100" },
]

export default function HavenRealEstate() {
  return (
    <div className="min-h-screen bg-[#0f1826] text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1826]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Home className="h-5 w-5 text-[#c9a24b]" />
            <span className="font-serif text-xl font-bold tracking-tight">Haven</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#listings" className="hover:text-[#c9a24b]">Listings</a>
            <a href="#about" className="hover:text-[#c9a24b]">About</a>
            <a href="#contact" className="hover:text-[#c9a24b]">Contact</a>
          </nav>
          <a href="#contact" className="rounded-full bg-[#c9a24b] px-5 py-2 text-sm font-semibold text-[#0f1826] transition hover:bg-[#b8912f]">
            Book a viewing
          </a>
        </div>
      </header>

      <section className="reveal relative">
        <div className="absolute inset-0">
          <Image src="/realestate/haven-hero.webp" alt="Luxury home at dusk" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1826] via-[#0f1826]/50 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-44">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a24b]">Luxury real estate</span>
          <h1 className="mt-4 max-w-2xl text-balance font-serif text-5xl font-bold leading-tight md:text-6xl">
            Find the home that finds you.
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/70">
            A curated collection of the region&apos;s most distinctive properties, matched to the way you want to live.
          </p>
          <a href="#listings" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c9a24b] px-7 py-3 text-sm font-semibold text-[#0f1826] transition hover:bg-[#b8912f]">
            Browse listings <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section id="listings" className="reveal mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a24b]">Featured</span>
            <h2 className="mt-2 font-serif text-4xl font-bold">Signature homes</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {listings.map((l) => (
            <div key={l.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3]">
                <Image src="/realestate/haven-hero.webp" alt={l.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                <span className="absolute right-3 top-3 rounded-full bg-[#c9a24b] px-3 py-1 text-xs font-bold text-[#0f1826]">{l.price}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold">{l.name}</h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-white/50">
                  <MapPin className="h-3.5 w-3.5" /> {l.location}
                </p>
                <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4 text-sm text-white/70">
                  <span className="flex items-center gap-1.5"><Bed className="h-4 w-4 text-[#c9a24b]" /> {l.beds}</span>
                  <span className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-[#c9a24b]" /> {l.baths}</span>
                  <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4 text-[#c9a24b]" /> {l.sqft} ft²</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="reveal border-y border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
          {[
            { n: "$1.2B", l: "In sales" },
            { n: "480+", l: "Homes sold" },
            { n: "18 yrs", l: "Experience" },
            { n: "98%", l: "Client referrals" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-serif text-3xl font-bold text-[#c9a24b]">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="reveal mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-[#c9a24b]/30 bg-white/5 p-10 text-center md:p-16">
          <h2 className="font-serif text-4xl font-bold">Ready to make your move?</h2>
          <p className="mx-auto mt-4 max-w-md text-pretty leading-relaxed text-white/70">
            Speak with an advisor for a private consultation and tailored property shortlist.
          </p>
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c9a24b] px-8 py-3 text-sm font-semibold text-[#0f1826] transition hover:bg-[#b8912f]">
            <Phone className="h-4 w-4" /> (555) 730-1120
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/50 md:flex-row">
          <div className="flex items-center gap-2">
            <Home className="h-5 w-5 text-[#c9a24b]" />
            <span className="font-serif font-bold text-white">Haven</span>
          </div>
          <p>© {new Date().getFullYear()} Haven Real Estate. Live beautifully.</p>
        </div>
      </footer>
    </div>
  )
}
