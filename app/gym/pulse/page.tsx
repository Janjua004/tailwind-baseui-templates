import Image from "next/image"
import { Dumbbell, Zap, Users, Timer, ArrowRight, Check } from "lucide-react"

const plans = [
  { name: "Starter", price: "$29", period: "/mo", features: ["Full gym access", "2 group classes / week", "Locker room"], featured: false },
  { name: "Pro", price: "$59", period: "/mo", features: ["24/7 access", "Unlimited classes", "1 PT session / month", "Nutrition plan"], featured: true },
  { name: "Elite", price: "$99", period: "/mo", features: ["Everything in Pro", "Weekly PT sessions", "Recovery suite", "Guest passes"], featured: false },
]

const classes = [
  { name: "Strength Lab", time: "6:00 AM", icon: Dumbbell },
  { name: "HIIT Burn", time: "12:00 PM", icon: Zap },
  { name: "Team WOD", time: "5:30 PM", icon: Users },
  { name: "Express 30", time: "7:00 PM", icon: Timer },
]

export default function PulseGym() {
  return (
    <div className="min-h-screen bg-[#0d0f0d] text-white font-sans">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0f0d]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-[#c6f833]" />
            <span className="font-display text-xl font-bold uppercase tracking-widest">Pulse</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium text-white/70 md:flex">
            <a href="#classes" className="hover:text-[#c6f833]">Classes</a>
            <a href="#plans" className="hover:text-[#c6f833]">Membership</a>
            <a href="#join" className="hover:text-[#c6f833]">Contact</a>
          </nav>
          <a href="#join" className="rounded-full bg-[#c6f833] px-5 py-2 text-sm font-bold text-[#0d0f0d] transition hover:bg-[#b3e520]">
            Join now
          </a>
        </div>
      </header>

      <section className="reveal relative">
        <div className="absolute inset-0">
          <Image src="/gym/pulse-hero.webp" alt="Athlete training" fill sizes="100vw" priority className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f0d] via-[#0d0f0d]/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#c6f833]">No excuses</span>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            Train harder. Become unstoppable.
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/70">
            State-of-the-art equipment, expert coaches, and a community that pushes you further. Your transformation starts today.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#plans" className="inline-flex items-center gap-2 rounded-full bg-[#c6f833] px-7 py-3 text-sm font-bold text-[#0d0f0d] transition hover:bg-[#b3e520]">
              Start free trial <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#classes" className="rounded-full border border-white/30 px-7 py-3 text-sm font-bold transition hover:bg-white/10">
              View classes
            </a>
          </div>
        </div>
      </section>

      <section className="reveal border-y border-white/10 bg-[#141714]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
          {[
            { n: "3,500+", l: "Members" },
            { n: "40+", l: "Weekly classes" },
            { n: "25", l: "Expert coaches" },
            { n: "24/7", l: "Open access" },
          ].map((s) => (
            <div key={s.l} className="bg-[#0d0f0d] p-8 text-center">
              <div className="font-display text-3xl font-black text-[#c6f833]">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-white/50">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="classes" className="reveal mx-auto max-w-6xl px-6 py-20">
        <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#c6f833]">Timetable</span>
        <h2 className="mt-3 font-display text-4xl font-black uppercase">Today&apos;s classes</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((c) => (
            <div key={c.name} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-[#c6f833]">
              <c.icon className="h-8 w-8 text-[#c6f833]" />
              <h3 className="mt-4 font-display text-xl font-bold uppercase">{c.name}</h3>
              <p className="mt-1 text-sm text-white/50">Daily · {c.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="plans" className="reveal mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#c6f833]">Membership</span>
          <h2 className="mt-3 font-display text-4xl font-black uppercase">Pick your plan</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-3xl border p-8 ${p.featured ? "border-[#c6f833] bg-[#c6f833] text-[#0d0f0d]" : "border-white/10 bg-white/5"}`}
            >
              <h3 className="font-display text-xl font-bold uppercase">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl font-black">{p.price}</span>
                <span className={p.featured ? "text-[#0d0f0d]/70" : "text-white/50"}>{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className={`h-4 w-4 ${p.featured ? "text-[#0d0f0d]" : "text-[#c6f833]"}`} /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#join"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-bold transition ${p.featured ? "bg-[#0d0f0d] text-[#c6f833] hover:bg-black" : "bg-[#c6f833] text-[#0d0f0d] hover:bg-[#b3e520]"}`}
              >
                Choose {p.name}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="join" className="reveal mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl bg-[#c6f833] p-10 text-center text-[#0d0f0d] md:p-16">
          <h2 className="font-display text-4xl font-black uppercase md:text-5xl">Your first week is on us</h2>
          <p className="mx-auto mt-4 max-w-md text-pretty font-medium">No commitment. Walk in, work out, and see if Pulse is your new home.</p>
          <a href="#" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0d0f0d] px-8 py-3 text-sm font-bold text-[#c6f833] transition hover:bg-black">
            Claim free trial <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-white/50 md:flex-row">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-5 w-5 text-[#c6f833]" />
            <span className="font-display font-bold uppercase tracking-widest text-white">Pulse</span>
          </div>
          <p>© {new Date().getFullYear()} Pulse Fitness. Push your limits.</p>
        </div>
      </footer>
    </div>
  )
}
