import Image from "next/image"
import { Scale, Landmark, Briefcase, ShieldCheck, Phone, Mail, ArrowRight } from "lucide-react"

const practices = [
  { name: "Corporate Law", desc: "Mergers, acquisitions, and governance for growing businesses.", icon: Briefcase },
  { name: "Litigation", desc: "Strategic representation in complex commercial disputes.", icon: Scale },
  { name: "Real Estate", desc: "Transactions, development, and property matters handled end-to-end.", icon: Landmark },
  { name: "Estate Planning", desc: "Protecting your legacy with wills, trusts, and succession.", icon: ShieldCheck },
]

export default function SterlingLaw() {
  return (
    <div className="min-h-screen bg-[#f7f6f2] text-[#1c2431] font-sans">
      <header className="sticky top-0 z-50 border-b border-[#dcdad2] bg-[#f7f6f2]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-[#9a7b3f]" />
            <span className="font-serif text-xl font-bold tracking-tight">Sterling &amp; Roe</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#practice" className="hover:text-[#9a7b3f]">Practice Areas</a>
            <a href="#about" className="hover:text-[#9a7b3f]">Firm</a>
            <a href="#contact" className="hover:text-[#9a7b3f]">Contact</a>
          </nav>
          <a href="#contact" className="rounded-sm bg-[#1c2431] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#0f151f]">
            Free consultation
          </a>
        </div>
      </header>

      <section className="reveal mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7b3f]">Est. 1994</span>
          <h1 className="mt-4 text-balance font-serif text-5xl font-bold leading-tight md:text-6xl">
            Counsel you can build a future on.
          </h1>
          <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-[#4a5462]">
            For three decades, Sterling &amp; Roe has represented individuals and enterprises with rigor, discretion, and results that endure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-sm bg-[#1c2431] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#0f151f]">
              Request consultation <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#practice" className="rounded-sm border border-[#1c2431] px-7 py-3 text-sm font-semibold transition hover:bg-[#eceae2]">
              Our expertise
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-xl">
          <Image src="/law/sterling-hero.webp" alt="Law office interior" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        </div>
      </section>

      <section className="reveal border-y border-[#dcdad2] bg-[#eceae2]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-14 md:grid-cols-4">
          {[
            { n: "30+", l: "Years practicing" },
            { n: "1,200+", l: "Cases resolved" },
            { n: "$500M+", l: "Recovered" },
            { n: "24", l: "Senior attorneys" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-serif text-3xl font-bold text-[#9a7b3f]">{s.n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-[#4a5462]">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="practice" className="reveal mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7b3f]">Practice Areas</span>
          <h2 className="mt-3 font-serif text-4xl font-bold">Focused expertise, full-service reach</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {practices.map((p) => (
            <div key={p.name} className="flex gap-5 rounded-sm border border-[#dcdad2] bg-white p-7 transition hover:shadow-md">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-sm bg-[#1c2431]">
                <p.icon className="h-6 w-6 text-[#c9a24b]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5462]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="reveal bg-[#1c2431] text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a24b]">The Firm</span>
          <h2 className="mt-3 font-serif text-4xl font-bold leading-tight">Relentless preparation. Measured judgment.</h2>
          <p className="mt-5 text-pretty leading-relaxed text-white/70">
            We take on fewer clients so we can give each matter the attention it deserves. When you work with Sterling &amp; Roe, you work directly with a partner who knows your case inside and out.
          </p>
        </div>
      </section>

      <section id="contact" className="reveal mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-sm border border-[#dcdad2] bg-white p-8">
            <Phone className="h-7 w-7 text-[#9a7b3f]" />
            <h3 className="mt-4 font-serif text-xl font-bold">Call our office</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4a5462]">(555) 908-4412<br />Mon–Fri · 8am–6pm</p>
          </div>
          <div className="rounded-sm border border-[#dcdad2] bg-white p-8">
            <Mail className="h-7 w-7 text-[#9a7b3f]" />
            <h3 className="mt-4 font-serif text-xl font-bold">Email us</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#4a5462]">counsel@sterlingroe.law<br />One Financial Plaza, Suite 2400</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dcdad2] bg-[#eceae2]">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[#4a5462] md:flex-row">
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-[#9a7b3f]" />
            <span className="font-serif font-bold text-[#1c2431]">Sterling &amp; Roe</span>
          </div>
          <p>© {new Date().getFullYear()} Sterling &amp; Roe LLP. Attorney advertising.</p>
        </div>
      </footer>
    </div>
  )
}
