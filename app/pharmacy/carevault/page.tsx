import type { Metadata } from "next"
import Image from "next/image"
import { Pill, Truck, Clock, ShieldCheck, Smartphone, RefreshCw, Search, ArrowRight, Plus, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "CareVault Pharmacy — Prescriptions, Delivered",
  description: "Refill, manage, and deliver your prescriptions in minutes.",
}

const categories = [
  { t: "Prescriptions", d: "Fast refills & transfers" },
  { t: "Cold & Flu", d: "Relief that works" },
  { t: "Vitamins", d: "Daily essentials" },
  { t: "Skincare", d: "Dermatologist picks" },
  { t: "Baby & Mom", d: "Gentle care" },
  { t: "First Aid", d: "Be prepared" },
]

export default function CareVaultPage() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-100">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center gap-6">
          <a href="#" className="flex items-center gap-2 font-bold text-lg text-blue-700 shrink-0">
            <span className="h-9 w-9 rounded-xl bg-blue-600 text-white flex items-center justify-center"><Pill className="h-5 w-5" /></span>
            CareVault
          </a>
          <div className="hidden md:flex flex-1 items-center bg-slate-100 rounded-full px-4 py-2.5">
            <Search className="h-4 w-4 text-slate-400" />
            <input placeholder="Search medicines, brands, symptoms…" className="bg-transparent text-sm px-3 flex-1 focus:outline-none" />
          </div>
          <a href="#refill" className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors shrink-0">
            Refill Rx
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="reveal bg-blue-50/60">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 text-sm text-blue-700 shadow-sm">
              <Truck className="h-4 w-4" /> Free same-day delivery
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight text-slate-900 text-balance">
              Your pharmacy, now on your schedule
            </h1>
            <p className="mt-5 text-slate-600 leading-relaxed max-w-md">
              Transfer, refill, and track prescriptions online. Delivered to your door or ready for pickup in minutes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#refill" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors">
                Transfer my prescription <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#shop" className="inline-flex items-center gap-2 border border-slate-300 px-6 py-3.5 rounded-full text-sm font-medium hover:border-blue-600 hover:text-blue-700 transition-colors">
                Shop wellness
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
            <Image src="/pharmacy/carevault-hero.webp" alt="Pharmacist at CareVault" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Feature tiles */}
      <section className="reveal mx-auto max-w-6xl px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: Truck, t: "Same-day delivery", d: "Order by 4pm, get it today." },
            { icon: RefreshCw, t: "Auto-refills", d: "Never run out again." },
            { icon: Smartphone, t: "Manage in-app", d: "All your meds in one place." },
            { icon: ShieldCheck, t: "Pharmacist chat", d: "Free advice, 24/7." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-slate-100 p-5 hover:shadow-md transition-shadow">
              <span className="h-11 w-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><Icon className="h-5 w-5" /></span>
              <h3 className="mt-4 font-semibold text-slate-900">{t}</h3>
              <p className="mt-1 text-sm text-slate-600">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="shop" className="reveal mx-auto max-w-6xl px-6 py-8 md:py-12">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Shop by category</h2>
          <a href="#" className="text-sm text-blue-600 font-medium hover:underline underline-offset-4">View all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((c) => (
            <a key={c.t} href="#" className="group flex items-center justify-between rounded-2xl bg-slate-50 hover:bg-blue-50 p-5 transition-colors">
              <div>
                <p className="font-semibold text-slate-900">{c.t}</p>
                <p className="text-sm text-slate-500">{c.d}</p>
              </div>
              <span className="h-9 w-9 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors"><Plus className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
      </section>

      {/* App / delivery split */}
      <section className="reveal bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center py-16 md:py-24">
          <div className="text-slate-200">
            <p className="text-sm uppercase tracking-widest text-blue-400 font-medium">How it works</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white text-balance">Three steps to easier refills</h2>
            <ol className="mt-8 space-y-6">
              {[
                ["Upload or transfer", "Snap a photo of your Rx or transfer from another pharmacy."],
                ["We prepare it", "Our pharmacists verify and package your order."],
                ["Delivered or pickup", "Get it same-day at your door, or collect in-store."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="text-slate-400 text-sm mt-1">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
            <Image src="/pharmacy/carevault-app.webp" alt="CareVault medication delivery" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Trust + review */}
      <section className="reveal mx-auto max-w-4xl px-6 py-16 md:py-24 text-center">
        <div className="flex justify-center gap-1 mb-6 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
        </div>
        <blockquote className="text-2xl md:text-3xl font-medium text-slate-900 leading-snug text-balance">
          “Refilling my mum&apos;s prescriptions used to take a whole afternoon. Now it takes two minutes on my phone.”
        </blockquote>
        <p className="mt-6 text-slate-500">Daniel R. — CareVault member</p>
      </section>

      {/* Refill CTA */}
      <section id="refill" className="reveal bg-blue-600">
        <div className="mx-auto max-w-5xl px-6 py-14 text-center text-white">
          <Clock className="h-10 w-10 mx-auto mb-4 text-blue-200" />
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Refill in under two minutes</h2>
          <p className="mt-3 text-blue-100 max-w-md mx-auto">Order by 4pm for free same-day delivery in your area.</p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input placeholder="Prescription number" className="flex-1 rounded-full px-5 py-3.5 text-sm text-slate-800 focus:outline-none" />
            <button className="rounded-full bg-slate-900 text-white px-7 py-3.5 text-sm font-semibold hover:bg-slate-800 transition-colors">Start refill</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p className="flex items-center gap-2 font-bold text-blue-700"><Pill className="h-5 w-5" /> CareVault Pharmacy</p>
          <p>Licensed pharmacy · Free delivery · 24/7 pharmacist chat</p>
          <p className="text-slate-400">© 2026 — Template demo</p>
        </div>
      </footer>
    </div>
  )
}
