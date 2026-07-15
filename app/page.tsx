import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Layers } from "lucide-react"

type Template = {
  name: string
  tagline: string
  href: string
  image: string
  accent: string
}

type Category = {
  niche: string
  templates: Template[]
}

const categories: Category[] = [
  {
    niche: "Clothing & Fashion",
    templates: [
      { name: "Aurélia", tagline: "Minimal luxury boutique", href: "/clothing/aurelia", image: "/clothing/aurelia-hero.webp", accent: "#8a6d4b" },
      { name: "VOLTAGE", tagline: "Bold streetwear drop", href: "/clothing/voltage", image: "/clothing/voltage-hero.webp", accent: "#d9e021" },
    ],
  },
  {
    niche: "Medical & Clinic",
    templates: [
      { name: "Meridian", tagline: "Family health clinic", href: "/medical/meridian", image: "/medical/clinic-hero.webp", accent: "#2f9e8f" },
      { name: "BrightSmile", tagline: "Modern dental practice", href: "/medical/brightsmile", image: "/medical/dental-hero.webp", accent: "#3b82c4" },
    ],
  },
  {
    niche: "Pharmacy & Wellness",
    templates: [
      { name: "CareVault", tagline: "Prescription delivery pharmacy", href: "/pharmacy/carevault", image: "/pharmacy/carevault-hero.webp", accent: "#2563a8" },
      { name: "Verde", tagline: "Premium supplements brand", href: "/pharmacy/verde", image: "/pharmacy/verde-hero.webp", accent: "#6b7d4a" },
    ],
  },
  {
    niche: "Toy Shop",
    templates: [
      { name: "WonderBox", tagline: "Playful kids toy store", href: "/toys/wonderbox", image: "/toys/wonderbox-hero.webp", accent: "#e8542f" },
      { name: "Timber & Co", tagline: "Handcrafted wooden toys", href: "/toys/timber", image: "/toys/timber-hero.webp", accent: "#a8783f" },
    ],
  },
  {
    niche: "Restaurant & Cafe",
    templates: [
      { name: "Ember", tagline: "Fine dining restaurant", href: "/restaurant/ember", image: "/restaurant/ember-hero.webp", accent: "#c0632f" },
      { name: "Daybreak", tagline: "Neighborhood cafe & bakery", href: "/restaurant/daybreak", image: "/restaurant/daybreak-hero.webp", accent: "#c0632f" },
    ],
  },
  {
    niche: "More Industries",
    templates: [
      { name: "Pulse", tagline: "High-energy fitness gym", href: "/gym/pulse", image: "/gym/pulse-hero.webp", accent: "#c6f833" },
      { name: "Luxe Studio", tagline: "Hair & beauty salon", href: "/salon/luxe", image: "/salon/luxe-hero.webp", accent: "#c08a7d" },
      { name: "Haven", tagline: "Luxury real estate", href: "/realestate/haven", image: "/realestate/haven-hero.webp", accent: "#c9a24b" },
      { name: "Sterling & Roe", tagline: "Law firm", href: "/law/sterling", image: "/law/sterling-hero.webp", accent: "#9a7b3f" },
    ],
  },
]

export default function TemplateDirectory() {
  const total = categories.reduce((n, c) => n + c.templates.length, 0)

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-neutral-400" />
            <span className="font-display text-lg font-bold tracking-tight">Studio Templates</span>
          </div>
          <span className="text-sm text-neutral-500">{total} live demos</span>
        </div>
      </header>

      <section className="reveal mx-auto max-w-6xl px-6 py-16 md:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">Client Pitch Collection</span>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-5xl font-bold leading-tight md:text-6xl">
          Ready-to-pitch website templates, one per industry.
        </h1>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-neutral-400">
          A curated set of finished demos across {categories.length} sectors. Open any template, copy its link, and share it directly with your client.
        </p>
      </section>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        {categories.map((cat) => (
          <section key={cat.niche} className="reveal mb-16">
            <div className="mb-6 flex items-center gap-4">
              <h2 className="font-display text-2xl font-bold">{cat.niche}</h2>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-sm text-neutral-500">{cat.templates.length} variations</span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {cat.templates.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 transition hover:border-white/30"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={t.image || "/placeholder.svg"}
                      alt={`${t.name} template preview`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: t.accent }} />
                        <h3 className="font-display text-xl font-bold">{t.name}</h3>
                      </div>
                      <p className="mt-1 text-sm text-neutral-400">{t.tagline}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 flex-shrink-0 text-neutral-500 transition group-hover:text-neutral-100" />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-neutral-500 md:flex-row">
          <span>© {new Date().getFullYear()} Studio Templates</span>
          <span>Each template is a standalone route — copy the URL to share.</span>
        </div>
      </footer>
    </div>
  )
}
