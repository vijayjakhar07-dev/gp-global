import { useMemo, useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CtaBand from '../components/CtaBand'
import CoverImage from '../components/CoverImage'
import { PLACEHOLDER_PROJECTS } from '../data/content'

const FILTERS = ['All', 'Road Works', 'Highway', 'Bituminous', 'Civil']

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const items = useMemo(
    () => (filter === 'All' ? PLACEHOLDER_PROJECTS : PLACEHOLDER_PROJECTS.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <>
      <Seo
        title="Projects | GP Global Petro Energy"
        description="Portfolio structure for GP Global Petro Energy road and infrastructure work. Named projects will be published only with verified facts."
      />
      <PageHero
        kicker="Projects"
        title="A portfolio that will only show what can be verified."
        lede="Cards below are placeholders. They exist so real programmes can be added later without redesigning the page. They are not completed or awarded projects."
      />

      <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`min-h-11 border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] ${
                filter === f ? 'border-[#12151a] bg-[#12151a] text-[#f3efe6]' : 'border-[#d4cdc0] text-[#3e3a35]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <p className="mt-8 border border-dashed border-[#b45309]/40 bg-[#f7eee4] px-4 py-3 text-sm text-[#7a4a1e]">
          Placeholder content — not real client work. Replace with approved project records before public launch.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {items.map((p) => (
            <article key={p.id} className="border border-[#d4cdc0] bg-white/40">
              <div className="cover-frame img-zoom relative aspect-[16/9] bg-[#d8d1c3]">
                <CoverImage src={p.src} alt={p.alt} className="object-cover" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#12151a]/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-5 z-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f3efe6]">{p.status}</span>
              </div>
              <div className="p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#b45309]">{p.category} · {p.location}</p>
                <h2 className="mt-2 font-serif text-3xl">{p.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-[#5f5a53]">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  )
}
