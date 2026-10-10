import { useEffect, useMemo, useState } from 'react'
import Seo from '../components/Seo'
import PageHero from '../components/PageHero'
import CoverImage from '../components/CoverImage'
import { GALLERY } from '../data/content'

const CATS = ['All', 'Projects', 'Machinery', 'Road Works', 'Construction', 'Infrastructure']

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [active, setActive] = useState(null)
  const items = useMemo(() => (cat === 'All' ? GALLERY : GALLERY.filter((g) => g.category === cat)), [cat])

  const open = (id) => setActive(items.findIndex((g) => g.id === id))
  const close = () => setActive(null)
  const prev = () => setActive((i) => (i <= 0 ? items.length - 1 : i - 1))
  const next = () => setActive((i) => (i >= items.length - 1 ? 0 : i + 1))

  useEffect(() => {
    if (active === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowLeft') setActive((i) => (i <= 0 ? items.length - 1 : i - 1))
      if (e.key === 'ArrowRight') setActive((i) => (i >= items.length - 1 ? 0 : i + 1))
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, items.length])

  const current = active !== null ? items[active] : null

  return (
    <>
      <Seo
        title="Gallery | GP Global Petro Energy"
        description="Visual gallery of representative infrastructure, machinery and road-works photography. Images are industry photographs, not company project records."
      />
      <PageHero
        kicker="Gallery"
        title="The industrial landscape we work in."
        lede="Photographs on this page are representative industry images. They are not photographs of GP Global Petro Energy sites or projects and will be replaced with company photography when available."
      />

      <section className="mx-auto max-w-[1280px] px-5 py-14 md:px-8">
        <div className="flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={`min-h-11 border px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.14em] ${
                cat === c ? 'border-[#12151a] bg-[#12151a] text-[#f3efe6]' : 'border-[#d4cdc0]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-1 gap-3 sm:columns-2 lg:columns-3">
          {items.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => open(g.id)}
              className="img-zoom mb-3 block w-full break-inside-avoid text-left"
            >
              <CoverImage src={g.src} alt={g.alt} className="w-full" loading="lazy" />
              <span className="mt-2 block text-[11px] uppercase tracking-[0.16em] text-[#5f5a53]">{g.category}</span>
            </button>
          ))}
        </div>
      </section>

      {current && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#12151a]/92 p-4" role="dialog" aria-modal="true" aria-label="Image viewer">
          <button type="button" className="absolute right-5 top-5 text-sm uppercase tracking-[0.16em] text-[#f3efe6]" onClick={close}>Close</button>
          <button type="button" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#f3efe6]" onClick={prev} aria-label="Previous image">Prev</button>
          <figure className="max-h-[85vh] max-w-5xl">
            <CoverImage src={current.src} alt={current.alt} className="max-h-[78vh] w-full object-contain" />
            <figcaption className="mt-3 text-center text-sm text-[#d4cdc0]">{current.alt}</figcaption>
          </figure>
          <button type="button" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#f3efe6]" onClick={next} aria-label="Next image">Next</button>
        </div>
      )}
    </>
  )
}
