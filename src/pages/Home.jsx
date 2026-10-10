import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import CtaBand from '../components/CtaBand'
import CoverImage from '../components/CoverImage'
import { IMAGES, SERVICES, VALUES } from '../data/content'

export default function Home() {
  return (
    <>
      <Seo
        title="GP Global Petro Energy | Building Infrastructure. Delivering Reliability."
        description="GP Global Petro Energy supplies industrial bitumen and supports road, highway and civil infrastructure programmes from Rajendra Park, Haryana."
      />

      <section className="relative min-h-[88vh] overflow-hidden bg-[#12151a] text-[#f3efe6]">
        <CoverImage
          src={IMAGES.hero}
          alt="Aerial highway interchange, representative industry photograph"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12151a] via-[#12151a]/55 to-[#12151a]/25" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-[1280px] flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
          <p className="reveal text-[12px] font-semibold uppercase tracking-[0.24em] text-[#e8b089]">Rajendra Park, Haryana</p>
          <h1 className="reveal reveal-d1 mt-4 max-w-4xl font-serif text-5xl leading-[1.02] md:text-7xl">
            Building Infrastructure. Delivering Reliability.
          </h1>
          <p className="reveal reveal-d2 mt-6 max-w-xl text-lg leading-relaxed text-[#d8d2c6]">
            Industrial bitumen supply and coordinated support for road, highway and civil construction programmes — organised around quality, documentation and on-time movement.
          </p>
          <div className="reveal reveal-d3 mt-8 flex flex-wrap gap-3">
            <Link to="/capabilities" className="inline-flex bg-[#f3efe6] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#12151a] transition hover:bg-white">
              Explore Our Capabilities
            </Link>
            <Link to="/contact" className="inline-flex border border-[#f3efe6] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#f3efe6] transition hover:bg-[#f3efe6] hover:text-[#12151a]">
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-20 md:grid-cols-12 md:px-8 md:py-28">
        <div className="md:col-span-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#b45309]">The company</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">Materials partner for serious road programmes</h2>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <p className="text-lg leading-relaxed text-[#5f5a53]">
            GP Global Petro Energy works with construction teams that need industrial-grade bitumen, clear tax documentation and dependable dispatch. We operate from Rajendra Park, Haryana, and organise supply around the realities of site programmes — not around a catalogue page.
          </p>
          <Link to="/about" className="mt-6 inline-flex text-[13px] font-semibold uppercase tracking-[0.16em] text-[#12151a] underline decoration-[#b45309] underline-offset-4">
            Read about us
          </Link>
        </div>
      </section>

      <section className="border-y border-[#d4cdc0] bg-[#ece6da]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#b45309]">What we do</p>
              <h2 className="mt-3 font-serif text-4xl">Key capabilities</h2>
            </div>
            <Link to="/services" className="hidden text-[12px] font-semibold uppercase tracking-[0.16em] underline underline-offset-4 md:inline">All services</Link>
          </div>
          <div className="mt-12 grid gap-px bg-[#d4cdc0] md:grid-cols-3">
            {SERVICES.map((s) => (
              <article key={s.slug} className="bg-[#ece6da] p-8">
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5f5a53]">{s.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8 md:py-28">
        <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#b45309]">Why choose us</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl">How we work with construction teams</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v) => (
            <article key={v.title}>
              <div className="mb-4 h-px w-10 bg-[#b45309]" />
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5f5a53]">{v.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#12151a] text-[#f3efe6]">
        <div className="mx-auto grid max-w-[1280px] md:grid-cols-2">
          <div className="img-zoom cover-frame min-h-[320px] md:min-h-full">
            <CoverImage src={IMAGES.road} alt="Urban highway carriageway at dusk, representative industry photograph" className="object-cover" />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 md:px-14">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#e8b089]">Featured work</p>
            <h2 className="mt-3 font-serif text-4xl">Project records, when they can be published</h2>
            <p className="mt-4 text-[#cfc8bb]">
              Named projects, clients and contract values are not listed here. The portfolio structure is ready; public case studies will be added only with verified facts and permission.
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#8c867c]">Placeholder content</p>
            <Link to="/projects" className="mt-8 inline-flex w-fit border border-[#f3efe6] px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em]">
              View projects
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#b45309]">Equipment</p>
          <h2 className="mt-3 font-serif text-4xl">Organised for bulk movement</h2>
          <p className="mt-4 leading-relaxed text-[#5f5a53]">
            Consignments are planned around tanker movement, dispatch documentation and site receipt. Machinery inventories and technical specifications will be published when verified photographs are available.
          </p>
          <Link to="/capabilities" className="mt-6 inline-flex text-[13px] font-semibold uppercase tracking-[0.16em] underline decoration-[#b45309] underline-offset-4">
            Capabilities &amp; equipment
          </Link>
        </div>
        <div className="img-zoom cover-frame aspect-[4/3] w-full">
          <CoverImage src={IMAGES.bitumen} alt="Heavy excavator on a civil works site, representative industry photograph" className="object-cover" />
        </div>
      </section>

      <section className="border-y border-[#d4cdc0] bg-[#ece6da]">
        <div className="mx-auto max-w-[1280px] px-5 py-20 md:px-8">
          <h2 className="font-serif text-4xl">Quality &amp; safety</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ['Quality', 'Grade, quantity and paperwork are checked together so the site receives what was ordered.'],
              ['Safety', 'Bulk bitumen movement is treated as an industrial operation, with care at dispatch and receipt.'],
              ['Standards', 'We work to professional commercial practice. Independent certifications are listed only when they can be shown.'],
            ].map(([t, b]) => (
              <article key={t}>
                <h3 className="text-lg font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f5a53]">{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-5 py-20 md:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-4xl">Gallery</h2>
          <Link to="/gallery" className="text-[12px] font-semibold uppercase tracking-[0.16em] underline underline-offset-4">Open gallery</Link>
        </div>
        <p className="mt-3 max-w-xl text-sm text-[#5f5a53]">Industry photographs for atmosphere. They are not photographs of GP Global Petro Energy projects.</p>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {[IMAGES.hero, IMAGES.about, IMAGES.plant, IMAGES.night].map((src) => (
            <div key={src} className="img-zoom cover-frame aspect-[4/5]">
              <CoverImage src={src} alt="Infrastructure scene, representative industry photograph" className="object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
