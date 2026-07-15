import type { Metadata } from "next"
import Image from "next/image"
import { Smile, Phone, CalendarCheck, Sparkles, ShieldPlus, Baby, Zap, CheckCircle2, ArrowRight, Star, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "BrightSmile Dental — Modern Dentistry",
  description: "Gentle, modern dental care that keeps you smiling.",
}

const treatments = [
  { icon: Sparkles, t: "Teeth Whitening", d: "Brighten your smile in a single visit.", price: "from $199" },
  { icon: ShieldPlus, t: "Checkup & Clean", d: "Comprehensive exam and hygiene.", price: "from $89" },
  { icon: Zap, t: "Invisalign", d: "Discreet, comfortable teeth straightening.", price: "from $2,400" },
  { icon: Baby, t: "Kids Dentistry", d: "Fun, gentle care for little ones.", price: "from $60" },
]

export default function BrightSmilePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-sky-50">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-sky-600">
            <span className="h-9 w-9 rounded-full bg-sky-500 text-white flex items-center justify-center"><Smile className="h-5 w-5" /></span>
            BrightSmile
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#treatments" className="hover:text-sky-600">Treatments</a>
            <a href="#why" className="hover:text-sky-600">Why us</a>
            <a href="#reviews" className="hover:text-sky-600">Reviews</a>
            <a href="#book" className="hover:text-sky-600">Book</a>
          </nav>
          <a href="tel:5551234567" className="inline-flex items-center gap-2 text-sm font-medium text-sky-600">
            <Phone className="h-4 w-4" /> (555) 123-4567
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 rounded-full px-4 py-1.5 text-sm font-medium">
              <Sparkles className="h-4 w-4" /> New patients welcome
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-[1.05] text-slate-900 text-balance">
              A dentist you&apos;ll actually <span className="text-sky-500">look forward to</span>
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed max-w-md">
              Pain-free, modern dentistry in a relaxing environment. Same-week appointments and transparent pricing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3.5 rounded-full text-sm font-semibold hover:bg-sky-600 transition-colors shadow-lg shadow-sky-500/20">
                <CalendarCheck className="h-4 w-4" /> Book free consult
              </a>
              <a href="#treatments" className="inline-flex items-center gap-2 bg-white border border-sky-200 px-6 py-3.5 rounded-full text-sm font-semibold text-sky-700 hover:bg-sky-50 transition-colors">
                See treatments
              </a>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
              <div className="flex text-amber-400">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <span className="font-medium text-slate-700">4.9</span> from 800+ reviews
            </div>
          </div>
          <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <Image src="/medical/dental-hero.webp" alt="Happy patient with a bright smile" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section id="treatments" className="reveal mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Treatments &amp; pricing</h2>
          <p className="mt-3 text-slate-600">No surprises — clear, upfront prices for every service.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map(({ icon: Icon, t, d, price }) => (
            <div key={t} className="rounded-3xl bg-sky-50/70 p-6 hover:bg-sky-100/70 transition-colors">
              <span className="h-12 w-12 rounded-2xl bg-white text-sky-500 flex items-center justify-center shadow-sm"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-4 font-bold text-slate-900">{t}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{d}</p>
              <p className="mt-4 text-sky-600 font-semibold text-sm">{price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="reveal bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/medical/dental-office.webp" alt="Modern BrightSmile treatment room" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="text-slate-200">
            <p className="text-sm uppercase tracking-widest text-sky-400 font-medium">The BrightSmile difference</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white text-balance">Advanced tech, gentle hands</h2>
            <div className="mt-8 space-y-5">
              {[
                ["Painless treatments", "Latest anaesthetic and laser technology for comfort."],
                ["Transparent pricing", "Know exactly what you'll pay before we begin."],
                ["Flexible payment plans", "Spread the cost of bigger treatments interest-free."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="text-slate-400 text-sm mt-1">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="reveal mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ["I used to dread the dentist — now I actually enjoy it. The team is so gentle and kind.", "Jordan P."],
            ["Booked online, seen within two days, and my whitening results are amazing.", "Priya S."],
            ["My kids love coming here. Bright, friendly, and never any stress.", "Marcus L."],
          ].map(([q, n]) => (
            <div key={n} className="rounded-3xl border border-slate-100 p-6 shadow-sm">
              <Quote className="h-8 w-8 text-sky-200" />
              <p className="mt-4 text-slate-700 leading-relaxed">{q}</p>
              <p className="mt-5 font-semibold text-slate-900 text-sm">{n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="reveal mx-auto max-w-5xl px-6 pb-16 md:pb-24">
        <div className="rounded-[2rem] bg-sky-500 text-white p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center shadow-xl shadow-sky-500/20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Your brighter smile starts here</h2>
            <p className="mt-3 text-sky-100">Book a free consultation today — no obligation, no pressure.</p>
          </div>
          <form className="grid gap-3">
            <input placeholder="Your name" className="rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none" />
            <input placeholder="Phone or email" className="rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none" />
            <button className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white rounded-xl py-3.5 text-sm font-semibold hover:bg-slate-800 transition-colors">
              Book my consult <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="flex items-center gap-2 font-bold text-sky-600"><Smile className="h-5 w-5" /> BrightSmile Dental</p>
          <p>123 Marina Blvd · (555) 123-4567 · hello@brightsmile.co</p>
          <p className="text-slate-400">© 2026 — Template demo</p>
        </div>
      </footer>
    </div>
  )
}
