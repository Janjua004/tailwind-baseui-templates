import type { Metadata } from "next"
import Image from "next/image"
import {
  Stethoscope, Phone, Calendar, MapPin, Clock, Heart, Activity, Baby, Brain, Bone, ShieldCheck, ArrowRight, Star,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Meridian Health — Family Medical Clinic",
  description: "Compassionate, modern healthcare for the whole family.",
}

const services = [
  { icon: Heart, t: "Primary Care", d: "Routine checkups and ongoing care for every age." },
  { icon: Activity, t: "Diagnostics", d: "On-site labs and imaging with fast results." },
  { icon: Baby, t: "Pediatrics", d: "Gentle, attentive care for infants and children." },
  { icon: Brain, t: "Mental Health", d: "Confidential counselling and psychiatry." },
  { icon: Bone, t: "Physiotherapy", d: "Recovery and mobility programs tailored to you." },
  { icon: ShieldCheck, t: "Preventive Care", d: "Screenings and vaccines to keep you well." },
]

export default function MeridianPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Top bar */}
      <div className="bg-teal-700 text-teal-50 text-sm">
        <div className="mx-auto max-w-6xl px-6 h-10 flex items-center justify-between">
          <span className="hidden sm:flex items-center gap-2"><MapPin className="h-4 w-4" /> 218 Wellness Ave, Riverside</span>
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 240-8890</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-lg text-teal-800">
            <span className="h-9 w-9 rounded-xl bg-teal-700 text-white flex items-center justify-center"><Stethoscope className="h-5 w-5" /></span>
            Meridian Health
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#services" className="hover:text-teal-700">Services</a>
            <a href="#about" className="hover:text-teal-700">About</a>
            <a href="#doctors" className="hover:text-teal-700">Doctors</a>
            <a href="#contact" className="hover:text-teal-700">Contact</a>
          </nav>
          <a href="#book" className="inline-flex items-center gap-2 bg-teal-700 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-teal-800 transition-colors">
            <Calendar className="h-4 w-4" /> Book now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal bg-teal-50/60">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm text-teal-700 shadow-sm">
              <Heart className="h-4 w-4" /> Trusted by 12,000+ families
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight text-slate-900 text-balance">
              Modern healthcare with a human touch
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed max-w-md">
              Same-day appointments, on-site diagnostics, and a caring team dedicated to keeping your family healthy.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#book" className="inline-flex items-center gap-2 bg-teal-700 text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-teal-800 transition-colors">
                Book an appointment <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3.5 rounded-full text-sm font-medium hover:border-teal-700 hover:text-teal-700 transition-colors">
                Our services
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal-600" /> Open 7 days</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-600" /> Insurance accepted</span>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/medical/clinic-hero.webp" alt="Doctor consulting with a patient at Meridian Health" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="reveal mx-auto max-w-6xl px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-100 rounded-2xl overflow-hidden shadow-sm">
          {[["25+", "Specialists"], ["12k", "Patients"], ["4.9", "Avg rating"], ["7 days", "Open weekly"]].map(([n, l]) => (
            <div key={l} className="bg-white p-6 text-center">
              <p className="text-3xl font-semibold text-teal-700">{n}</p>
              <p className="mt-1 text-sm text-slate-500">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="reveal mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm uppercase tracking-widest text-teal-700 font-medium">What we offer</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">Comprehensive care under one roof</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, t, d }) => (
            <div key={t} className="group rounded-2xl border border-slate-100 p-6 hover:border-teal-200 hover:shadow-md transition-all">
              <span className="h-12 w-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-white transition-colors">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-semibold text-lg text-slate-900">{t}</h3>
              <p className="mt-2 text-slate-600 leading-relaxed text-sm">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About split */}
      <section id="about" className="reveal bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image src="/medical/clinic-facility.webp" alt="Meridian Health reception area" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sm uppercase tracking-widest text-teal-700 font-medium">Why Meridian</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900 text-balance">Care that puts you first</h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              From your first visit, you&apos;ll notice the difference: unhurried appointments, doctors who listen, and a
              welcoming space designed to feel calm, not clinical.
            </p>
            <ul className="mt-6 space-y-3">
              {["Same-day and walk-in appointments", "Digital records and online results", "Multilingual, compassionate staff", "On-site pharmacy and lab"].map((x) => (
                <li key={x} className="flex items-center gap-3 text-slate-700">
                  <span className="h-6 w-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0"><ShieldCheck className="h-3.5 w-3.5" /></span>
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="doctors" className="reveal mx-auto max-w-4xl px-6 py-16 md:py-24 text-center">
        <div className="flex justify-center gap-1 mb-6 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
        </div>
        <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 leading-snug text-balance">
          “The whole team made my kids feel completely at ease. Booking is easy and we&apos;re always seen on time.”
        </blockquote>
        <p className="mt-6 text-slate-500">Amara T. — Patient since 2021</p>
      </section>

      {/* Booking CTA */}
      <section id="book" className="reveal bg-teal-700">
        <div className="mx-auto max-w-6xl px-6 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-teal-50">
            <h2 className="text-3xl md:text-4xl font-semibold text-white text-balance">Ready to feel your best?</h2>
            <p className="mt-3 text-teal-100 max-w-md">Book online in under two minutes or call our friendly reception team.</p>
          </div>
          <form className="bg-white rounded-2xl p-5 grid sm:grid-cols-2 gap-3 shadow-lg">
            <input placeholder="Full name" className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600" />
            <input placeholder="Phone number" className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600" />
            <input placeholder="Preferred date" className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600 sm:col-span-2" />
            <button className="sm:col-span-2 bg-teal-700 text-white rounded-lg py-3 text-sm font-medium hover:bg-teal-800 transition-colors">Request appointment</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-300">
        <div className="mx-auto max-w-6xl px-6 py-12 grid md:grid-cols-4 gap-8 text-sm">
          <div className="md:col-span-1">
            <p className="flex items-center gap-2 text-white font-semibold text-lg"><Stethoscope className="h-5 w-5 text-teal-400" /> Meridian Health</p>
            <p className="mt-3 text-slate-400 leading-relaxed">Modern family healthcare with a human touch.</p>
          </div>
          <div>
            <p className="text-white font-medium mb-3">Hours</p>
            <ul className="space-y-1.5 text-slate-400">
              <li>Mon–Fri: 8am – 8pm</li><li>Sat: 9am – 5pm</li><li>Sun: 10am – 4pm</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium mb-3">Contact</p>
            <ul className="space-y-1.5 text-slate-400">
              <li>(555) 240-8890</li><li>care@meridian.health</li><li>218 Wellness Ave</li>
            </ul>
          </div>
          <div>
            <p className="text-white font-medium mb-3">Links</p>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#services" className="hover:text-teal-400">Services</a></li>
              <li><a href="#book" className="hover:text-teal-400">Book online</a></li>
              <li><a href="#" className="hover:text-teal-400">Patient portal</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 py-5 text-center text-xs text-slate-500">© 2026 Meridian Health — Template demo</div>
      </footer>
    </div>
  )
}
